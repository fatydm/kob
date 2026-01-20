"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

type CarouselProps = {
  images: string[];
  startIndex: number;
  onClose: () => void;
};

export default function Carousel({
  images,
  startIndex,
  onClose,
}: CarouselProps) {
  const [index, setIndex] = useState(startIndex);

  const prev = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="fixed inset-0 z-[999] bg-black/80">
      
      {/* UI layer (au-dessus de l’image) */}
      <div className="absolute inset-0 z-50 pointer-events-none">

        {/* Close */}
        <button
          onClick={onClose}
          className="
            pointer-events-auto
            absolute top-6 right-6
            bg-white text-black
            rounded-full p-2
            shadow-xl
            hover:scale-110 transition
          "
        >
          <X size={28} />
        </button>

        {/* Left */}
        {images.length > 1 && (
          <button
            onClick={prev}
            className="
              pointer-events-auto
              absolute left-6 top-1/2 -translate-y-1/2
              bg-white/80 rounded-full p-2
            "
          >
            <ArrowLeft />
          </button>
        )}

        {/* Right */}
        {images.length > 1 && (
          <button
            onClick={next}
            className="
              pointer-events-auto
              absolute right-6 top-1/2 -translate-y-1/2
              bg-white/80 rounded-full p-2
            "
          >
            <ArrowRight />
          </button>
        )}
      </div>

      {/* Image layer */}
      <div className="absolute inset-0 flex items-center justify-center z-40">
        <img
          src={images[index]}
          alt={`Image ${index + 1}`}
          className="max-h-[80vh] max-w-[90vw] object-contain rounded-xl"
        />
      </div>
    </div>
  );
}
