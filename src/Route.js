import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Menu";
import ConfirmBooking from "./Pages/ConfirmBooking";
import BookingPage from "./Pages/BookingPage";
import Reservation from "./Pages/Reservation";

      


function Routerd() {
    return ( 
        
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/bookingpage" element={<BookingPage />} />
        <Route path="/Reservation" element={<Reservation />} />

        <Route
          path="/bookingpage/confirmbooking"
          element={<ConfirmBooking />}
        />
      </Routes>
           
   
     );
}

export default Routerd;