import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CityInfoPage from './page/temp/CityInfoPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CityInfoPage />} />
      </Routes>
    </Router>
  )
}

export default App
