import Card from "./Card";
import FoodData from "../FoodData";
import { useSelector } from "react-redux";

const CardItems = () => {

  const catFilter = useSelector(state => state.categoryfilter.catFilter);
  const searchData = useSelector(state => state.searchFilter.searchData);

  return (
    <>
        <div className="w-full mb-7">
            <div className="max-w-[1240px] mx-auto p-3 flex flex-wrap gap-14">
                
                {
                  FoodData && FoodData.filter((item) => {
                    if(catFilter === "All"){
                      return item;
                    }else{
                      return item.category === catFilter;
                    }
                  })
                  .filter((item) => {
                    if(searchData === ""){
                      return item;
                    }else{
                      return item.name.toLowerCase().includes(searchData);
                    }
                  })
                  .map((food) => (
                    <Card key={food.id} food={food}/>
                  ))
                }

            </div>
        </div>
    </>
  )
}

export default CardItems;

