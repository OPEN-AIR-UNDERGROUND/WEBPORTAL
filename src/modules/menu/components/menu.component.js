import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class Nav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="item-nav">
           <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'Artistas'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Patrocinadores'
            active={activeItem === 'Patrocinadores'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Hazte Socio'
            active={activeItem === 'Hazte Socio'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Merchandising'
            active={activeItem === 'Merchandising'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Milagros'
            active={activeItem === 'Milagros'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Asociación'
            active={activeItem === 'Asociación'}
            onClick={this.handleItemClick}
          />
        </Menu> 
      </Segment>
      </div>  
     
    )
  }
}
