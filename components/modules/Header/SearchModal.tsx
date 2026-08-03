import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { SearchPopupClose } from "@/app/redux/searchPopupSlice";
import { closeMenu } from "@/app/redux/headerSlice";
import { RootState } from "@/app/redux/store";
import axios from "@/lib/utils/axios";
import { Product } from "@/types/others";

const SearchModal = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  
  const openSearchPopup = useSelector(
    (state: RootState) => state.searchPopup.openSearchPopup
  );

  const searchWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openSearchPopup) {
      setSearchQuery("");
      setSearchResults([]);
    }
  }, [openSearchPopup]);

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (searchQuery.trim().length > 2) {
        handleSearch();
      } else {
        setSearchResults([]);
      }
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [searchQuery]);

  const handleSearch = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`/products/search?q=${searchQuery}`);
      setSearchResults(data);
    } catch (error) {
      console.error("Помилка пошуку:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleProductClick = (category: string, productId: string) => {
    router.push(`/catalog/${category}/${productId}`);
    dispatch(SearchPopupClose());
    dispatch(closeMenu());
  };

  const handleCloseByTarget = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as Element;
    if (target === searchWrapperRef.current) {
      dispatch(SearchPopupClose());
    }
  };

  if (!openSearchPopup) return null;

  return (
    <div 
      className="search-modal-overlay" 
      onClick={handleCloseByTarget}
      ref={searchWrapperRef}
    >
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="search-modal__header">
          <div className="search-modal__input-wrapper">
            <svg
              className="search-modal__icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              className="search-modal__input"
              placeholder="Пошук по каталогу"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
          </div>
          <button 
            className="search-modal__close" 
            onClick={() => dispatch(SearchPopupClose())}
          >
            Закрити
          </button>
        </div>

        <div className="search-modal__results">
          {isLoading && (
            <div className="search-modal__loading">Завантаження...</div>
          )}

          {!isLoading && searchQuery.trim().length > 2 && searchResults.length === 0 && (
            <div className="search-modal__empty">
              Нічого не знайдено за запитом &quot;{searchQuery}&quot;
            </div>
          )}

          {!isLoading && searchResults.length > 0 && (
            <div className="search-modal__list">
              {searchResults.map((product) => (
                <div
                  key={product._id}
                  className="search-modal__item"
                  onClick={() => handleProductClick(product.category, product._id)}
                >
                  <div className="search-modal__item-image">
                    <img
                      src={`https://savonry-server-app-gki2.onrender.com${product.images[0] || "/img/placeholder.jpg"}`}
                      alt={product.name}
                    />
                  </div>
                  <div className="search-modal__item-info">
                    <h4 className="search-modal__item-name">{product.name}</h4>
                    <p className="search-modal__item-category">{product.category}</p>
                    <p className="search-modal__item-price">{product.price} грн</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;