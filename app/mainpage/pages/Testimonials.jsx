"use client"
import { useState, useEffect } from 'react'

// const API_BASE = 'http://localhost/manduhub_backend/testimonials'
const API_BASE = 'https://mandu.gr8.com.np/testimonials'
const VISIBLE  = 3

function StarRating({ rating }) {
  return (
    <div className="flex gap-1 mb-4">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 ${s <= rating ? 'text-[#FFA726]' : 'text-gray-300'}`}
          fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [reviews, setReviews]     = useState([])
  const [startIndex, setStartIndex] = useState(0)
  const [fetching, setFetching]   = useState(true)

  useEffect(() => {
    fetch(`${API_BASE}/get_reviews.php`)
      .then(r => r.json())
      .then(data => {
        if (data.status === 'success') setReviews(data.reviews)
      })
      .finally(() => setFetching(false))
  }, [])

  const prev = () => setStartIndex(i => Math.max(0, i - 1))
  const next = () => setStartIndex(i => Math.min(reviews.length - VISIBLE, i + 1))
  const visible = reviews.slice(startIndex, startIndex + VISIBLE)

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12">
      <p className="text-center text-[#D84315] text-sm font-semibold tracking-wide mb-2">
        Testimonials
      </p>
      <h2 className="text-center text-[32px] md:text-[38px] font-normal text-[#1a1a1a] mb-10"
        style={{ fontFamily: 'Georgia, serif' }}>
        What Our <span className="text-[#D84315] font-semibold">Customers</span> Say
      </h2>

      {fetching ? (
        <p className="text-center text-sm text-gray-400">Loading reviews...</p>
      ) : (
        <div className="relative flex items-center justify-center gap-4 max-w-250 mx-auto">
          <button onClick={prev} disabled={startIndex === 0}
            className="shrink-0 w-10 h-10 rounded-full bg-white border border-gray-300 shadow flex items-center justify-center text-gray-500 text-xl hover:bg-[#D84315] hover:text-white hover:border-[#D84315] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed">
            ‹
          </button>

          <div className="flex gap-5 overflow-hidden w-full justify-center">
            {visible.map((review) => (
              <div key={review.id}
                className="bg-white border rounded-tl-[40px] rounded-br-[40px] border-gray-200 shadow-sm p-6 w-full max-w-70 shrink-0 flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
                <div>
                  <StarRating rating={parseInt(review.rating)} />
                  <p className="text-[13px] text-[#555] leading-[1.75] mb-6">{review.text}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#1a1a1a]">{review.name}</p>
                    <p className="text-[11px] text-gray-400">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={next} disabled={startIndex >= reviews.length - VISIBLE}
            className="shrink-0 w-10 h-10 rounded-full bg-[#D84315] text-white shadow flex items-center justify-center text-xl hover:bg-[#bf360c] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed">
            ›
          </button>
        </div>  
      )}

      <div className="flex justify-center mt-10">
        <a href="#" className="text-[#D84315] text-sm font-medium underline underline-offset-4 flex items-center gap-2 hover:text-[#bf360c] transition-colors duration-200">
          Leave a Review →
        </a>
      </div>
    </section>
  )
}