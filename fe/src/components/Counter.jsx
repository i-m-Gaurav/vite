import  {useState,useEffect} from 'react'


const Counter = () => {

  const [count , setCount] = useState(0)
  //mouse position
   const [position , setPosition] = useState({x : 0 , y : 0})
  
  
  useEffect (()=> {

    // if (count === 10){
    //   setTimeout(()=>{
    //     setCount(0);
    // },5000)

    // clearTimeout();

    // }

    // get the mouse position using the mousemove event.

    const handleMouseMove = (e) =>{
      setPosition({x : e.clientX , y: e.clientY});

      console.log(`Mouse at :(${e.clientX} , ${e.clientY})`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove',handleMouseMove);
    }
      
    

  },[])

  // mouse event

 


  // so the setCount here , we use the functional update,
  // basically we use a function to increment the value,

  // if we don't use that or use a more direct approach,
  // then it won't work good, if we have multiple time changing the value.
  // like here

  // setCount(count + 1)
  // setCount(count + 1)
  // setCount(count + 1)
  // setCount(count + 1)
  // setCount(count + 1)

  // now when we do this, it will only change the value by only 1
  // not the five time, because, it always taking the initial
  // value. for the count.

  function Inc(value) {
    return value + 1;
  }

  const handleClick = () => {
    setCount(Inc)
    // this is called functional update.useState
    
  }

  console.log("Count updated to :", count)

  const isPrime = (number) => {

    if (number < 2) return false
    

   for(let i = 2 ; i<= Math.sqrt(number) ; i++) {

    if( number % i == 0) {
      return false;
    }
   }

   return true;

  }

  const isEven = count % 2 === 0;
  const isMaxReached  = count >=10;



  return(
    <>
    <h1>Counter</h1>
    <p>{count}</p>
    <p>{isEven ? 'Even' : 'Odd'}</p>
    <p>{isPrime(count) ? 'Prime' : 'Not Prime'}</p>
    <button onClick={handleClick} disabled = {isMaxReached}>Add</button>

    <h1>Mouse position </h1>

    <p>X : {position.x} , Y: {position.y}</p>
    </>
  )
}

export default Counter
