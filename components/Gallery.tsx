import pictures from "@/data.json";

export default function Gallery() {
  return (
    <main className="flex flex-col items-center justify-between py-15 px-5">
      <h2 className="text-3xl font-semibold tracking-tight text-black uppercase">La Galerie</h2>
      <div className="flex flex-row justify-center flex-wrap gap-6 mt-5 py-5 shadow-[0_0_10px_rgba(176,141,115,0.6)] ">
        {pictures.map((item) => (
          <img className="object-cover rounded-md border-2" 
          key={item.id} 
          src={item.image} 
          alt={item.type} width={200} />
        ))}
      </div>
    </main>
  );
}
