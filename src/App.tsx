import React from 'react'
import './App.css'
import Hello from './components/Hello'
import LikeButton from './components/LikeButton'
import MouseTracker from './components/MouseTracker'
import withLoader from './components/withLoader'
import DogShow from './components/DogShow'

function App() {
  const WrappedDogShow = withLoader(DogShow, 'https://dog.ceo/api/breeds/image/random')
  
  return (
    <div className="App">
        <Hello />
        <LikeButton />
        <MouseTracker />
        <WrappedDogShow />
    </div>
  );
}

export default App;
