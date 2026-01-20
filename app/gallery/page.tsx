import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center">
      <div className=" max-w-6xl">
          <section className="text-base font-medium mt-30">
            <h1> Notre Galerie </h1>
            <p className="text-black text-center text-xl mb-10 ">
                Spécialisée dans le soft glam, le maquillage sophistiqué et les mises en beauté événementielles, 
                nous vous proposons des prestations personnalisées, adaptées à votre personnalité, votre carnation et l'occasion.
            </p>
          </section>
            <Gallery />
      </div>
    </main>
  );
}