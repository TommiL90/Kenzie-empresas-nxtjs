import '@/scss/main.scss';
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: "normal",
  variable: "--font-primary",
  display: "optional",
});

export const metadata = {
  title: "Kenzie Empresas",
  description: "Kenzie Empresas description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-Br">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
