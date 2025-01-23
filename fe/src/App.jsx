
import './App.css'
// import Signup from './components/Signup'
import Todo from './components/Todo'
// import User from './components/User'
import {BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePage from './pages/CreatePage'
import HomePage from './pages/HomePage';

function App() {

  return (
    <>
    {/* <Signup/>
      <User/> */}


      {/* <Todo/> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/todo' element = {<Todo/>}/>
          <Route path='/create' element={<CreatePage />} />
        </Routes>
      </BrowserRouter>
     
    </>
   
  )
}

export default App
