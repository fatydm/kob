'use client'

import { useState } from "react";
import Image from "next/image";
import servicesData from "@/data/services.json"

type Service = {
  id: number;
  name: string;
  type: 'natural' | 'glamour' | 'sophisticated' | 'artistic' | 'bridal';
  description: string;
  time: string;
  image: string;
};

interface ServiceCardProps {
  service: Service;
}

const services = servicesData as Service[];

const typeColors = {
  natural: 'text-green-700',
  glamour: 'text-yellow-600',
  sophisticated: 'text-amber-700',
  artistic: 'text-rose-600',
  bridal: 'text-pink-700'
};

function ServiceCard({ service }: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group h-[500px] [perspective:1000px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
        
        {/* Front of card */}
        <div className="absolute w-full h-full [backface-visibility:hidden] bg-(--secondback) rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-64 w-full">
            <Image
              src={service.image}
              alt={service.name}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="p-6 flex flex-col justify-between h-[calc(100%-16rem)]">
            <div>
              <span className={`text-2xl uppercase tracking-wider font-semibold ${typeColors[service.type]}`}>
                {/* {service.type} */}
              </span>
              <h2 className={`text-2xl font-semibold text-gray-900 mt-5 mb-4 font-serif uppercase ${typeColors[service.type]}`}>
                {/* {service.name} */}
                Make up {service.type}

              </h2>
            </div>
            
            <div className="flex items-center gap-2 text-gray-600 mt-auto">
              <span className="text-xl">⏱</span>
              <span>{service.time}</span>
            </div>
            
            <div className="text-xs text-gray-700 text-right mt-2">
              Survolez pour plus d'infos
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-(--firstback) rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col justify-center items-center h-full p-10 text-(--accent)">
            <h2 className="text-3xl mb-8 font-serif text-center uppercase font-bold">
              {service.name}
            </h2>
            
            <p className="text-2xl italic text-center leading-relaxed mb-8">
              {service.description}
            </p>
            
            <div className="border-t border-white/30 pt-6 mt-6">
              <div className="flex items-center gap-2 text-lg">
                <span>⏱</span>
                <span>{service.time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br ">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 p-4">
            {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
            ))}
        </div>
      </div>
    </div>
  );
}