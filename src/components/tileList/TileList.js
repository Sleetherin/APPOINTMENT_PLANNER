import React from "react"
import {Tile} from "../tile/Tile"

export const TileList = (props) => {

  const tiles = props.contacts.map((contact,index) => {
  
   return <Tile 
   contact={contact}
   key={index}/>
})

  console.log(tiles);

  return(
    <>
      {
        tiles
      }
    </>
  )
};
