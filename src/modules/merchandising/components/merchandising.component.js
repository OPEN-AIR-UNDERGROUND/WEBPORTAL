import React from 'react'

import { Grid, Image, Icon, GridColumn } from 'semantic-ui-react'


const Merchandising = () => {
  const handleClick = () => {
    console.log("handlecLICK")
  }
  return(
    <div className="item-merchandising">
    <Grid>
    <Grid.Column width={4}>
      <Image src='https://react.semantic-ui.com/images/avatar/large/patrick.png'
             onClick={handleClick} 
             href="#" />
      Llavero
      <Icon size='big' name="cart"></Icon>
    </Grid.Column>
    <Grid.Column width={9}>
      <Image src='https://react.semantic-ui.com/images/avatar/large/patrick.png'
             onClick={handleClick}  
             href="#"/>
      Camiseta
      <Icon size='big' name="cart"></Icon>
    </Grid.Column>
    <Grid.Column width={3}>
      <Image src='https://react.semantic-ui.com/images/avatar/large/patrick.png'
             onClick={handleClick}  
             href="#"/> 
      Chapa
      <Icon size='big' name="cart"></Icon>
    </Grid.Column>
  
     
  </Grid>
  </div>
  )
  }

export default Merchandising;