import './App.css';
import Navbar from './navbar';
import Home from './home';

function App() {
  const title = "Blog içerisine hoş geldiniz"; // dinamik değer oluşturuldu
  const ask = 1903;
  const person = {name:"Tarık",surname:"Koç", age:22, job:"Engineer"};
  const link = "http://www.google.com";
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <div className="content">

      </div>
    </div>
  );
}

export default App;
