import "@/assets/styles/tailwind.css";

import { sans } from "@/assets/fonts";

export const metadata: Metadata = {
  title: "Skilled E-Learning Landing Page",
  description:
    "This project is a solution to the Skilled E-Learning Landing Page challenge on Frontend Mentor, developed by Arda Eker.",
};

export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="en">
      <body className={`${sans.variable} antialiased`}>{children}</body>
    </html>
  );
}
