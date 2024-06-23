import logo from '../../Icono.png';
import './style.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useForm from '../../hooks/useForm';

export function PageTwo() {
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const query = useQuery();
const queryValue = query.get('q');

const urlImg = `https://picsum.photos/id/${queryValue}`;

const {
  title,
  description,
  handleTitleChange,
  handleDescriptionChange,
  handleSubmit,
} = useForm(urlImg);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Contenido de la página 2 en <code>src/App.js</code>
        </p>
      </header>

      <div className="App-line"></div>
      
      <main className="App-main">
        <div className='container'>
           <img src={urlImg} height={500} width={700} alt=''></img>

           <form onSubmit={handleSubmit} className='form'>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" value={description} onChange={handleDescriptionChange} />
        </label>
        <br />
        <button type="submit" className='button'>Save</button>
      </form>
        </div>
       
        <Link to="/" className="App-link">
          Anterior
        </Link>
      </main>
    </div>
  );
}
