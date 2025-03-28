import s from "./admin-products.module.css";
import SkeletonCard from "../../skeleton/skeleton";
import { useState } from "react";
import CardProducts from "../../card-products/card-products";
import { Link } from "react-router-dom";

const AdminProducts = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { product, isFetch } = useProductsStore(); 

  const filteredProducts =
    selectedCategories.length > 0
      ? product.filter(
          (item) =>
            Array.isArray(item.category) &&
            item.category.some((cat) => selectedCategories.includes(cat))
        )
      : product;

  return (
    <div className={s.container__products}>
      {isFetch ? (
        Array.from({ length: 8 }).map((_, index) => <SkeletonCard key={index} />)
      ) : filteredProducts.length > 0 ? (
        filteredProducts.map((item) => (
          <Link to={`/products/${item.id}`} key={item.id}>
            <CardProducts
              img={item.image}
              isAvialiable={item.isAvialiable}
              article={item.article}
              autor={item.autor}
              description={item.descr}
              price={item.age} 
            />
          </Link>
        ))
      ) : (
        <h1 className={s.loading}>
          {selectedCategories.length > 0
            ? "Товаров по выбранным категориям не найдено"
            : "Тут нет товаров"}
        </h1>
      )}
    </div>
  );
};

export default AdminProducts;
