export interface FooterMenuCategory {
  name: string;
  href: string;
}

export const footerMenuData: FooterMenuCategory[] = [
  { name: "Акції", href: "/promotion" },
  { name: "Новинки", href: "/new-product"},
  { name: "Обличчя", href: "/catalog/обличчя"},
  { name: "Ванна та душ", href: "/catalog/ванна та душ"},
  { name: "Тіло", href: "/catalog/тіло"},
  { name: "Волосся", href: "/catalog/волосся"},
  { name: "Для нього", href: "/catalog/для нього" },
  { name: "Подарунки", href: "/catalog/подарунки" },
  { name: "Серії", href: "/catalog/серії" },
  { name: "Аксесуари", href: "/catalog/аксесуари" },
];

export const footerMenuDataClient: FooterMenuCategory[] = [
  { name: "Про нас", href: "/about" },
  { name: "Контакти", href: "/contacts"},
  { name: "Доставка та оплата", href: "/delivery"},
  { name: "Статті", href: "/articles"},
  { name: "Новини", href: "/our-news"},
  { name: "Оптовикам", href: "/for-wholesalers"},
];
