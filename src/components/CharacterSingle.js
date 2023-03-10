import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

// Images
import harry from '../images/harry.png'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Loading from '../common/Loading'
import Error from '../common/Error'

const CharacterSingle = () => {

  const { id } = useParams()
  const [characters, setCharacters] = useState()
  const [error, setError] = useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://hp-api.onrender.com/api/characters')
        setCharacters(data)
      } catch (err) {
        setError(err.message)
      }
    }
    getData()
  }, [id])

  const getImage = (character) => {
    if (character.name === 'Harry Potter') {
      return harry
    } else if (character.name === 'Hermione Granger') {
      return 'https://media.harrypotterfanzone.com/hermione-granger-order-of-the-phoenix-portrait-7.jpg'
    } else {
      return character.image ? character.image : 'https://img.freepik.com/premium-vector/old-wizard-esport-logo-illustration_224764-37.jpg'
    }
  }

  return (
    <main className='character-single'>
      <Container>
        {characters ?
          characters.filter(character => character.id === id).map((character, index) => {
            return (
              <Row key={index}>
                <Col xs="12 name-div">
                  <h1 className='display-4 mb-5'>{character.name}</h1>
                </Col>
                <Row>
                  <Col md="6 mb-4 character-image">
                    <img src={getImage(character)} alt={character.name} />
                  </Col>
                  <Col md="6">
                    <h4 className="summary-heading">Actor</h4>
                    <p>{!character.actor ? '-' : character.actor}</p>
                    <hr />
                    <h4>Date of Birth</h4>
                    <p>{!character.dateOfBirth ? '-' : character.dateOfBirth}</p>
                    <hr />
                    <h4>House</h4>
                    <p>{!character.house ? '-' : character.house}</p>
                    <hr />
                    <h4>Ancestry</h4>
                    <p>{!character.ancestry ? '-' : character.ancestry.charAt(0).toUpperCase() + character.ancestry.slice(1)}</p>
                    <hr />
                    <h4>Patronus</h4>
                    <p>{!character.patronus ? '-' : character.patronus.charAt(0).toUpperCase() + character.patronus.slice(1)}</p>
                    <hr />
                    <Link to="/characters" className='return'>Back to characters</Link>
                  </Col>
                </Row>
              </Row>
            )
          })
          :
          <>
            {error ? <Error error={error} /> : <Loading/>}
          </>
        }
      </Container>
    </main>
  )

}

export default CharacterSingle