"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import Button from "@/components/Button";

export default function HomePage() {
  const [showModal, setShowModal] = useState(true);
  const router = useRouter();

  // UseEffect pour bloquer le scroll derrière la modale
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    // Cleanup pour rétablir le scroll si le composant est démonté
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <>
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center
                     bg-[url('https://i.pinimg.com/736x/93/6b/b9/936bb9a00c8b7e75b2698c6945ef7ad2.jpg')]
                     bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 text-center">
            <button
              onClick={() => setShowModal(false)}
              className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition"
            >
              Découvrez notre univers
            </button>
          </div>
        </div>
      )}

      <main className="flex w-full flex-col items-center">
        <div className="w-full max-w-6xl px-4">
          <section className="text-base font-medium m-10">
          <Header />
            <p className="text-black text-justify mb-5">
              Bienvenue dans notre univers. Parce que chez K.O.B chaque femme mérite de se sentir sublime.
              À travers le maquillage, je révèle votre éclat naturel et crée des looks élégants, modernes et intemporels.
            </p>
            <p className="text-black text-justify mb-5">
              Spécialisée dans le soft glam, le maquillage sophistiqué et les mises en beauté événementielles, 
              je vous propose des prestations personnalisées, adaptées à votre personnalité, votre carnation et l'occasion.
            </p>
            <p className="text-black text-justify">
              Que ce soit pour un moment important ou simplement pour apprendre à vous mettre en valeur, 
              chaque rendez-vous est pensé comme une véritable expérience beauté, alliant expertise, douceur et précision.
              <br />
              <br />
              Laissez-vous porter par une expérience beauté sur-mesure.
            </p>

            <div className="flex flex-row items-center justify-center gap-5">
              <Button
                label="Notre galerie"
                onClick={() => router.push("/gallery")}
                type="button"
                classes=""
              />

              <Button
                label="Nos prestations"
                onClick={() => router.push("/services")}
                type="button"
                classes="
                  
                  "
              />

              <Button
                label="Nos formations"
                onClick={() => router.push("/formations")}
                type="button"
                classes=""
              />
            </div>
          </section>

          <section
            className="mt-10 flex flex-col items-center mb-10 rounded-xl py-8"
            style={{ backgroundColor: "var(--firstback)" }}
          >
            
            <Gallery limit={6} clickable={false} /> 

          
          </section>
        </div>
      </main>
    </>
  );
}