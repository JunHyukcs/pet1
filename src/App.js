
import './App.scss';
import MainPage from './componenets/MainPage';
import AboutPage from './componenets/AboutPage';
import Header from './componenets/Header';
import Footer from './componenets/Footer';
import UploadPage from './componenets/UploadPage';
import ProductPage from './componenets/ProductPage';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
		<Header/>
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/about" element={<AboutPage />} />
			<Route path="/uploadpage" element={<UploadPage />} />
			<Route path="/productpage/:id" element={<ProductPage />} />
		</Routes> 
		
		<Footer />
    </div>
  );
}

export default App;
