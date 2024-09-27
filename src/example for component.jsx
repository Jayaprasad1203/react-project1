import React from "react";
function myobj(props)
{
    const a=5;
    const b=6;
    console.log(a+b);
}
const Practice = () =>{
    return(
        <div>
             <h1>"Let we see the output of JAVASCRIPT"</h1>

            <button onClick={myobj}>button </button>
        </div>
    );
}
export default Practice;