"use client"

import { useState } from "react"
import "./Gallery.css"
import G1 from "../Assets/g1.jpg"
import G2 from "../Assets/g2.jpg"
import G3 from "../Assets/g3.jpg"
import G4 from "../Assets/g4.jpg"
import G5 from "../Assets/g5.jpg"
import G6 from "../Assets/g6.jpg"
import G7 from "../Assets/g7.jpg"
import G8 from "../Assets/g8.jpg"
import G9 from "../Assets/g9.jpg"
import G10 from "../Assets/g10.jpg"
import G11 from "../Assets/g11.jpg"
import G12 from "../Assets/g12.jpg"
import G13 from "../Assets/g13.jpg"
import G14 from "../Assets/g14.jpg"
import { FaChevronLeft, FaChevronRight, FaExpand } from "react-icons/fa"

// Since we don't have actual images, I'll use placeholders
const vehicleImages = [
  { id: 1, type: "bus", src: G1 },
  { id: 2, type: "car", src: G2},
  {
    id: 3,
    type: "bus",
    src: G3
  },
  { id: 4, type: "bus", src: G4},
  { id: 5, type: "bus", src: G5},
  {
    id: 6,
    type: "car",
    src: G6,
   
  },
  { id: 7, type: "bus",  src: G7},
  { id: 8, type: "car",  src: G8},
  { id: 9, type: "car",  src: G9},
  { id: 10, type: "bus",  src: G10},
  { id: 11, type: "bus",  src: G11},
  { id: 12, type: "car",  src: G12},
  { id: 13, type: "car",  src: G13},
  { id: 14, type: "car",  src: G14},
]

const Gallery = () => {
  const [filter, setFilter] = useState("all")
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredImages = filter === "all" ? vehicleImages : vehicleImages.filter((image) => image.type === filter)

  const openLightbox = (image) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id)
    let newIndex

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredImages.length
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    }

    setSelectedImage(filteredImages[newIndex])
  }

  return (
    <div className="gallery-container" id="gallery">
      <h2 className="gallery-title">Our Fleet Gallery</h2>
      <div className="gallery-filters">
        <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>
          All Pictures
        </button>
        <button className={`filter-btn ${filter === "car" ? "active" : ""}`} onClick={() => setFilter("car")}>
          Cars
        </button>
        <button className={`filter-btn ${filter === "bus" ? "active" : ""}`} onClick={() => setFilter("bus")}>
          Buses
        </button>
      </div>

      <div className="gallery-grid">
        {filteredImages.map((image) => (
          <div className="gallery-item" key={image.id} onClick={() => openLightbox(image)}>
            <img src={image.src || "/placeholder.svg"} alt={image.alt} />
            <div className="gallery-overlay">
              <h3>{image.title}</h3>
              <span className="view-details">
                <FaExpand /> View
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              ×
            </button>
            <button className="lightbox-nav prev" onClick={() => navigateImage("prev")}>
              <FaChevronLeft />
            </button>
            <img src={selectedImage.src || "/placeholder.svg"} alt={selectedImage.alt} />
            <button className="lightbox-nav next" onClick={() => navigateImage("next")}>
              <FaChevronRight />
            </button>
            <div className="lightbox-caption">{selectedImage.title}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery

