import './App.css';
import Counter from './Counter';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import GridData from './GridData';
import PostReq from './PostReq';

function App() {
  return (
    <div className="app">

      <Router>
        <div>
        <Routes>
          <Route path='/post' element={<PostReq />} />
          <Route path='/grid' element={<GridData />} />
          <Route path='/' element={<Counter/>} />
        </Routes>
        </div>
    </Router>
    </div>
  );
}

export default App;
