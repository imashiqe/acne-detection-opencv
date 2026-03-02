import React, { useEffect, useState } from "react";
import axios from "axios";

const ScanHistory: React.FC = () => {
  const [scans, setScans] = useState<any[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/detect/history");
        setScans(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchHistory();
  }, []);

  return (
    <div className="container my-5" data-aos="fade-up">
      <h2>Scan History</h2>
      {scans.length === 0 ? (
        <p>No scans yet</p>
      ) : (
        <div className="row g-4">
          {scans.map((scan) => (
            <div key={scan.id} className="col-md-4">
              <div className="card shadow-sm">
                <img
                  src={`http://localhost:5000/${scan.imagePath}`}
                  className="card-img-top"
                  alt="Skin"
                  style={{ maxHeight: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-text mb-1">Spots: {scan.spots}</p>
                  <p className="card-text mb-0">Severity: {scan.severity}</p>
                  <small className="text-muted">
                    {new Date(scan.createdAt).toLocaleString()}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ScanHistory;
