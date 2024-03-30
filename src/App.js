import React from 'react';
import Banner from './components/Banner'; // Assuming Banner component is in './Banner.js' or './Banner.jsx'
import YouTubeVideos from './components/Yt/Yt';

import './App.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <YouTubeVideos/>
    </div>
  );
}

export default App;

