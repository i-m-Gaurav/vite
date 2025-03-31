import React from 'react'

const Test = ({name, age, phone, address }) => {
  return (
  <>

      <h1>Hello {name}</h1>

      <h1>Your age is {age}</h1>

      <h1>Your phone number is  {phone}</h1>
      <h1>You belong to {address}</h1>
    </>
  )
}

export default Test
