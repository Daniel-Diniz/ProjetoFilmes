import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';


import ConfigRoutes from './ConfigRoutes'
function App() {

  return (
    <Router>
        <Header />
        <ConfigRoutes />
        <Footer />
    </Router>
  );
  }
export default App;