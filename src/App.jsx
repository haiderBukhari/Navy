import { Route, Routes } from 'react-router-dom';
import Uniform2 from './pages/Unform2';
import Uniform1 from './pages/Uniform1';

function App() {
  return (
    <>
      <Routes>
        <Route path="/uniform1" element={<Uniform1 />} />
        <Route path="/" element={<Uniform2 />} />
      </Routes>
    </>
  )
}

export default App
