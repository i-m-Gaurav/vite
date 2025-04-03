
import './App.css'

import Counter from './components/Counter.jsx'
import { useWindowResize } from './components/WinResize'
// import useWindowResize from './components/WinResize'


function App() {

  const {width , height}  = useWindowResize();
  

  return (
    <>
    
      <Counter/>

    <h1>Hello</h1>
    <h1>here you will see the window resize value</h1>
    <p>height : {height}</p>
    <p>width : {width}</p>
    </>

  )
}

export default App
