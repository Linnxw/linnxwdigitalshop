import Home from "./pages/Home.js"
import {Routes,Route} from "react-router-dom";
import Category from "./pages/Category.js"
import Search from "./pages/Search.js"
import Chekout from "./pages/Chekout.js"
function App(){
  return (
    <>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/search" element={<Search/>}/>
     <Route path="/category" element={<Category/>}/>
     <Route path="/:chekout" element={<Chekout/>}/>
    </Routes>
    </>
    )
}
export default App;