import React from "react"
import {Tile} from "../tile/Tile"

export const TileList = (props) => {

  const tiles = props.list.map((item,index) => {
  
   return <Tile 
   item={item}
   key={index}/>
})


  return(
    <>
      {
        tiles
      }
    </>
  )
};
