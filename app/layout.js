import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Raleway } from 'next/font/google'


const raleway = Raleway({
  weight: '300',
  subsets: ['latin'],
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
     
      <body>
        <Header/>
        <div className="container">
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
