"use client"
import { useState, useEffect } from 'react'

// const API_BASE = 'http://localhost/manduhub_backend/testimonials'
const API_BASE = 'https://mandu.gr8.com.np/testimonials'

function StarPicker({ value, onChange }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map(s => (
        <button key={s} type="button" onClick={() => onChange(s)}>
          <svg xmlns="http://www.w3.org/2000/svg"
            className={`w-6 h-6 ${s <= value ? 'text-[#FFA726]' : 'text-gray-300'}`}
            fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </button>
      ))}
    </div>
  )
}

export default function TestimonialsAdmin() {
  const [reviews, setReviews] = useState([])
  const [fetching, setFetching] = useState(true)
  const [form, setForm] = useState({ name: '', rating: 5, text: '', date: '' })
  const [saving, setSaving] = useState(false)
  const [status, setStatus] = useState('')

  const load = () => {
    setFetching(true)
    fetch(`${API_BASE}/get_reviews.php`)
      .then(r => r.json())
      .then(data => { if (data.status === 'success') setReviews(data.reviews) })
      .finally(() => setFetching(false))
  }

  useEffect(() => { load() }, [])

  const handleAdd = async () => {
    if (!form.name || !form.text) return setStatus('Name and review text are required.')
    setSaving(true)
    setStatus('')
    const date = form.date || new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    try {
      const res  = await fetch(`${API_BASE}/add_review.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, date })
      })
      const data = await res.json()
      if (data.status === 'success') {
        setForm({ name: '', rating: 5, text: '', date: '' })
        setStatus('✓ Review added.')
        load()
      } else {
        setStatus(`Error: ${data.message}`)
      }
    } catch {
      setStatus('Failed — check your server.')
    }
    setSaving(false)
  }

  const handleDelete = async (id) => {
  if (!confirm('Delete this review?')) return
  try {
    const res  = await fetch(`${API_BASE}/delete_review.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    })
    const data = await res.json()
    if (data.status === 'success') {
      load()
    } else {
      alert(`Error: ${data.message}`)
    }
  } catch {
    alert('Delete failed — check your server.')
  }
}

  return (
    <div className="p-6 bg-white rounded-2xl border border-gray-200 max-w-2xl space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-1">Testimonials</h3>
        <p className="text-sm text-gray-500">Add or remove customer reviews.</p>
      </div>

      {/* Add form */}
      <div className="space-y-3 border border-gray-100 rounded-xl p-4">
        <h4 className="text-sm font-semibold text-gray-700">Add New Review</h4>
        <input
          placeholder="Customer name"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
        />
        <textarea
          placeholder='Review text e.g. "The momo here is absolutely amazing..."'
          value={form.text}
          onChange={e => setForm(f => ({ ...f, text: e.target.value }))}
          rows={3}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm resize-none"
        />
        <input
          placeholder="Date e.g. 3rd Jan, 2026 (leave blank for today)"
          value={form.date}
          onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
        />
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">Rating:</span>
          <StarPicker value={form.rating} onChange={v => setForm(f => ({ ...f, rating: v }))} />
        </div>
        <button
          onClick={handleAdd}
          disabled={saving}
          className="bg-[#D84315] text-white px-5 py-2 rounded-lg text-sm font-medium disabled:opacity-40"
        >
          {saving ? 'Adding…' : 'Add Review'}
        </button>
        {status && (
          <p className={`text-sm ${status.startsWith('✓') ? 'text-green-600' : 'text-red-500'}`}>{status}</p>
        )}
      </div>

      {/* Existing reviews */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-gray-700">Existing Reviews</h4>
        {fetching ? (
          <p className="text-sm text-gray-400">Loading...</p>
        ) : reviews.length === 0 ? (
          <p className="text-sm text-gray-400">No reviews yet.</p>
        ) : (
          reviews.map(r => (
            <div key={r.id} className="flex items-start justify-between gap-4 border border-gray-100 rounded-xl p-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#1a1a1a]">{r.name}
                  <span className="ml-2 text-[#FFA726]">{'★'.repeat(r.rating)}</span>
                </p>
                <p className="text-xs text-gray-400 mb-1">{r.date}</p>
                <p className="text-xs text-gray-500 truncate">{r.text}</p>
              </div>
              <button
                onClick={() => handleDelete(r.id)}
                className="text-red-400 hover:text-red-600 text-xs font-medium shrink-0"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}