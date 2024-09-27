import logo from './logo.svg';
import './App.css';
import {Link} from './'
function App() {
  return (
    <>
      <ul>
        {produits.map((id,produit)=>(
         <Link> <li>
         key={id}
         prix={produit.prix}
         nom={produit.nom}
       </li>
       </Link>
        ))}
      </ul>
    </>
  );
}

export default App;
