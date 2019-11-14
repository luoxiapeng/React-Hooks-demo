import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import React, { useState,useEffect } from 'react'


function Index() {
  useEffect(() => {
    console.log('Index老弟来了')
    return () => {
      console.log('Index老弟走了')
    };
  }, [])
  return (<div>我是首页</div>)
}
function List() {
  return (<div>我是列表页</div>)
}
function App() {
  const [count, setCount] = useState(0)
  const [age,setAge]=useState('19')
  const [name,setName]=useState('JEK')
  const [address,setAddress]=useState('广州天河')
  useEffect(() => {
    console.log(count)
    console.log(age)
  }, [age, count])
  return(
    <div>
      <p>{count}</p>
      <div>
        <span>姓名：{name}</span>
        <span>年龄：{age}</span>
        <span>地址：{address}</span>
      </div>
      <button onClick={()=>{setCount(count+1); setAge('20')}}>click me</button>
      <Router>
          <ul>
              <li> <Link to="/">首页</Link> </li>
              <li><Link to="/list/">列表</Link> </li>
          </ul>
          <Route path="/" exact component={Index} />
          <Route path="/list/" component={List} />
      </Router>
    </div>
  )
  
}
 
export default App;