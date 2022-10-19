import React from 'react'

const ProfileData = () => {
  const user = {
    "login": "user-john",
    "firstName": "John",
    "lastName": "Smith",
    "roles": [
      "User"
    ]
  }
  return (
    <div>
      <p>First Name:{user.firstName}</p>
      <p>Last Name:{user.lastName} </p>
      <ul>
          {user.roles.map(r=><li key={r}>{r}</li>)}
      </ul>
      <p>First Name:</p>
      <p>First Name:</p>
    </div>
  )
}

export default ProfileData