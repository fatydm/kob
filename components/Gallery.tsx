 "use client";

import { useEffect, useState } from "react";
import pictures from "@/data/pictures.json";
import Carousel from "@/components/Carroussel";

type GalleryItem = {
  id: number;
  image: string;
  type: string;
};

type GalleryProps = {
  /** Nombre max d'images à afficher là où je veux */
  limit?: number;

  /** Active ou non le carrousel au clic */
  clickable?: boolean;
};

const FILTERS = [
  { id: "all", label: "Toutes nos photos" },
  { id: "glamour", label: "Glamour" },
  { id: "natural", label: "Natural beauty" },
  { id: "sophisticated", label: "Sophistiqué" },
  { id: "artistic", label: "Artistique" },
];

export default function Gallery({
  limit,
  clickable = true,
}: GalleryProps) {
  const [type, setType] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [mounted, setMounted] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  // Lire les paramètres URL + mounted
  useEffect(() => {
    setMounted(true);
    const params = new URLSearchParams(window.location.search);
    setType(params.get("type") || "all");
  }, []);

  // 🔁 Reset page quand on change de filtre
  useEffect(() => {
    setCurrentPage(1);
  }, [type]);

  // 🔄 Ajuster itemsPerPage
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(2);
      } else if (window.innerWidth <= 1024) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(9);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔍 Filtrer les données
  const filteredPictures =
    type === "all"
      ? pictures
      : pictures.filter((item) => item.type === type);

  // 📄 Pagination
  const totalPages = Math.ceil(filteredPictures.length / itemsPerPage);
  const paginationStartIndex = (currentPage - 1) * itemsPerPage;
  const paginationEndIndex = paginationStartIndex + itemsPerPage;

  const dataToShow = limit
    ? filteredPictures.slice(0, limit)
    : filteredPictures.slice(paginationStartIndex, paginationEndIndex);

  const images = filteredPictures.map((item) => item.image);

  return (
    <main className="flex flex-col items-center rounded-xl">
      {/* 🎨 Filtres */}
      {!limit && (
        <div className="w-full max-w-6xl mb-8 px-4">
          <div className="flex flex-row flex-wrap gap-4 justify-center items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-[0_0_15px_rgba(176,141,115,0.4)]">
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setType(filter.id)}
                className={`
                  flex items-center gap-3 px-5 py-3 rounded-full
                  transition-all duration-300 ease-in-out
                  ${
                    type === filter.id
                      ? "bg-gradient-to-r from-[#b08d73] to-[#8b7355] text-white shadow-lg scale-105"
                      : "bg-white text-gray-700 border-2 border-[#b08d73] hover:bg-[#b08d73]/10 hover:scale-105"
                  }
                `}
              >
                {/* Radio button */}
                <div
                  className={`
                  w-5 h-5 rounded-full border-2 flex items-center justify-center
                  transition-all duration-300
                  ${
                    type === filter.id
                      ? "border-white bg-white"
                      : "border-[#b08d73]"
                  }
                `}
                >
                  {type === filter.id && (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#b08d73]" />
                  )}
                </div>

                {/* Label */}
                <span className="font-medium text-sm md:text-base whitespace-nowrap">
                  {filter.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 🖼️ Galerie */}
      <div className="flex flex-wrap justify-center gap-6 mt-6 mb-20 p-6 rounded-xl shadow-[0_0_10px_rgba(176,141,115,0.6)] max-w-6xl">
        {dataToShow.length > 0 ? (
          dataToShow.map((item, index) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.type}
              className={`
                w-[300px] h-[400px]
                object-cover rounded-md border-2
                ${clickable ? "cursor-pointer hover:scale-105 transition" : ""}
              `}
              onClick={() => {
                if (!clickable) return;
                // Calculer l'index global pour le carrousel
                const globalIndex = paginationStartIndex + index;
                setStartIndex(globalIndex);
                setOpen(true);
              }}
            />
          ))
        ) : (
          <div className="text-center py-20 text-gray-500">
            <p className="text-xl mb-2">Aucune photo trouvée</p>
            <p className="text-sm">
              Essayez de sélectionner une autre catégorie
            </p>
          </div>
        )}
      </div>

      {/* 📄 Pagination */}
      {!limit && totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mb-10">
          {/* Bouton Précédent */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`
              px-4 py-2 rounded-lg font-medium transition-all
              ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white border-2 border-[#b08d73] text-[#b08d73] hover:bg-[#b08d73] hover:text-white"
              }
            `}
          >
            ← Précédent
          </button>

          {/* Numéros de page */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`
                  w-10 h-10 rounded-lg font-medium transition-all
                  ${
                    currentPage === page
                      ? "bg-gradient-to-r from-[#b08d73] to-[#8b7355] text-white shadow-lg"
                      : "bg-white border-2 border-[#b08d73] text-[#b08d73] hover:bg-[#b08d73]/10"
                  }
                `}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Bouton Suivant */}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`
              px-4 py-2 rounded-lg font-medium transition-all
              ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white border-2 border-[#b08d73] text-[#b08d73] hover:bg-[#b08d73] hover:text-white"
              }
            `}
          >
            Suivant →
          </button>
        </div>
      )}

      {/* 🎠 Carrousel */}
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