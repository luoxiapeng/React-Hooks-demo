import React, { useState } from 'react'

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       count:0
//      }
//   }
//   render() { 
//     return ( 
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={this.addCount.bind(this)}>Chlick me</button>
//       </div>
//      );
//   }
//   addCount(){
//     this.setState({
//       count:this.state.count+1
//     })
//   }
// }

function App() {
  const [count, setCount] = useState(0)
  const [age,setAge]=useState('19')
  const [name,setName]=useState('JEK')
  const [address,setAddress]=useState('广州天河')
  return(
    <div>
      <p>{count}</p>
      <div>
        <span>姓名：{name}</span>
        <span>年龄：{age}</span>
        <span>地址：{address}</span>
      </div>
      <button onClick={()=>{setCount(count+1)}}>click me</button>
    </div>
  )
  
}
 
export default App;