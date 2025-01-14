// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import ListGame from './pages/ListGame';
import LoginPage from './pages/Login';
import RegPage from './pages/Register';
import NotFound from './pages/NotFound';
import Detailku from './pages/Detail';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<ListGame YangDiBaca="games"/>} />
          <Route path="/teknologi" element={<ListGame YangDiBaca="tech"/>} />
          <Route path="/search" element={<ListGame YangDiBaca="search" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/detail/:tahun/:bulan/:tanggal/:judul" element={<Detailku />} />
          <Route path="/register" element={<RegPage />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;
