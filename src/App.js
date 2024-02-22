import { useEffect, useState } from 'react';
import './App.css';
import { getdata } from './api';
import Postcard from './compoents/Postcard';


function App() {
  const [data,setdata] = useState(null);
useEffect(()=>{
  getdata().then((post)=>setdata(post));
},[])
  return (
    <div className="App">
       {
        data ? data.map((e)=><Postcard body={e.body} title={e.title}/>) : <p>no data</p>
       }
    </div>
  );
}

export default App;
