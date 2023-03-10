import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Loading from '../common/Loading'
import Error from '../common/Error'

const Movies = () => {

  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        const { data: { data } } = await axios.get('https://api.potterdb.com/v1/movies')
        setMovies(data)
      } catch (err) {
        setError(err.message)
      }
    }
    getData()
  }, [])

  const displayMovies = () => {
    return movies.filter(movie => !movie.attributes.title.startsWith('Fantastic') ? movie : '').map((movie, index) => {
      return (
        <Col key={index} lg="4" md="6" sm="12" className='movies'>
          <Link to={`/movies/${movie.id}`}>
            <Card className='movie-card'>
              <div className="movie-image" style={{ backgroundImage: `url('${movie.attributes.poster}')` }}></div>
            </Card>
          </Link>
        </Col>
      )
    })
  }

  return (
    <main>
      <Container>
        <Row>
          <Col xs="12">
            <h1 className='display-4 mb-4 text-center'>Movies</h1>
          </Col>
          {movies.length > 0 ?
            displayMovies()
            :
            <>
              {error ? <Error error={error} /> : <Loading />}
            </>
          }
        </Row>
      </Container>
    </main>
  )
}

export default Movies