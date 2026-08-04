import Link from "next/link";
import Image from "next/image";
import {
  footerMenuData,
  footerMenuDataClient,
} from "@/lib/utils/footerMenuData";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__top">
            <div className="footer__top_left">
              <Link href="/" className="logo">
                <Image
                  className="logo_footer__img"
                  width={170}
                  height={54}
                  src="/img/icons/logo-footer.svg"
                  alt="Logo"
                />
              </Link>
              <p className="footer__text">
                SAVONRY - бренд високоякісної та ефективної натуральної
                косметики з чистим рослинним складом
              </p>
            </div>
            <div className="footer__top_right">
              <div className="footer__top_right_left">
                <h3 className="footer__title">Каталог</h3>
                <ul className="footer__nav_list">
                  {footerMenuData.map((category) => (
                    <li key={category.name} className="footer__nav_item">
                      <a href={category.href} className="footer__nav_link">
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer__top_right_right">
                <h3 className="footer__title">Для клієнта</h3>
                <ul className="footer__nav_list">
                  {footerMenuDataClient.map((item) => (
                    <li key={item.name} className="footer__nav_item">
                      <a href={item.href} className="footer__nav_link">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <p className="footer__copyright">Copyright @ 2025 Savonry</p>
            <div className="footer__payment_img_wrapper">
              <Image src="/img/footer/mastercard.svg" alt="mastercard" />
              <Image src="/img/footer/visa.svg" alt="visa" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
