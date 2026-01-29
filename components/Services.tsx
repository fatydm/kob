'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import servicesData from "@/data/services.json";
import CalendlyEmbed from "@/components/CalendlyEmbed";

type Service = {
  id: number;
  name: string;
  type: 'natural' | 'glamour' | 'sophisticated' | 'artistic' | 'bridal';
  description: string;
  time: string;
  image: string;
  calendlyUrl: string;
};

interface ServiceCardProps {
  service: Service;
  onSelect: (service: Service) => void;
}

const services = servicesData as Service[];

const typeColors = {
  natural: 'text-green-700',
  glamour: 'text-yellow-600',
  sophisticated: 'text-amber-700',
  artistic: 'text-rose-600',
  bridal: 'text-pink-700'
};

function ServiceCard({ service, onSelect }: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const router = useRouter();
  
  return (
    <div 
      className="group h-[500px] [perspective:1000px]"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full rounded-xl shadow-[0_0_15px_rgba(176,141,115,0.9)]
        transition-transform duration-700 [transform-style:preserve-3d]
        ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
      >

        {/* FRONT */}
        <div className="absolute w-full h-full [backface-visibility:hidden] bg-(--secondback) rounded-2xl overflow-hidden">
          <div className="relative h-66 w-full overflow-hidden">
            <Image
              src={service.image}
              alt={service.name}
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="p-6 flex flex-col justify-between h-[calc(100%-16rem)]">
            <h2 className={`text-2xl font-serif uppercase mt-5 mb-4 ${typeColors[service.type]}`}>
              {service.name}
            </h2>

            <div className="flex items-center gap-2 text-gray-600">
              <span>⏱</span>
              <span>{service.time}</span>
            </div>

            <p className="text-xs text-right mt-4 text-gray-600 italic">
              Cliquez pour plus d’infos
            </p>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-(--firstback) rounded-2xl">
          <div className="flex flex-col justify-center items-center h-full p-10 text-(--accent)">
            <h3 className="text-3xl font-serif uppercase mb-6">
              {service.type}
            </h3>

            <p className="text-xl italic text-center mb-8">
              {service.description}
            </p>

            <a
              href={service.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-(--accent) text-white rounded-full hover:opacity-90 transition"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div className="min-h-screen">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 p-4">
          {services.map(service => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={setSelectedService}
            />
          ))}
        </div>
      </div>

      {selectedService && (
        <div className="mt-20 max-w-5xl mx-auto p-4">
          <h2 className="text-3xl text-center mb-8 font-serif uppercase">
            Prendre rendez-vous – {selectedService.name}
          </h2>

          <CalendlyEmbed calendlyUrl={selectedService.calendlyUrl} />
        </div>
      )}
    </div>
  );
}
