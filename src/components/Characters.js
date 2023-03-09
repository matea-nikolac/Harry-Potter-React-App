import { useEffect, useState } from 'react'
import axios from 'axios'

const Characters = () => {
  
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/characters') // * <-- replace with your endpoint
      console.log(data)
    }
    getData()
  }, [])

  return <h1>Characters</h1>
}

export default Characters