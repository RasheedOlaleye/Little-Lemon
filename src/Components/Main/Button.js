function Button(props) {
    return ( 
        <>
        <button className=" py-2 p-4 mb-10 rounded-xl item justify-center   ml-20 
         bg-gray-500 text-black text-center font-markazi font-medium text-lg"    style={{
            backgroundColor:"#f4ce14"}}>
          { props.title}
         
            
        </button>
   
        </>
     );
}

export default Button;
