import React,{useState,useEffect,useContext,createContext} from 'react';
const CountContext = createContext()

function Index() {

  const count = useContext(CountContext)
  return <div>{count}</div>
  
}

function Example() {
  const [count,setCount]=useState(0)
  
  useEffect(() => {
    console.log(count)
    return () => {
      
    };
  }, [count])
  return(
    <>
      <p>{count}</p>
      <button onClick={()=>{setCount(count+1)}}>Click Me</button>
      <CountContext.Provider value={count}>
        <Index></Index>
      </CountContext.Provider>
    </>
  )
}
export default Example;
