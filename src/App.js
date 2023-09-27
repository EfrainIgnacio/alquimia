import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {


  // const axios = require('axios');

    const url = 'https://demomatic.alquimiadigital.mx/cpanel/index.php/api/oauth2/token';
    const data = 'grant_type=password&username=ejemplpo%40alquimiapay.com&password=Tupassword&client_id=testclient&client_secret=testpass';
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    axios.post(url, data, { headers })
      .then((response) => {
        console.log(response.data);
        debugger
      })
      .catch((error) => {
        console.error(error);
        debugger
      });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
