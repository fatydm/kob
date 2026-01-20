import Image from "next/image";

export default function Header() {
  return (
    <div className="flex items-center justify-center h-80">
      <Image src="/assets/kob__logo.png" alt="logo" width={400} height={300} />
    </div>
  );
}