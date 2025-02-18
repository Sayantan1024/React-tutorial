import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Sayantan1024')
    //     .then((res) => res.json())
    //     .then(data => setData(data))
    // }, [])

  return (
    <div className="flex items-center gap-10 text-center m-4 bg-gray-400 text-white text-2xl p-4">
    <img src={data.avatar_url} alt="Github pic" width={200} className="order-1" />
    <span className="order-2 flex-1">Github followers: {data.followers}</span>
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const res = await fetch('https://api.github.com/users/Sayantan1024')
    return res.json()
}