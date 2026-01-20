import Image from "next/image";

export default function Header() {
  return (
    <div className="flex items-center justify-center h-100">
      <Image src="/assets/kob.png" alt="logo" width={600} height={600} />
    </div>
  );
}