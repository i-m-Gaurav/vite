import  {useState} from 'react'


const Counter = () => {

  const [count , setCount] = useState(0)

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
    // this is called functional update.
  }

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
    </>
  )
}

export default Counter