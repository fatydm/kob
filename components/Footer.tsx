import Input from "./Input";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faSnapchat, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const socials = [
  { icon: faFacebook, url: "https://www.facebook.com", label: "Facebook" },
  { icon: faInstagram, url: "https://www.instagram.com/keyofbeauuty/", label: "Instagram" },
  { icon: faTiktok, url: "https://www.tiktok.com/", label: "TikTok" },
  { icon: faYoutube, url: "https://www.youtube.com/", label: "YouTube" },
  { icon: faSnapchat, url: "https://www.snapchat.com/add/", label: "Snapchat" }]

  const otherLinks = [
    { url: "/contact", label: "Contact us" },
    { url: "/about", label: "About us" },
    { url: "/", label: "Blog" },
    { url: "/", label: "FAQs" }]

  return (
    <footer className="bg-[var(--navbarground)] p-7 flex flex-col md:flex-row md:justify-around gap-5 md:gap-8 text-[var(--foreground)]">
      <div className="flex flex-col">
        <h3 className="mb-3 uppercase font-semibold">Suivez-vous sur nos réseaux</h3>
          <ul className="flex gap-3 flex-wrap">
            {socials.map(({ icon, url, label }) => (
              <li key={label} className="border-2 rounded-2xl p-2 hover:scale-110 transition-transform">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <FontAwesomeIcon icon={icon} />
                </a>
              </li>
            ))}
          </ul>
      </div>

      <div className="flex-1 max-w-md">
        <h3 className="uppercase font-semibold mb-2">NEWSLETTER</h3>
          <p className="mb-3 text-md">
            Abonnez-vous pour être au courant de nos actualités et recevoir nos
            astuces beauté.
          </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <Input placeholder="Votre adresse mail" type="email" classes="w-60"/>
          <Button
            label="S'inscrire"
            // onClick={() => onsubmit}
            type="submit"
            classes="
              bg-[var(--accent)] text-white
              font-semibold px-4 py-2
              transition-all duration-500
              hover:shadow-[0_0_15px_rgba(155,127,165,0.5)]
              hover:scale-[1.03]
              hover:border hover:border-[var(--gold)]
              whitespace-nowrap"/>
        </div>
      </div>

      <div>
        <h3 className="uppercase font-semibold mb-2 md:invisible">Liens</h3>
        <ul>
          {otherLinks.map(({ url, label }) => (
            <li key={label} className="p-1 hover:underline">
              <a href={url}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}


