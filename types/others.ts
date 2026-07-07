import { SubCategory } from "@/lib/utils/menuData";
import { IInputs } from "@/types/authPopup";
import { UseFormRegister, FieldErrors } from "react-hook-form";

export interface HeaderState {
  isMenuToggled: boolean;
}

export interface AuthPopupState {
  openAuthPopup: boolean;
}

export interface SearchPopupState {
  openSearchPopup: boolean;
}

export interface SliderSettings {
  customPaging: (id: number) => React.ReactElement;
  dots: boolean;
  arrows: boolean;
  dotsClass: string;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface CatalogLayoutProps {
  children: React.ReactNode;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export interface DropdownMenuProps {
  subcategories: SubCategory[];
  isVisible: boolean;
}

export interface Product {
  _id: string;
  name: string;
  price: number;
  images: string[];
  category: string;
}

export interface MainPageSectionProps {
  products: Product[];
  loading?: boolean;
  error?: string | null;
  title: string;
}

export interface ChangePasswordFormProps {
  register: UseFormRegister<IInputs>;
  errors: FieldErrors<IInputs>;
  password: string;
  setPassword: (value: string) => void;
  newPassword: string;
  setNewPassword: (value: string) => void;
  repeatNewPassword: string;
  setRepeatNewPassword: (value: string) => void;
  onSubmit: (data: IInputs) => void;
  handleSubmit: any;
}

export interface OrderHistoryFormProps {
  user: any;
}

export interface ProfileFormProps {
  user: any;
  register: UseFormRegister<IInputs>;
  errors: FieldErrors<IInputs>;
  username: string;
  setUsername: (value: string) => void;
  surname: string;
  setSurname: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  address: string;
  setAddress: (value: string) => void;
  country: string;
  setCountry: (value: string) => void;
  city: string;
  setCity: (value: string) => void;
  onSubmit: (data: IInputs) => void;
  handleSubmit: any;
}

export interface ProductsPageProps {
  pageName: string;
  fetchAction: any;
  extraParams?: Record<string, any>;
}