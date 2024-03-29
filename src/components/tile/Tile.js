import React from "react";

export const Tile = (props) => {

  const tile = props.item;
  console.log(tile)
  const values = Object.values(tile);

  //console.log(values);

  return (
    <div className="tile-container">
     {
         values.map(element=>{
        
          if(typeof element === 'object'){
            return <p className="tile">{JSON.stringify(element)}</p>
          }else{
          return <p className="tile">{element}</p>
          }
        })
      }
    </div>
  );
};
