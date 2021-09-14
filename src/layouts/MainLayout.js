import Header from "../components/Header";

const MainLayout = props => {
    return (    
        <div>
            <Header/>
           <div className='container mx-auto'>
               {props.children}
           </div>
        </div>
     );
}
 
export default MainLayout;