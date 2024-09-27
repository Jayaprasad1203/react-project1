export const  App=()=>
    {
        return (
            <div>
                <h1>Hello world</h1></div>
        );
    };
    
    const Op =(props)=>
    {
        return (
            <div>
                <h1>
                      welcom {props.name}
                      <App/>
                  
                </h1>
            </div>
        );
    };
    export default Op;