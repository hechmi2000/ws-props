import React from 'react'
import { Button, Card } from 'react-bootstrap'

const UserCard = ({user}) => {
  return (
    <div style={{marginTop:'10%'}}>
     <Card style={{ width: '18rem' }}>
    <Card.Img style={{objectFit:'cover'}} height={200}  variant="top" src={user.imageUrl} />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          {user.email}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>   
    
  


    </div>
  )
}

export default UserCard