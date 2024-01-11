import { BrowserRouter,Routes,Route,NavLink } from "react-router-dom";
import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import Sidebar from "./pages/Sidebar.jsx";
import Trends from "./pages/Trends.jsx";
// import Profile from "./components/Profile.jsx";
import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
      <Sidebar/>
       <Home/>
      <Trends/>
      <BrowserRouter>
         <NavLink/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/profil' element={<PageProfile/>}/> */}
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}
