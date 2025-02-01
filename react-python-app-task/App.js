import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    // Fetch data from the Python backend
    axios.get('http://localhost:5000/api/data')
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleEcho = () => {
    const data = { input: 'Hello from React!' };
    axios.post('http://localhost:5000/api/echo', data)
      .then((res) => {
        setResponse(res.data.received.input);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="App">
      <h1>React and Python Integration</h1>
      <p>Message from Python backend: {message}</p>
      <button onClick={handleEcho}>Send Data to Python</button>
      {response && <p>Response from Python: {response}</p>}
    </div>
  );
}

export default App;