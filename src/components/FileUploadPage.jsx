import React, { useState } from "react";
import axios from "axios";

export default function FileUploadPage() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [resultPath, setResultPath] = useState("");

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return alert("Select an MP3/WAV file first");

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8080/speech/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResultPath(res.data.filePath || "check In custom folder");
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
    setLoading(false);
  };

  return (
    <div className="upload-container">
      <h2>Upload Audio File</h2>
      <input type="file" accept=".mp3,.wav" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Processing..." : "Upload"}
      </button>

      {loading && <div className="progress-bar"></div>}

      {resultPath && (
        <div className="result-box">
          <h4>✅ File Saved Path:</h4>
          <p>{resultPath}</p>
        </div>
      )}
    </div>
  );
}
