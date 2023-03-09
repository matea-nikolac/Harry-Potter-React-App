import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Characters from './components/Characters'
import Home from './components/Home'
import Movies from './components/Movies'
import PageNavbar from './common/PageNavbar'
import PageNotFound from './common/PageNotFound'

const App = () => {

  return (
    <div className="wrapper">
      <BrowserRouter>
        <PageNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Characters" element={<Characters />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
