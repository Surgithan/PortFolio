import React from 'react';
import "./ResumeAlert.css";

const ResumeAlert = ({ onConfirm, onCancel }) => {
  return (
    <div className="alert-container">
      <div className="alert-box">
        <h2>Are you sure? You want to download the file.</h2>
        <div className="alert-actions"> 
          <button className="alert-button" onClick={onCancel}>Cancel</button>
          <button className="alert-button" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default ResumeAlert;
