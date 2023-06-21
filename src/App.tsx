import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SetForm from './pages/SetForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SetForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
