import { AuthProvider } from "@/contexts/Auth/AuthContext";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
      <title>Postit</title>
      <link rel="icon" href="/assets/logo_postit.webp"/>
      </head>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
