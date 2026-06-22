"use client"
import React, { useState, useEffect, useRef } from 'react'

// const API_BASE = 'http://localhost/manduhub_backend/specialsection'
const API_BASE = 'https://mandu.gr8.com.np/specialsection'

export default function SpecialSectionAdmin() {
  const [current, setCurrent] = useState('')
  const [preview, setPreview] = useState('')
  const [file, setFile]       = useState(null)
  const [status, setStatus]   = useState('')
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(true)  // ← new
  const inputRef = useRef()

  useEffect(() => {
    fetch(`${API_BASE}/get_image.php`)
      .then(r => r.json())
      .then(data => {
        if (data.status === 'success') {
          setCurrent(`${API_BASE}/${data.image}`)
        }
      })
      .catch(() => {
        setCurrent(`${API_BASE}/uploads/i1.jpg`)  // ← fallback on error
      })
      .finally(() => setFetching(false))  // ← done either way
  }, [])

  const handleFile = (e) => {
    const f = e.target.files[0]
    if (!f) return
    setFile(f)
    setPreview(URL.createObjectURL(f))
    setStatus('')
  }

  const handleUpload = async () => {
    if (!file) return
    setLoading(true)
    setStatus('')
    const form = new FormData()
    form.append('image', file)
    try {
      const res  = await fetch(`${API_BASE}/upload_image.php`, { method: 'POST', body: form })
      const data = await res.json()
      if (data.status === 'success') {
        setCurrent(`${API_BASE}/${data.image}`)
        setPreview('')
        setFile(null)
        inputRef.current.value = ''
        setStatus('✓ Image updated successfully')
      } else {
        setStatus(`Error: ${data.message}`)
      }
    } catch {
      setStatus('Upload failed — check your server.')
    }
    setLoading(false)
  }

  return (
    <div className="p-6 bg-white rounded-2xl border border-gray-200 max-w-xl">
      <h3 className="text-lg font-semibold mb-1">Special Section Image</h3>
      <p className="text-sm text-gray-500 mb-4">Replaces the image shown in the Specials section.</p>

      <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide">Current image</p>
      <div className="rounded-xl overflow-hidden h-44 bg-gray-100 mb-4 flex items-center justify-center">
        {fetching ? (
          <span className="text-sm text-gray-400">Loading...</span>   // ← show while fetching
        ) : current ? (
          <img src={current} alt="current" className="w-full h-full object-cover" />
        ) : (
          <span className="text-sm text-gray-400">No image set</span>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={handleFile}
        className="mb-3 text-sm"
      />

      {preview && (
        <>
          <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide">New image preview</p>
          <div className="rounded-xl overflow-hidden h-44 bg-gray-100 mb-4">
            <img src={preview} alt="preview" className="w-full h-full object-cover" />
          </div>
        </>
      )}

      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className="bg-[#D84315] text-white px-5 py-2 rounded-lg text-sm font-medium disabled:opacity-40"
      >
        {loading ? 'Uploading…' : 'Save Image'}
      </button>

      {status && (
        <p className={`mt-3 text-sm ${status.startsWith('✓') ? 'text-green-600' : 'text-red-500'}`}>
          {status}
        </p>
      )}
    </div>
  )
}