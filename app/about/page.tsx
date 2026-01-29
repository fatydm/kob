import Image from "next/image";

export default function Appointment() {
  return (
    <main className="w-full flex justify-center  ">
      <section className="max-w-6xl w-full px-4 py-20">
        <h1 className="text-4xl font-semibold text-center mb-4 mt-15">
          À propos de nous
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent mx-auto mb-12" />

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-justify text-m leading-relaxed text-(--text-light)">
            <p>
              Le maquillage a toujours été bien plus qu’une passion pour moi :
              c’est un langage, une manière de révéler la beauté unique de chaque
              femme. Depuis de nombreuses années, je me suis formée en{" "}
              <span className="font-extrabold">autodidacte</span>, guidée par la
              curiosité, la créativité et l’envie constante d’apprendre et de me
              perfectionner.
            </p>

            <br />

            <p>
              Ce que j’aime par-dessus tout, c’est{" "}
              <span className="font-extrabold">le moment du maquillage</span>.
              Prendre le temps d’écouter, de comprendre la personnalité, les
              envies et l’histoire de chaque cliente. Mon objectif n’est pas de
              transformer, mais de{" "}
              <span className="font-extrabold">magnifier</span>, de sublimer les
              traits tout en respectant l’identité de chacune.
            </p>

            <br />

            <p>
              Il n’y a rien de plus précieux pour moi que de voir ce regard
              s’illuminer dans le miroir, ce sourire discret ou cette confiance
              retrouvée. C’est dans ces instants-là que je sais pourquoi j’ai
              choisi ce métier.
            </p>

            <br />

            <p>
              À travers mon travail, je souhaite transmettre une vision du
              maquillage à la fois{" "}
              <span className="font-extrabold">
                élégante, naturelle et assumée
              </span>
              , où chaque détail compte. Que ce soit pour une occasion spéciale
              ou simplement pour se sentir belle au quotidien, mon approche
              reste la même : révéler la meilleure version de vous-même, avec
              douceur et authenticité.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-[320px] h-[420px] md:w-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/assets/D6AD06C1-F8CC-4DA3-A541-C69A5214446C_1_105_c.jpeg"
                alt="Photo de la fondatrice"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
