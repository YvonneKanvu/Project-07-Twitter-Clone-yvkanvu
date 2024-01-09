import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import React from 'react';
import Layout from '../components/layout';
import Sidebar from './Sidebar';
import Trends from './Trends';
import ProfileTwitter from '../components/ProfileTwitter';
function ProfilTweet() {
    return ( 
        <Layout>
        <Sidebar/>
        <ProfileTwitter/>
        <Trends/>
        </Layout>
     );
}

export default ProfilTweet;