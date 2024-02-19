//import {Blog} from './pages/Blog.jsx';
import Post from './components/Post';
import './index.css';

function App() {
  return (
    <Post urls={{ comment: "https://rebel.ar/@aitor" }} labels={{ comment: "Deja un comentario" }} tagbadges={["Prueba", "taghardcodeado!"]} />)
}

export default App
