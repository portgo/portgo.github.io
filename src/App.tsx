import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Google from './pages/Google'
import SearchResult from './pages/ResultPage'

function App() {

  return (
    <div className='w-screen '>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Google/>}></Route>
          <Route path='/q' element={<SearchResult/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
