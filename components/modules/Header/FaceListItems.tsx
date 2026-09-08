import Link from "next/link";

const FaceListItems = () => {
  return (
    <>
      <li className="mobile_menu__right_item">
        <Link className="mobile_menu__right_link" href="/subcategories/обличчя/креми">
          Креми для обличчя
        </Link>
      </li>
      <li className="mobile_menu__right_item">
        <Link className="mobile_menu__right_link" href="/subcategories/обличчя/скраби">
          Скраби
        </Link>
      </li>
      <li className="mobile_menu__right_item">
        <Link className="mobile_menu__right_link" href="/subcategories/обличчя/сироватки">
          Сироватки
        </Link>
      </li>
      <li className="mobile_menu__right_item">
        <Link className="mobile_menu__right_link" href="/subcategories/обличчя/маски">
          Маски
        </Link>
      </li>
    </>
  );
};

export default FaceListItems;
