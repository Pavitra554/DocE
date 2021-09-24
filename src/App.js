import './App.css'
import Lottie from 'lottie-react';
import background from './animation/Bg.json';
import TextEditor from './TextEditor';


function App() {
  return (
    <div className="App">
      <Lottie animationData={background} className="back"/>
      <div className="header">
        DocE
      </div>
      <TextEditor/>
    </div>
  );
}

export default App;
