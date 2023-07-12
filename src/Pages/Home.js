import Hero from "../Components/Main/Hero";
import Speacial from "../Components/Specials";
import Card from "../Components/Customer/CustomerCard";
import Testimonials from "../Components/Testimonial/Testimonials";
import About from "./About";
import Header from "../Components/Header/Header";


function Main() {
    return ( 
    <>
       <Header  />
    <Hero />
    <Speacial />
    <Card />
    <Testimonials />
    <About />


    
    </> );
}

export default Main;