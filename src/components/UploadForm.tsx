import React, { useState } from "react";
import { uploadSkinImage } from "../api/api";
import ScanHistory from "./ScanHistory";

const UploadForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState<string>(""); // <-- store uploaded image URL

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select an image");
    setLoading(true);
    try {
      const data = await uploadSkinImage(file);
      setResult(data);

      // Show image
      setImageURL(`http://localhost:5000/${data.imagePath}`);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5 text-center" data-aos="fade-up">
      <h2>Upload Skin Image</h2>
      <input
        type="file"
        accept="image/*"
        className="form-control my-3"
        onChange={handleFileChange}
      />
      <button
        className="btn btn-primary"
        onClick={handleUpload}
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Upload & Analyze"}
      </button>

      {imageURL && (
        <div className="mt-4">
          <h5>Uploaded Image:</h5>
          <img
            src={imageURL}
            alt="Uploaded Skin"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "300px" }}
          />
        </div>
      )}

      {result && (
        <div className="mt-4 p-3 border rounded">
          <h4>Analysis Result</h4>
          <p>Spots detected: {result.spots}</p>
          <p>Severity: {result.severity}</p>
        </div>
      )}

      <ScanHistory />
    </div>
  );
};

export default UploadForm;
