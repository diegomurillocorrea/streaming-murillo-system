import "./globals.css";

export const metadata = {
  title: "Streaming Murillo System",
  description: "This is the system for Streaming Murillo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
