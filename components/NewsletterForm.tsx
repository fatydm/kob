// import { useState } from "react";
// import Input from "./Input";
// import Button from "./Button";

// export default function NewsletterForm() {
//   const [email, setEmail] = useState("");
//   const [status, setStatus] = useState(""); // 'loading', 'success', 'error'

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("loading");

//     try {
//       const response = await fetch("/api/newsletter", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email })
//       });

//       if (response.ok) {
//         setStatus("success");
//         setEmail("");
//       } else {
//         setStatus("error");
//       }
//     } catch (error) {
//       setStatus("error");
//     }
//   };

//   return (
//     <div>
//       <h3 className="uppercase font-semibold mb-2">NEWSLETTER</h3>
//       <p className="mb-3 text-sm">
//         Abonnez-vous pour être au courant de nos actualités et recevoir nos
//         astuces beauté.
//       </p>
      
//       <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
//         <Input
//           placeholder="Votre adresse mail"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           classes="flex-1"
//         />
//         <Button
//           label={status === "loading" ? "..." : "S'inscrire"}
//           type="submit"
//           disabled={status === "loading"}
//           classes="bg-[var(--secondback)] text-white font-semibold px-4 py-2"
//         />
//       </form>

//       {status === "success" && (
//         <p className="text-green-600 mt-2">Merci pour votre inscription ! ✓</p>
//       )}
//       {status === "error" && (
//         <p className="text-red-600 mt-2">Une erreur est survenue. Réessayez.</p>
//       )}
//     </div>
//   );
// }


// BACK

// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   const { email } = await request.json();

//   // Validation basique
//   if (!email || !email.includes("@")) {
//     return NextResponse.json(
//       { error: "Email invalide" },
//       { status: 400 }
//     );
//   }

//   try {
//     // Exemple avec Mailchimp
//     const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
//     const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
//     const DATACENTER = MAILCHIMP_API_KEY?.split("-")[1];

//     const response = await fetch(
//       `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           email_address: email,
//           status: "subscribed"
//         })
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Erreur Mailchimp");
//     }

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Erreur serveur" },
//       { status: 500 }
//     );
//   }
// }

// .env.local

// MAILCHIMP_API_KEY=ta_clé_api_mailchimp
// MAILCHIMP_LIST_ID=ton_id_de_liste