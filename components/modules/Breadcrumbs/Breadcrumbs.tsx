// components/modules/Breadcrumbs/Breadcrumbs.tsx
import Link from "next/link";
import { BreadcrumbsProps } from "@/types/others";

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            
            return (
              <li key={index} className="breadcrumbs__item">
                {item.href && !isLast ? (
                  <Link 
                    href={item.href} 
                    className={`breadcrumbs__link ${index === 0 ? 'first-crumb' : ''}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className={`breadcrumbs__link ${isLast ? 'last-crumb' : ''}`}>
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumbs;