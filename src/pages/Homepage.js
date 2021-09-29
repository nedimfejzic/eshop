import HomePageHero from "../components/HomePage/HomePageHero";
import MealList from "../components/HomePage/MealList";

const HomePage = () => {
    return ( <div className='container mx-auto mt-4'>
        <HomePageHero/>
        <MealList/>
    </div> );
}
 
export default HomePage;