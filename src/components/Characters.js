import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// Images
import harry from '../images/harry.png'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Loading from '../common/Loading'
import Error from '../common/Error'

const Characters = () => {

  const [characters, setCharacters] = useState([])
  const [filteredCharacters, setFilteredCharacters] = useState([])
  const [character, setCharacter] = useState('')
  const [error, setError] = useState('')
  const [houseFilter, setHouseFilter] = useState('All')

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://hp-api.onrender.com/api/characters')
        setCharacters(data)
        setFilteredCharacters(data)
      } catch (err) {
        setError(err.message)
      }
    }
    getData()
  }, [])

  const displayCharacters = () => {
    return filteredCharacters.map((character, index) => {
      let img = character.image ? character.image : 'https://img.freepik.com/premium-vector/old-wizard-esport-logo-illustration_224764-37.jpg'
      if (character.name === 'Harry Potter') {
        img = harry
      } else if (character.name === 'Hermione Granger') {
        img = 'https://media.harrypotterfanzone.com/hermione-granger-order-of-the-phoenix-portrait-7.jpg'
      }
      return (
        <Col key={index} lg="4" md="6" sm="12" className='character'>
          <Link to={`/characters/${character.id}`}>
            <Card>
              <div className="card-image" style={{ backgroundImage: `url('${img}')` }}></div>
              <Card.Body>
                <Card.Text>{character.name}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      )
    }
    )
  }

  const filterCharacters = () => {
    const regex = new RegExp(character, 'i')
    setFilteredCharacters(characters.filter(character => {
      return regex.test(character.name) && (houseFilter === character.house || houseFilter === 'All')
    }))
  }

  const getHouses = () => {
    const houses = [...new Set(characters
      .filter(character => character.house ? character : '')
      .map(character => character.house))].sort()
    return houses.map(house => <option key={house} value={house}>{house}</option>)
  }

  const handleSearch = (value) => {
    setCharacter(value)
  }

  const handleHouseFilter = (value) => {
    setHouseFilter(value)
  }

  useEffect(() => {
    filterCharacters()
  }, [character, houseFilter])

  return (
    <main>
      <Container>
        <h1 className='display-4 mb-4 text-center'>Characters</h1>
        {characters.length > 0 ?
          <Row>
            <Col xs="12">
              <div className='filters'>
                <input type="text" placeholder="Search character..." className='mb-2 search' onChange={(e) => handleSearch(e.target.value)} />
                <div>
                  <label htmlFor="house" className='mr-2'>Filter by house:</label>
                  <select name="house" id="house" className='mb-2 text-center dropdown' onChange={(e) => handleHouseFilter(e.target.value)}>
                    <option value='All'>All</option>
                    {getHouses()} 
                  </select>
                </div>
              </div>
            </Col>
            {displayCharacters()}
          </Row>
          :
          <>
            {error ? <Error error={error} /> : <Loading/>}
          </>
        }
      </Container>
    </main>
  )
}

export default Characters