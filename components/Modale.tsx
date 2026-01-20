"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Modale() {
  const [showModal, setShowModal] = useState(true)
  const router = useRouter()

  return (
    <>
      {showModal && (
        <div className="
            fixed inset-0 z-50 flex justify-center items-end
            bg-[url('/assets/modale-img.png')]
            bg-cover bg-center">
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 text-center">
            <button
              onClick={() => {
                setShowModal(false)
                router.push("/")
              }}
              className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition"
            >
              Découvrez notre univers
            </button>
          </div>
        </div>
      )}
    </>
  )
}