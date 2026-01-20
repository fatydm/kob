"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Modale() {
  const [showModal, setShowModal] = useState(true)
  const router = useRouter()

  if (!showModal) return null

  return (
    <div
      className="fixed inset-0 w-full h-full z-[9999] flex justify-center items-center
                 bg-[url('https://i.pinimg.com/736x/93/6b/b9/936bb9a00c8b7e75b2698c6945ef7ad2.jpg')]
                 bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center">
        <button
          onClick={() => (router.push("/"))}
          className="bg-(var[--secondback]) text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition"
        >
          Découvrez notre univers
        </button>
      </div>
    </div>
  )
}
