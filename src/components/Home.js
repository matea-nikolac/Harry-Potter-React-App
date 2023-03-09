import axios from 'axios'
import { useEffect } from 'react'

const Home = () => {

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('')
    }
  })

  return (
    <main className="home">
      <h1>Harry Potter</h1>
    </main>
  )
}

export default Home