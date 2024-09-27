import React from 'react';
class Searchform extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            param:{
                query : "Nithya",
                starus: "PENDING",
                category:"A",
                isRegistered:false
            }
        }
        render()
        {
            return <div>
          <input type="text" valu={this.state.param.query}onchange 
                
            </div>


        }
    }
}