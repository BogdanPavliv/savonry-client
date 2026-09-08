import Link from "next/link";

const HairListItems = () => {
  return (
    <>
      <li className="mobile_menu__right_item">
        <Link className="mobile_menu__right_link" href="/subcategories/волосся/шампуні">
          Шампуні
        </Link>
      </li>
      <li className="mobile_menu__right_item">
        <Link className="mobile_menu__right_link" href="/subcategories/волосся/бальзами">
          Бальзами
        </Link>
      </li>
      <li className="mobile_menu__right_item">
        <Link className="mobile_menu__right_link" href="/subcategories/волосся/маски">
          Маски
        </Link>
      </li>
    </>
  );
};

export default HairListItems;
