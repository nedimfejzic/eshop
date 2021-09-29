import React from "react";

const Meal = ({meal}) => {
    

    const submitHandler = (e) =>{
        e.preventDefault();

        //cartCtx.addItem(meal);
        
    }

    return (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full mb-8 lg:mb-0 " key={meal.id}>
        <div className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-scale-down object-center w-full h-full block"
            src={meal.image_url}
            />
        </div>
        <div className="mt-4 ">
          <h2 className="text-gray-900 text-lg title-font mb-1 font-medium">
            {meal.name}
          </h2>
          <h4 className="text-gray-500 title-font text-sm ml-2 ">
           {meal.description}
          </h4>
          <div className="mt-2 ml-2">
            <span className="text-lg font-medium text-red-500 ">
              {meal.price}
            </span>
            <span className="text-lg font-extralight text-gray-400 pl-1">
              KM
            </span>
          </div>

          <div className="flex justify-between">
            <button onClick={submitHandler}
              type="button"
              className="opacity-50 cursor-not-allowed py-2 px-6 mt-2  bg-red-500 hover:bg-red-700 ring-red-500 focus:ring-offset-red-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
            >
              Dodaj
            </button>

            <div className="text-right pr-4 hidden ">
              <p className="text-xs ">Korpa</p>
              <p className="text-lg text-red-500 ">0</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Meal;