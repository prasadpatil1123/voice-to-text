import React from "react";
import './App.css';
import SpeechRecognition,{ useSpeechRecognition  } from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import { useState } from "react";


const App = () =>  {

  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000,
  });

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' })

  const {transcript, browserSupportsSpeechRecognition} = useSpeechRecognition();

  if(!browserSupportsSpeechRecognition){
    return null;
  }

  return (
    <>  
      <div className="container">
        <h2>
          Speech to text Converter
        </h2>
        <br/>
        <p>
          React hook to convert speech to text using the Web Speech API.
        </p>
        <div className="main-content" onClick={() => setTextToCopy(transcript)}>
          {transcript }
        </div>
        <div className="btn-style">

          <button onClick={setCopied}>
            {isCopied ? "Copied" : "Copy to clipboard"}
            </button>
          <button onClick={startListening}>Start Listening</button>
          <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
        </div>
        
        </div>
    </>
  )
}

export default App;



// import CenteredBox from './comp/CenteredBox.jsx';
// function App() {
//   return (
//     <>
//       <CenteredBox/>
//     </>
//   )
// }
// export default App

