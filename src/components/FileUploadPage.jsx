import React, { useState } from "react";
import axios from "axios";

export default function FileUploadPage() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [resultPath, setResultPath] = useState("");

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) {
      alert("Select an MP3/WAV file first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8080/speech/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // If backend sends { filePath: "C:\\path\\file.txt" }
      if (res.data?.filePath) {
        setResultPath(res.data.filePath);
      } else {
        setResultPath("Check in custom folder");
      }
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
    setLoading(false);
  };

  return (
    <div className="upload-container" style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Upload Audio File</h2>

      <input type="file" accept=".mp3,.wav" onChange={handleFileChange} />

      <button
        onClick={handleUpload}
        disabled={loading}
        style={{ marginTop: "10px", padding: "8px 15px", cursor: "pointer" }}
      >
        {loading ? "Processing..." : "Upload"}
      </button>

      {loading && <p style={{ color: "blue" }}>⏳ Processing your file...</p>}

      {resultPath && (
        <div
          className="result-box"
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "#f5f5f5",
            borderRadius: "8px",
            textAlign: "left",
          }}
        >
          <h4>✅ File Saved Path:</h4>
          {resultPath.startsWith("http") ? (
            <a href={resultPath} target="_blank" rel="noopener noreferrer">
              {resultPath}
            </a>
          ) : (
            <p>{resultPath}</p> // For local system path
          )}
        </div>
      )}
    </div>
  );
}
