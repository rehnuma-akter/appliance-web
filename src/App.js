import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Faq from './Components/Faq/Faq';
import Footer from './Components/Footer/Footer';
import Shop from './Components/Shop/Shop';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
}

export default App;
