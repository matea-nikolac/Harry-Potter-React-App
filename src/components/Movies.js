import { useEffect, useState } from 'react'
import axios from 'axios'

const Movies = () => {
  
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/movies') // * <-- replace with your endpoint
      console.log(data)
    }
    getData()
  }, [])

  return <h1>Movies</h1>
}

export default Movies