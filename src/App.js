
import './App.css';
import Cart from './Components/Cart';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const [data, setData] = useState({});
  const handleChange = (name, value)=>{
    const data1 = {...data , [name] : value};
    setData(data1);
  }
  const dispatch = useDispatch();
  return (
    <div className="App" style={{display: 'flex' , flexDirection : 'column' , justifyContent : 'center' , alignItems: 'center'}}>
      <h1>Add To Cart</h1>
      <form onSubmit={(e)=>{e.preventDefault() ; dispatch({type : 'Add' , data : data})}} style={{margin:'20px' ,display: 'flex' , flexDirection : 'column' , justifyContent : 'center' , alignItems: 'center'}}>
        <input onChange={(e)=>{handleChange(e.target.name , e.target.value)}} name='price' type='number' placeholder='Product Price'/>
        <input onChange={(e)=>{handleChange(e.target.name , e.target.value)}} name='name' type='text' placeholder='Product name'/>
        <input onChange={(e)=>{handleChange(e.target.name , e.target.value)}} name='quantity' type='number' placeholder='Product Quantity'/>
        <button type='submit'>Add To Cart</button>
      </form>
      <button onClick={()=>{dispatch({type : 'Clear'})}}>Clear Cart</button>
      <Cart />
    </div>
  );
}

export default App;
