import CatalogLayout from "@/components/layouts/CatalogLayout";

export const metadata = {
  title: "Savonry | Новинки",
};

const CatalogRootLayout = ({ 
    children 
}: { 
    children: React.ReactNode 
}) => {
  return <CatalogLayout>{children}</CatalogLayout>;
};

export default CatalogRootLayout;
