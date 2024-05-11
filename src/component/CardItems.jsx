import Card from "./Card";
import FoodData from "../FoodData";
import { useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';

const CardItems = () => {

  const catFilter = useSelector(state => state.categoryfilter.catFilter);
  const searchData = useSelector(state => state.searchFilter.searchData);
  
  const handleToast = (name) => toast.success(`Add Item ${name} Successfully...`)

  return (
    <>
      <Toaster
      position="top-center"
      reverseOrder={false}
    />
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
                    <Card key={food.id} food={food} handleToast={handleToast}/>
                  ))
                }

            </div>
        </div>
    </>
  )
}

export default CardItems;

