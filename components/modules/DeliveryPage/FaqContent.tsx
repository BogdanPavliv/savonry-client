import styles from "@/styles/delivery/index.module.scss";
import { faqData } from "@/lib/utils/faqData";
import ProductInfoAccordion from "@/components/modules/ProductPage/ProductInfoAccordion";

const FaqContent = () => {
  return (
    <div className={styles.delivery__questions_list}>
      {faqData.map((item, index) => (
        <div key={index} className={styles.delivery__description}>
          <ProductInfoAccordion title={item.head}>
            <p className={styles.delivery__text}>{item.text}</p>
          </ProductInfoAccordion>
        </div>
      ))}
    </div>
  );
};

export default FaqContent;
