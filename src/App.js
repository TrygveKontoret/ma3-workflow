import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { url } from './utils/api';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => setData(response.data.data));
  }, []);

  console.log(data);

  return (
    <div className="App">
        {data.length > 0
          ? data.map((keiser, idx) => {
              return <div className='card' key={idx}>
                <h2>{keiser.attributes.Name}</h2>
                <img src={keiser.attributes.imgURL}></img>
                <p>Date of birth: {keiser.attributes.Birth}</p>
                <p>Date of death: {keiser.attributes.Death}</p>
                </div>;
            })
          : null}
    </div>
  );
}

export default App;
