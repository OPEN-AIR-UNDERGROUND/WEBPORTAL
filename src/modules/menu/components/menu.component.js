import React, { Component, useState } from 'react'
import { Menu, Segment,Container,Grid,Responsive } from 'semantic-ui-react'
import {BrowserRouter as Router,Link,Redirect} from 'react-router-dom'

const Nav = () => {
 
  const [activeItem,setActiveItem] =  useState('')
 

  const handleItemClick = (e, { name }) => {
      setActiveItem(name)
      
  }

  const handleOnItemClick = (e, { name }) => {
    console.log(name)
  }
  
    return (
    
       <Segment inverted vertical>
        <Container textAlign="center">  
        <Menu inverted pointing secondary>
        <Grid stretched>
         
          <Menu.Item
            as={ Link } to='/'
            name='Home'
            active={activeItem === 'Home'}
            onClick={handleItemClick}
          />
        


        
          <Menu.Item
            as={ Link } to='/artists'
            name='Artistas'
            active={activeItem === 'Artistas'}
          onClick={handleItemClick}
          />
        

         
          <Menu.Item
            as={ Link } to='/sponsors'
            name='Patrocinadores'
            active={activeItem === 'Patrocinadores'}
            onClick={handleItemClick}
          />
           
         

         
          <Menu.Item
            name='Merchandising'
            active={activeItem === 'Merchandising'}
            onClick={handleItemClick}
          />
         
          
          <Menu.Item
            name='Milagros'
            active={activeItem === 'Milagros'}
            onClick={handleItemClick}
          />
        
          <Menu.Item
            name='Hazte Socio'
            active={activeItem === 'Hazte Socio'}
            onClick={handleItemClick}
          />

               
        </Grid> 
        </Menu>
      </Container>    
      </Segment>  
    )
  }


export default Nav;
