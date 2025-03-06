
import "./globals.css";
import "./customStyles.css"
import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100','200','300','400','500', '600', '700','800','900'],  // Add desired weights
  display: 'swap'
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={montserrat.className}
      >
        {children}
      </body>
    </html>
  );
}
