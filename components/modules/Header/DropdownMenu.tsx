// components/Header/DropdownMenu.tsx
"use client";
import Link from "next/link";
import { DropdownMenuProps } from "@/types/others";

const DropdownMenu: React.FC<DropdownMenuProps> = ({ subcategories, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="dropdownMenu">
      <ul className="dropdownMenu__list">
        {subcategories.map((item) => (
          <li key={item.name} className="dropdownMenu__item">
            <Link href={item.href} className="dropdownMenu__link">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
