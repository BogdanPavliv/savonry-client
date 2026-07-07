"use client";
import styles from "@/styles/catalog/index.module.scss";
import Banner from "@/components/modules/Banner/Banner";
import Breadcrumbs from "@/components/modules/Breadcrumbs/Breadcrumbs";
import { useCatalogBreadcrumbs } from "@/hooks/useCatalogBreadcrumbs";
import { CatalogLayoutProps } from "@/types/others";

const CatalogLayout = ({ children }: CatalogLayoutProps) => {
  const breadcrumbs = useCatalogBreadcrumbs();

  return (
    <main className="main">
      <Breadcrumbs items={breadcrumbs} />
      <section className={styles.catalog}>
        <div className="container">
          {children}
        </div>
      </section>
      <Banner />
    </main>
  );
};

export default CatalogLayout;