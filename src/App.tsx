import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { UserProvider } from './context/UserContext';
import ProductProvider from './context/ProductContext';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <Home></Home>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
