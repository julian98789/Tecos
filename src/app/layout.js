import { Inter } from "next/font/google";
import "./globals.css";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurante",
  description: "El restaurante mas mexicano de todos",
};

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body className={`${inter.className} w-full h-screen`}>
				<main className="w-full h-full  bg-cover  bg-top bg-[url('/Fondo.jpg')]">
					{children}
				</main>
			</body>
		</html>
	);
}
