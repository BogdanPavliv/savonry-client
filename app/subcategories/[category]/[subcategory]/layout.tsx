import CatalogLayout from "@/components/layouts/CatalogLayout";

export const metadata = {
  title: "Savonry | Каталог",
};

const SubcategoryLayout = ({ 
    children 
}: { 
    children: React.ReactNode 
}) => {
  return <CatalogLayout>{children}</CatalogLayout>;
};

export default SubcategoryLayout;