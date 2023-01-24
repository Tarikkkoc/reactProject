import './App.css';
import Navbar from './navbar';
import Home from './home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetail from './BlogDetail';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>

      <div className="content">
      <Switch>
        <Route exact path="/"> {/* / ile başlıyor. 18.satır da / ile başlıyor. bu nedenle tarayıcı ilk gördüğü path'i alır. exact path tam eşleşeni alır. */}
          <Home/>
        </Route>
        <Route path="/create"> {/* dosya yolu eklendi. webde arama çubuğuna 3000/ olduğunda çalışır */}
          <Create/>
        </Route>
        <Route path="/blogs/:kimlik"> {/* /blogs/:kimlik kimlik kısmı route parameters olup  adres çubuğunda ne girilirse belirtilen yere gönderir. /blogs/:1 ile /blogs/:12341324 aynı sayfaya gönderir. */}
          <BlogDetail/>
        </Route>
        <Route path="*"> {/* * sayfayı kilitli gösterir. olmayan bir sayfa varsa burayı açar. */}
          <NotFound/>
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
