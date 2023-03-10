import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Characters from './components/Characters'
import Home from './components/Home'
import Movies from './components/Movies'
import MovieSingle from './components/MovieSingle'
import CharacterSingle from './components/CharacterSingle'
import PageNavbar from './common/PageNavbar'
import PageNotFound from './common/PageNotFound'
import Error from './common/Error'
import Loading from './common/Loading'

const App = () => {

  return (
    <div className="wrapper">
      <BrowserRouter>
        <PageNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterSingle />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieSingle />} />
          <Route path="/error" element={<Error />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
