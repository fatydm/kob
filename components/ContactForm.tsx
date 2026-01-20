"use client";

import { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    demande: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Logique d'envoi ici
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-[#FAF9FC] to-[#F3EEF5]">
      <section className="w-full max-w-3xl mt-20">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide text-[var(--accent)] uppercase mb-6">
            Contactez-nous
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent mx-auto mb-6"/>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Vous êtes intéressé·e par les formations de <span className="font-semibold">KEY OF BEAUTY</span> ?<br />
              Vous avez une question nous concernant ou vous souhaitez un renseignement ? 
              Complétez ce formulaire et nous vous répondrons dans les meilleurs délais.
            </p>
          
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Input
              placeholder="Nom"
              type="text"
              value={formData.nom}
              onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
            />
            <Input
              placeholder="Prénom"
              type="text"
              value={formData.prenom}
              onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Input
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <Input
              placeholder="Téléphone"
              type="tel"
              value={formData.telephone}
              onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
            />
          </div>

          <div className="relative">
            <select
              id="demande"
              value={formData.demande}
              onChange={(e) => setFormData({ ...formData, demande: e.target.value })}
              className="w-full bg-transparent border-b-2 border-gray-300 px-2 py-3 
                         text-gray-800
                         focus:outline-none focus:border-[var(--secondback)] 
                         transition-colors duration-300
                         cursor-pointer"
            >
              <option value="" disabled>Sélectionnez une option</option>
              <option value="information">Demande d'information</option>
              <option value="devis">Demande de devis</option>
              <option value="rappel">Demande de rappel</option>
              <option value="autres">Autres</option>
            </select>
          </div>

          <div className="relative">
            <textarea
              placeholder="Votre message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              className="w-full bg-transparent border-b-2 border-gray-300 px-2 py-3 
                         text-gray-800 placeholder-gray-400
                         focus:outline-none focus:border-[var(--secondback)] 
                         transition-colors duration-300 resize-none"
            />
          </div>

          <div className="flex justify-center pt-6">
            <Button
              label="Envoyer le message"
              type="submit"
              classes="
                text-white font-semibold px-10 py-3
                transition-all duration-500
                hover:shadow-[0_0_20px_rgba(155,127,165,0.6)]
                hover:scale-105
                hover:from-[#8B6F95] hover:to-[#B9A5B9]
              "
            />
          </div>
        </form>

        <div className="w-16 h-1 bg-[var(--secondback)] mx-auto mt-12 opacity-30"></div>
      </section>
    </main>
  );
}