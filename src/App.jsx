import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home} from "./components/pages/Home";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import { Movies } from "./components/pages/Movies";
import { Movie } from "./components/pages/Movie";
import { UserProvider } from "./context/UserContext";
import { Login } from "./components/pages/Login";
import { Toaster } from "react-hot-toast";
function App() {
 

  return (
    <>
   
   <Router>
   <UserProvider>
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:id" element={<Movie/>}/> 
        <Route path="/tvshow" element={<Movies/>}/>
        <Route path="/people" element={<Movies/>}/>
        <Route path="/more"   element={<Movies/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/signup" element={<Movies/>}/>
      </Routes>
      <Footer/>
      <Toaster/>
    </div>
    </UserProvider>
   </Router>
   
    </>

  );
}

export default App
