import React from 'react'
import users from '../users'
import UserCard from './UserCard'
const UserList = () => {
    console.log(users)
  return (
    <div style={{display: 'flex', justifyContent: 'space-around', flexWrap:'wrap'}}>
        {
            users.map((user)=>
            <UserCard user={user} key={user.id} />)
        }
    </div>
  )
}

export default UserList