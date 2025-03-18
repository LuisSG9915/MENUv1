import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Componentes de layout
import Layout from './components/layout/Layout';

// Páginas
import RestaurantList from './pages/RestaurantList';
import RestaurantPage from './pages/RestaurantPage';
import AboutPage from './pages/AboutPage';

// Datos
import { sampleRestaurants } from './data/sampleMenus';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<RestaurantList restaurants={sampleRestaurants} />} />
          <Route path="/restaurant/:id" element={<RestaurantPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
