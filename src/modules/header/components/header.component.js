import React from 'react'
import { Header, Image, Button, Icon } from 'semantic-ui-react'


const HeaderOpenAir = () => {

  const handleFacebook = () => {
    console.log('handleFacebook')
    let link = 'https://www.facebook.com/bladi.delbarriopizarro';
    window.open(link, "_blank");
  }

  return(
  <div className='item-header'>
    <Header as='h2' color='black' dividing={true} textAlign='left' block>
    &nbsp;&nbsp;  
    <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' />  Open Air Festival Milagros &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Button icon='ticket' content='Tickets' color='black' size='big'></Button>  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
    
    
  
    <Button color='facebook' onClick={handleFacebook}>
      <Icon name='facebook' /> Facebook
    </Button>
    
    <Button color='twitter'>
      <Icon name='twitter' /> Twitter
    </Button>
    <Button color='instagram'>
      <Icon name='instagram' /> Instagram
    </Button>
    <Button color='youtube'>
      <Icon name='youtube' /> YouTube
    </Button>
  </Header>
  </div>  
  )
  }

export default HeaderOpenAir;