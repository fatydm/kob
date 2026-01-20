
"use client";

import { useState } from "react";
import pictures from "@/data/pictures.json";
import Carousel from "@/components/Carroussel";

type GalleryItem = {
  id: number;
  image: string;
  type: string;
};

type GalleryProps = {
  /** Nombre max d’images à afficher (ex: Home) */
  limit?: number;

  /** Active ou non le carrousel au clic */
  clickable?: boolean;
};

export default function Gallery({
  limit,
  clickable = true,
}: GalleryProps) {
  const dataToShow = limit ? pictures.slice(0, limit) : pictures;

  const images = pictures.map((item) => item.image);

  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  return (
    <main className="flex flex-col items-center py-5 bg-[var(--firstback)] rounded-xl">
      <h1>
        Nos prestations
      </h1>

      <div className="flex flex-wrap justify-center gap-6 mt-6  p-6 rounded-xl shadow-[0_0_10px_rgba(176,141,115,0.6)]">
        {dataToShow.map((item, index) => (
          <img
            key={item.id}
            src={item.image}
            alt={item.type}
            className={`
              w-[200px] h-[200px]
              object-cover rounded-md border-2
              ${clickable ? "cursor-pointer hover:scale-105 transition" : ""}
            `}
            onClick={() => {
              if (!clickable) return;
              setStartIndex(index);
              setOpen(true);
            }}
          />
        ))}
      </div>

      {clickable && open && (
        <Carousel
          images={images}
          startIndex={startIndex}
          onClose={() => setOpen(false)}
        />
      )}
    </main>
  );
}
