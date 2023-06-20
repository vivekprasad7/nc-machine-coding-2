import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HabitListing } from './pages/habit-listing/habitListing';
import { Archived } from './pages/archived/archived';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HabitListing/>}/>
        <Route path="/archive" element={<Archived/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
