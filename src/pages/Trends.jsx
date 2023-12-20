import React from 'react';
import SearchTrends from '../components/SearchTrends';
import TrendsFor from '../components/TrendsFor';
function Trends() {
    return (
      <main className='trends' >
        <SearchTrends/>
        <TrendsFor/>
      </main>
    );
  }
  
  export default Trends;