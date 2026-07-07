// components/Header/menuData.ts

export interface SubCategory {
  name: string;
  href: string;
}

export interface MenuCategory {
  name: string;
  href: string;
  subcategories?: SubCategory[];
}

export const menuData: MenuCategory[] = [
  { name: "Акції", href: "/promotion" },
  { name: "Новинки", href: "/new-product" },
  {
    name: "Обличчя",
    href: "/catalog/обличчя",
    subcategories: [
      { name: "Креми для обличчя", href: "/subcategories/обличчя/креми" },
      { name: "Скраби", href: "/subcategories/обличчя/скраби" },
      { name: "Сироватки", href: "/subcategories/обличчя/сироватки" },
      { name: "Маски", href: "/subcategories/обличчя/маски" },
    ],
  },
  {
    name: "Ванна та душ",
    href: "/catalog/ванна та душ",
    subcategories: [
      { name: "Бомбочки для ванни", href: "/subcategories/ванна та душ/бомбочки для ванни" },
      { name: "Солі", href: "/subcategories/ванна та душ/солі" },
      { name: "Мило ручної роботи", href: "/subcategories/ванна та душ/мило ручної роботи" },
      { name: "Вируючі кульки для ванн", href: "/subcategories/ванна та душ/вируючі кульки для ванн" },
    ],
  },
  {
    name: "Тіло",
    href: "/catalog/тіло",
    subcategories: [
      { name: "Антибактеріальні засоби", href: "/subcategories/тіло/антибактеріальні засоби" },
      { name: "Антицелюлітна серія", href: "/subcategories/тіло/антицелюлітна серія" },
      { name: "Антицелюлітна скраб-маска", href: "/subcategories/тіло/антицелюлітна скраб-маска" },
      { name: "Гель алое вера", href: "/subcategories/тіло/гель алое вера" },
      { name: "Дезодоранти", href: "/subcategories/тіло/дезодоранти" },
      { name: "Креми для тіла", href: "/subcategories/тіло/креми для тіла" },
      { name: "Масажні плитки", href: "/subcategories/тіло/масажні плитки" },
      { name: "Натуральні масла", href: "/subcategories/тіло/натуральні масла" },
      { name: "Обгортання", href: "/subcategories/тіло/обгортання" },
      { name: "Парфумовані спреї для тіла", href: "/subcategories/тіло/парфумовані спреї для тіла" },
      { name: "Скраби для тіла", href: "/subcategories/тіло/скраби для тіла" }, 
      { name: "Сонцезахисні засоби", href: "/subcategories/тіло/сонцезахисні засоби" },
      { name: "Засоби для ніг", href: "/subcategories/тіло/засоби для ніг" },
      { name: "Засоби для рук", href: "/subcategories/тіло/засоби для рук" },
      { name: "Щітки для сухого масажу", href: "/subcategories/тіло/щітки для сухого масажу" },
    ],
  },
  {
    name: "Волосся",
    href: "/catalog/волосся",
    subcategories: [
      { name: "Шампуні", href: "/subcategories/волосся/шампуні" },
      { name: "Бальзами", href: "/subcategories/волосся/бальзами" },
      { name: "Маски", href: "/subcategories/волосся/маски" },
    ],
  },
  { name: "Для нього", href: "/catalog/для нього" },
  { name: "Подарунки", href: "/catalog/подарунки" },
  { name: "Серії", href: "/catalog/серії" },
  { name: "Аксесуари", href: "/catalog/аксесуари" },
];
