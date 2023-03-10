import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MovieSingle = () => {

  const { id } = useParams()
  const [movie, setMovie] = useState()


  useEffect(() => {
    const getData = async () => {
      try {
        const { data: { data } } = await axios.get(`https://api.potterdb.com/v1/movies/${id}`)
        console.log(data)
        setMovie(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])

  const date = () => {

  }

  return (
    <main className='movie-single'>
      <Container>
        <Row>
          {movie &&
            <>
              <Col xs="12">
                <h1 className='display-4'>{movie.attributes.title}</h1>
              </Col>
              <Col md="6">
                <img src={movie.attributes.poster} alt={movie.attributes.title} />
              </Col>
              <Col md="6">
                <h4 className="summary-heading">Summary</h4>
                <p>{movie.attributes.summary}</p>
                <hr />
                <h4>Director</h4>
                <p>{movie.attributes.directors[0]}</p>
                <hr />
                <h4>Release Date</h4>
                <p>{movie.attributes.release_date.split('-').reverse().join('-')}</p>
                <hr />
                <h4>Box Office</h4>
                <p>{movie.attributes.box_office}</p>
                <hr />
                <h4>Running Time</h4>
                <p>{movie.attributes.running_time}</p>
                <hr />
                <Link to="/movies" className='return'>Back to movies</Link>
              </Col>
            </>
          }
        </Row>
      </Container>
    </main>
  )

}

export default MovieSingle