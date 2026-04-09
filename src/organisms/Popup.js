import React, { useState, useEffect } from 'react'
import './Popup.css'

export default function Popup() {
  const [openVideo, setOpenVideo] = useState(false)

  
  useEffect(() => {
    if (openVideo) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [openVideo])

  return (
    <section className="popup-section">

      {/* PLAY BUTTON */}
      <div className="play-wrapper">
        <div className="play-btn" onClick={() => setOpenVideo(true)}>
          ▶
        </div>
      </div>

      {/* MODAL */}
      {openVideo && (
        <div className="video-modal" onClick={() => setOpenVideo(false)}>

          <div className="video-content" onClick={(e) => e.stopPropagation()}>

            <span className="close" onClick={() => setOpenVideo(false)}>✖</span>

            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>

          </div>

        </div>
      )}

    </section>
  )
}