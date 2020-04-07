import React from 'react'
import { Header, Image, Button } from 'semantic-ui-react'

const HeaderOpenAir = () => (
  <div className='item-header'>
    <Header as='h2' color='black' dividing='true' textAlign='left' block>
     &nbsp;&nbsp;  
    <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' />  Open Air Festival &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Button icon='ticket' content='Tickets' color='black'></Button>
  </Header>
  </div>  
 
)

export default HeaderOpenAir;