import ServicesByKob from "@/components/Services";

export default function Services(){
    return(
        <main className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-white to-[#f9f5f0]">
            <section className="w-full max-w-7xl mt-20">
                <div className="text-center mb-12">
                    <h1>Nos prestations</h1>
                    <p className="text-xl text-center text-amber-700 mb-16 italic">
                        Découvrez nos services de maquillage professionnel
                    </p>
                    <ServicesByKob />
                </div>
            </section>
        </main>
    )
}
