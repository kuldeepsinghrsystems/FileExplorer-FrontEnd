import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/home';
import ShowTableData from './pages/showTableData';

function App(props) {

  return (
    <div className="App">
      <div className="container">
        <Router>
          <Routes>
            <Route exact path='/' element={<HomePage {...props} />}></Route>
            <Route exact path='/showData/:file' element={<ShowTableData {...props} />}></Route>
          </Routes>
        </Router>
      </div>
    </div >
  );
}

export default App;
