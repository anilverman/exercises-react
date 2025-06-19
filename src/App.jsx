import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import CreateExercisePage from './pages/CreateExercisePage'
import EditExercisePage from './pages/EditExercisePage'

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState([]);

  return (
    <>
    <header>
      <h1>Exercise Tracker</h1>
      <p>Full Stack MERN App Demonstration</p>
      <p>Verman Website wooty woot</p>
    </header>
    <div className='app'>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage setExerciseToEdit={setExerciseToEdit}/>}></Route>
          <Route path="/create" element={<CreateExercisePage />}></Route>
          <Route path="/edit" element={<EditExercisePage exerciseToEdit={exerciseToEdit}/>}></Route>
        </Routes>
      </Router>
    </div>
    <footer>© 2025 Anil Verman</footer>
    </>
  )
}

export default App