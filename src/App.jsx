import { BrowserRouter,Routes,Route,NavLink } from "react-router-dom";
import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import Sidebar from "./pages/Sidebar.jsx";
import Trends from "./pages/Trends.jsx";
import HomeTweet from "./components/HomeTweet.jsx";
import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
      <Sidebar/>
      <Home />
      <Trends/>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route>
          <Route path="/" element={<Home/>}/>
          <Route path="/HomeTweet" element={<HomeTweet/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </Layout>
  );
}
