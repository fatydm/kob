'use client'

import { useState } from "react";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import Header from "@/components/Header";
import servicesData from "@/data/services.json";

type Service = {
  id: number;
  name: string;
  calendlyUrl: string;
};

const services = servicesData as Service[];

export default function Appointment() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <Header />

      <h1 className="text-4xl text-center mt-10">
        Prête à être sublimée ?
      </h1>

      <div className="flex justify-center gap-4 my-10 flex-wrap">
        {services.map(service => (
          <button
            key={service.id}
            onClick={() => setSelectedService(service)}
            className="px-6 py-3 rounded-full bg-(--accent) text-white hover:opacity-90 transition"
          >
            {service.name}
          </button>
        ))}
      </div>

      {selectedService && (
        <CalendlyEmbed calendlyUrl={selectedService.calendlyUrl} />
      )}
    </>
  );
}
