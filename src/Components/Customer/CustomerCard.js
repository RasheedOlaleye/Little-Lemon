import Datails from  "./CustomerDetails"
import greek_salad from "../../Assets/greek_salad.jpg";
import bruchetta from "../../Assets/bruchetta.svg"
import lemon_dessert from "../../Assets/lemon_dessert.jpg";
import { RiShoppingCartLine } from "react-icons/ri";
const CustomerCard = (props) => {
    return (
    <div className="flex flex-wrap justify-center ml-20 mb-10 gap-4 mt-5 md:max-w-7xl max-auto relative">
            <Datails  
        image={greek_salad}
        name="Greek Salad"
        price="$10"
        description="Product description goes here"
        label="Delivery"
        icon ={RiShoppingCartLine} />

<Datails  
        image={bruchetta}
        name="Bruchetta"
        price="$10"
        description="Product description goes here"
        label="Delivery"
        icon ={RiShoppingCartLine} />
    
    <Datails  
        image={lemon_dessert}
        name="Lemon Dessert"
        price="$10"
        description="Product description goes here"
        label="Delivery"
        icon ={RiShoppingCartLine} />





        </div>
    );
}

export default  CustomerCard 
    ;