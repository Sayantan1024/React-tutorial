import React from 'react'
import { useParams } from 'react-router-dom'

function User () {
    const {userid} = useParams();
  return (
    <div className='bg-gray-400 text-white text-2xl p-4'>User : {userid}</div>
  )
}

export default User 