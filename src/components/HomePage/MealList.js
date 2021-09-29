import React, {useState, useEffect} from "react";
import Meal from "./Meal";

const MealList = () => {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(()=>{
    const fetchMeals = async ()=>{

      const response = await fetch('https://ecommerce-5860b-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
     
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      
      const responseData = await response.json();
      console.log(responseData);

      const loadedMeals= [];

      for(const key in responseData){
        loadedMeals.push({
          id: responseData[key].id,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          image_url: responseData[key].image_url
        })
      }

      setMeals(loadedMeals);
      setIsLoading(false);

    }
    
      fetchMeals().catch((error)=>{
        setIsLoading(false);
        setError(error.message);
      });
  },[]);

  if (isLoading) {
    return(
      <div className="container px-5 py-4 mx-auto">
          <span className='text-4xl font-semibold text-red-500 text-center'>
            Loading meals...
          </span>
    </div>
    )
  }

  if (error) {
    return(
      <div className="container px-5 py-4 mx-auto">
          <span className='text-4xl font-semibold text-red-500 text-center'>
          {error}
          </span>
    </div>)
  }


  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto">

        <div className="flex flex-wrap">
          {meals.slice(0,4).map((meal) => (
            <Meal meal={meal} key={meal.id}></Meal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MealList;