//import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import Article from './components/Article.js';

import data from './db.json';

const modules = import.meta.glob('./photos/*.png' , 
  {
      eager:true,
      import:'default'
  });
const photos = Object.entries(modules).map(([path,url]) => url);

function App()
{
  let nav = 
  {
     "Главная"  : "/index",
     "Новости"  : "/news",
     "Магазин"  : "/shop",
     "About"    : "/about",
     "Контакты" : "/contacts"
  };
  let db = data.people;
    return (
      <div className="App">
      <Header />
      <Nav nav={nav} />
      <Article db={db} photos={photos} />
      <Footer />
    </div>
  );
}
export default App;
