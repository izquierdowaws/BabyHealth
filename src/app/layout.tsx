import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { TranslationProvider } from "@/context/i18nContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BabyHealth - Cada llanto cuenta una historia",
  description: "Proyecto Aurora: orientación neonatal impulsada por IA para los primeros días de vida. Apoyo confiable y en tiempo real cuando más lo necesitas.",
  keywords: ["salud del bebé", "asistente neonatal con IA", "analizador de llanto del bebé", "apoyo a padres", "orientación pediátrica"],
  authors: [{ name: "Equipo BabyHealth" }],
  openGraph: {
    title: "BabyHealth - Cada llanto cuenta una historia",
    description: "Proyecto Aurora: orientación neonatal impulsada por IA para los primeros días de vida.",
    type: "website",
  },
};

// We'll update the metadata dynamically based on language in a layout file or using metadata function
// For now, we'll keep the static version and update it later if needed

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-419" // This will be overridden by our TranslationProvider's useEffect
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF7F4] text-[#4A4946] selection:bg-[#4B9B9B]/20 selection:text-[#2B7A7A]">
        <TranslationProvider>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}