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
        <div className="
            fixed inset-0 z-50 flex justify-center items-center
            bg-[url('/assets/modale-img.png')]
            bg-cover bg-center pb-30">
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 text-center">
            <button
              onClick={() => setShowModal(false)}
              className="bg-[#8c8f82] text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition"
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
            <p className="text-(--text-light) text-center text-2xl mb-5">
              <span className="font-bold">Bienvenue dans notre univers.</span> <br/>
              Parce que chez K.O.B chaque femme mérite de se sentir sublime.
              À travers le maquillage, nous révélons votre éclat naturel et créons des looks élégants, modernes et intemporels.
            </p>
            
            <p className="text-(--text-light) text-center text-2xl mb-5">
              Que ce soit pour un moment important ou simplement pour apprendre à vous mettre en valeur, 
              chaque rendez-vous est pensé comme une véritable expérience beauté, alliant expertise, douceur et précision.
              <br />
              <br />
              Laissez-vous porter par une expérience beauté sur-mesure.
            </p>
          </section>

          <section className="flex flex-col items-center rounded-xl max-w-6xl">
              <Gallery limit={6} clickable={false} /> 
          </section>

          <section className="flex flex-row items-center justify-center gap-5 mb-15">
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
              classes=""
              />

            <Button
              label="Nos formations"
              onClick={() => router.push("/formations")}
              type="button"
              classes=""
              />
          </section>
        </div>
      </main>
    </>
  );
}