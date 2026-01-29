import Script from "next/script";

interface CalendlyEmbedProps {
  calendlyUrl: string;
}

export default function CalendlyEmbed({ calendlyUrl }: CalendlyEmbedProps) {
  if (!calendlyUrl) {
    return (
      <p className="text-center text-red-500">
        Cette prestation n’est pas encore disponible à la réservation.
      </p>
    );
  }

  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url={`${calendlyUrl}?background_color=d3abcc&text_color=b184b1&primary_color=8e6290`}
        style={{ minWidth: "320px", height: "700px" }}
      />

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
