import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center bg-[var(--firstback)]">
      <div className="w-full max-w-6xl px-4">
        <Gallery />
      </div>
    </main>
  );
}