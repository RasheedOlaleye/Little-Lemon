import Button from '../Components/Main/Button';

function Specials() {
    return ( 
        <section className=" flex flex-row   md:max-w-7xl mx-auto  justify-between relative items-center">
        <div className=" ml-20 mt-5">
     <h5 style={{
        color: "#000",
        fontFamily: "Markazi Text",
        fontSize: "64px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
     }}> This Weeks Specials!</h5>
        </div>
        <div className="ml-20 mt-5">
       <Button title = "Online Menu" />
        </div>
        </section>
     );
}

export default Specials;