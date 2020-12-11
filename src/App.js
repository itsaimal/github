
import './App.css';
import Row from "./Row"
import request from "./requests"

function App() {
  return (
    <div className="App">
     <h1>hello app</h1>
     <Row title="NETFLIX ORIGNALS" fetchUrl={request.}/>
     <Row title="Trending Now" fetchUrl={request.}/>
    </div>
  );
}

export default App;
