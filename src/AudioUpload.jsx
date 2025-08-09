import React, { useState } from "react";
import axios from "axios";

function AudioUpload() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an audio file first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file); // key name should match backend

    try {
      const response = await axios.post("/api/voice/transcribe", formData),
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResult(response.data); // backend JSON/text
    } catch (error) {
      console.error(error);
      alert("Error uploading file");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Upload MP3/WAV for Transcription</h2>
      <input type="file" accept=".mp3,.wav" onChange={handleFileChange} />
      <br />
      <br />
      <button onClick={handleUpload}>Upload & Transcribe</button>
      <div style={{ marginTop: "20px" }}>
        <h3>Result:</h3>
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </div>
    </div>
  );
}

export default AudioUpload;
