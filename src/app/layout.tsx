import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bem-vindo ao Timely",
  description: "Timely é o seu app de agendamento de serviços",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
