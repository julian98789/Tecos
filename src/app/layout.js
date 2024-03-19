import { Inter } from "next/font/google";
import "./globals.css";

import NavBarWeb from "@/components/custom/navbar/NavBarWeb";
import NavBarMobile from "@/components/custom/navbar/NavBarMobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurante",
  description: "El restaurante mas mexicano de todos",
};

export default function RootLayout({ children }) {
	return (
		<html lang="es">

			<body className={inter.className}>
				
				
					{children}
				
				
			</body>
		</html>
	);
}
