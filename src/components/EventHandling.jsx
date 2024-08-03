import './EV.css';
// import React from 'react';

const EventHandling = () =>{
    function handleButtonClick (event){
        console.log(event);
        alert("Event handled by onClick  function")
    } 
    return (
        <>
        

            <button onClick={handleButtonClick}>Click Me</button>

            {/* <button onClick={(event)=> handleButt onClick(event)}>Click Me2</button> */}

            {/* <button onClick={(event) => console.log(event)}></button> */} 

            {/* <button onClick={() => alert("On click event")}>Inline event handler</button> */}
        </>
    )

}


export default EventHandling;