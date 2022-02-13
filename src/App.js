import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { url } from './utils/api';

// function App() {
//   const [data, setData] = useState([]);
    
//   useEffect(() => {
//      axios
//       .get(url)
//       .then((response) => setData(response.data.data));
//   },[]);

//   console.log(data)
//   return (
//     <div className='App'>
//       <h1>heiheihehiehie</h1>
      
//         {data.map(penis => {
//           <h1>{penis.attributes.Name}</h1>
//         })}
//     </div>
//   )}

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => setData(response.data.data));
  }, []);

  return (
    <div className="App">
      <h1>Hei</h1>
      <ul>
        {data.length > 0
          ? data.map((champion, idx) => {
              return <li key={idx}>{champion.attributes.Name}</li>;
            })
          : null}
      </ul>
    </div>
  );
}

export default App;
