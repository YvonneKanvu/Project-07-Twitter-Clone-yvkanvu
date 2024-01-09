import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import Sidebar from "./pages/Sidebar.jsx";
import Trends from "./pages/Trends.jsx";
import Profile from "./components/Profile.jsx";
import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
          <BrowserRouter>
      <Sidebar/>
       <Home/>
      <Trends/>
      <Link to="/"><Home/></Link>
      <Link to="/Profile"><Profile/></Link>
      <Routes>
        <Route path="/profile" element={<Profile/>}/>
      
      </Routes>
      </BrowserRouter>
    </Layout>
  );
}
