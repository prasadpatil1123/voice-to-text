import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import useClipboard from "react-use-clipboard";

export default function LiveVoicePage() {
  const [textToCopy, setTextToCopy] = useState("");
  const [isCopied, setCopied] = useClipboard(textToCopy, { successDuration: 1000 });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <p>Your browser doesn't support Speech Recognition.</p>;
  }

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "hi-IN" });
  };

  const startEnglishListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  };

  return (
    <div className="live-container">
      <h2>Live Voice Translation</h2>
      <textarea
        className="main-content"
        value={transcript}
        readOnly
        onClick={() => setTextToCopy(transcript)}
      />
      <div className="btn-style">
        <button onClick={setCopied}>{isCopied ? "Copied" : "Copy"}</button>
        <button onClick={startListening}>🎙 Start Hindi</button>
        <button onClick={startEnglishListening}>🎙 Start English</button>
        <button onClick={SpeechRecognition.stopListening}>⏹ Stop</button>
      </div>
    </div>
  );
}
