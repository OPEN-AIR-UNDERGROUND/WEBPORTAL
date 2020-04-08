import React, { Component, useState } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {BrowserRouter as Router,Link,Redirect} from 'react-router-dom'

const Nav = () => {
 
  const [activeItem,setActiveItem] =  useState('')
 

  const handleItemClick = (e, { name }) => {
      setActiveItem(name)
      
  }

  
    return (
      <div className="item-nav">
        <Segment inverted>
        <Menu inverted pointing secondary>
          <Link to='/artists'>
          <Menu.Item
            name='Artistas'
            active={activeItem === 'Artistas'}
            onClick={handleItemClick}
          />
          </Link>
          
          <Link to='/sponsors'>
          <Menu.Item
            name='Patrocinadores'
            active={activeItem === 'Patrocinadores'}
            onClick={handleItemClick}
          />
          </Link>
         
          <Menu.Item
            name='Hazte Socio'
            active={activeItem === 'Hazte Socio'}
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
            name='Asociación'
            active={activeItem === 'Asociación'}
            onClick={handleItemClick}
          />
        </Menu> 
      </Segment>
    
      </div>  
     
    )
  }


export default Nav;
