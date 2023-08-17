import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect } from 'react';
 


function App() {  

  useEffect(() => {
   
    const fetch = async() => {
      const res = await axios.get('https://deploy-auts.onrender.com/start', { withCredentials: true })
      console.log(res.data);
    }

    fetch()
  
  }, [])
  
  
  return (
    <div className='App'>
     this is app
    </div>
 )}

export default App;
