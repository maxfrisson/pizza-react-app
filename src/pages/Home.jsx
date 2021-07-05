import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from "../components";
import { setCategory } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";

const categoriesNames = ["Мясные", "Вегетерианские", "Гриль", "Острые", "Закрытые"];
const sortItems = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoriesNames}
        />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((item) => <PizzaBlock key={item.id} {...item} />)
          : Array(12).fill(<PizzaLoadingBlock />)}
      </div>
    </div>
  );
}

export default Home;
