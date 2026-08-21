import type { Metadata } from "next";
import PagesLayout from "@/components/layouts/PagesLayout";
import './globalStyles/normalize.css'
import "./globalStyles/null.css";
import "./globalStyles/globals.css";
import './globalStyles/header.scss';
import './globalStyles/menu.scss';
import './globalStyles/footer.scss';
import './globalStyles/auth-popup.css'
import './globalStyles/header-profile.css'
import './globalStyles/breadcrumbs.css'
import './globalStyles/search-modal.scss'

export const metadata: Metadata = {
  title: "Savonry | магазин натуральної косметики та засобів догляду",
  description: "Savonry - магазин натуральної косметики та засобів догляду. У нас ви знайдете широкий асортимент органічних продуктів для догляду за шкірою, волоссям та тілом. Відкрийте для себе натуральну красу разом із Savonry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PagesLayout>{children}</PagesLayout>
}
