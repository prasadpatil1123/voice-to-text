import React, { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import useClipboard from "react-use-clipboard";

export default function LiveVoicePage() {
  const [textToCopy, setTextToCopy] = useState("");
  const [isCopied, setCopied] = useClipboard(textToCopy, { successDuration: 1000 });

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  useEffect(() => {
    setTextToCopy(transcript); // auto-update copy text
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <p>Your browser doesn't support Speech Recognition.</p>;
  }

  const startListening = (lang) => {
    SpeechRecognition.startListening({ continuous: true, language: lang });
  };

  return (
    <div className="live-container">
      <h2>Live Voice Translation</h2>
      <p>Speak and see the live transcript in Hindi or English.</p>

      <div
        className="main-content"
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          minHeight: "100px",
          background: "#f9f9f9",
        }}
      >
        {transcript || "Start speaking..."}
      </div>

      <div className="btn-style" style={{ marginTop: "10px" }}>
        <button onClick={setCopied}>{isCopied ? "Copied!" : "Copy"}</button>
        <button onClick={() => startListening("hi-IN")}>🎙 Start Hindi</button>
        <button onClick={() => startListening("en-IN")}>🎙 Start English</button>
        <button onClick={SpeechRecognition.stopListening}>⏹ Stop</button>
      </div>
    </div>
  );
}
