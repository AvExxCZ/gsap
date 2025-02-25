import Smooth from "./_modules/Smooth";
import "./globals.css";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Smooth>
          {children}
        </Smooth>
      </body>
    </html>
  );
}
