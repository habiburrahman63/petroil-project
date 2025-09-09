import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Imagecarosel from "./components/Imagecarosel/Imagecarosel";
import Mapp from "./components/Mapp/Mapp";
import Navber from "./components/Navber/Navber";
import Portfolio from "./components/Portfolio/Portfolio";
import Service from "./components/Service/Service";
import Supplier from "./components/Supplier/Supplier";
import Topber from "./components/Topber/Topber";


function App() {
  return (
    <>
<Topber></Topber>
<Navber></Navber>
<Banner></Banner>
<Supplier></Supplier>
<Imagecarosel></Imagecarosel>
<Service></Service>
<About></About>
<Portfolio></Portfolio>
<Blog></Blog>
<Mapp></Mapp>
<Footer></Footer>
      
    </>
  );
}

export default App;
