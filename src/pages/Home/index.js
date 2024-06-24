import logo from '../../Icono.png';
import './style.css';
import { Link } from 'react-router-dom';
import ImageGalleryComponent from '../../hooks/ImageGallery';

export function HomePage() {
   
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Contenido de la página en <code>src/App.js</code>
        </p>
      </header>

      <div className="App-line"></div>
      
      <main className="App-main">
      <ImageGalleryComponent url='https://picsum.photos/v2/list'/>
        <Link to="/page2" className="App-link">
          Next Page
        </Link>
      </main>
    </div>
  );
};