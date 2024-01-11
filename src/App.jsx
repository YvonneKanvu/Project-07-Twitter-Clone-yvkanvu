import { BrowserRouter,RouterProvider, Outlet,Routes,Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import Sidebar from "./pages/Sidebar.jsx";
import Trends from "./pages/Trends.jsx";
import PageProfil from "./pages/PageProfil.jsx";
import { Children } from "react";
// import Profile from "./components/Profile.jsx";
import('./style/reset.css');
import('./style/App.css');

export default function App() {
  // const router = BrowserRouter {
  //   path : "/", 
  //   element:<Layout/>;
  //    Children:[
  //     {
  //       path : "/",
  //       element:<Home/>
  //     },
  //     {
  //       path : "/Profile",
  //       element:<PageProfil/>
  //     },
  //   ]
  // };

  // return (
  //   <div><RouterProvider router ={router}/></div>
    //  <Layout>
    //         <Sidebar/>
    //       <Outlet/>
    //   <Trends/>
    // </Layout>
  // );
  // const router = (
  //   <BrowserRouter>
  //     <Layout>
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/Profile" element={<PageProfil />} />
  //       </Routes>
  //     </Layout>
  //   </BrowserRouter>
  // );
  
}
