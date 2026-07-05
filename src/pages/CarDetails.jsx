import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummyCarData } from '../assets/assets'

const CarDetails = () => {

  const {id} = useParams()
  const navigate = useNavigate()
  const [car, setCar] = useState(null)

  useEffect(()=>{
    setCar(dummyCarData.fill(car => car._id === id))
  },[id])

  return car ? (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-16'>

    </div>
  ) : <p>Loadig...</p>
}

export default CarDetails
