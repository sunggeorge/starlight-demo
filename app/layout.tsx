import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Starlight Nails",
  description: "Welcome to Starlight Nails!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className="min-h-screen">
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </ClerkProvider>
    </html>
  );
}