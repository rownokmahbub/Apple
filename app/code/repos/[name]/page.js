import Repo from '@/app/repo'
import React from 'react'

const page = ({params:{name}}) => {
  return (
    <div>
        <p>{name}</p>
       <Repo name={name}/>
    </div>
  )
}

export default page