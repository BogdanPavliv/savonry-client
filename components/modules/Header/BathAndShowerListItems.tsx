import Link from "next/link";

const BathAndShowerListItems = () => {
  return (
    <>
      <li className="mobile_menu__right_item">
        <Link className="mobile_menu__right_link" href="/subcategories/ванна та душ/бомбочки для ванни">
          Бомбочки для ванни
        </Link>
      </li>
      <li className="mobile_menu__right_item">
        <Link className="mobile_menu__right_link" href="/subcategories/ванна та душ/солі">
          Солі
        </Link>
      </li>
      <li className="mobile_menu__right_item">
        <Link className="mobile_menu__right_link" href="/subcategories/ванна та душ/мило ручної роботи">
          Мило ручної роботи
        </Link>
      </li>
      <li className="mobile_menu__right_item">
        <Link className="mobile_menu__right_link" href="/subcategories/ванна та душ/вируючі кульки для ванн">
          Вируючі кульки для ванн
        </Link>
      </li>
    </>
  );
};

export default BathAndShowerListItems;
