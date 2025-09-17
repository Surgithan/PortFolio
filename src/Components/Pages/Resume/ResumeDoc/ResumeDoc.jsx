import React, { useState, useEffect } from "react";
import "./ResumeDoc.css";
import ResumePDF from "./ResumePDF/C.Thanga-Surgithan Frontend .pdf";
import ResumeAlert from "./ResumeAlert/ResumeAlert";

const ResumeDoc = () => {

    const [showAlert, setShowAlert] = useState(false);
    const [downloading, setDownloading] = useState(false);


    useEffect(() => {
        if (showAlert) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showAlert]);

    useEffect(() => {
        if (downloading) {
            const timer = setTimeout(() => {
                const pdf = document.createElement('a');
                pdf.href = ResumePDF;
                pdf.download = "C.Thanga-Surgithan-Frontend.pdf";
                pdf.click();
                setDownloading(false);
            }, 2500);

            return () => clearTimeout(timer);
        }
    }, [downloading]);

    const handleConfirm = () => {
        setShowAlert(false);
        setDownloading(false);
        setTimeout(() => {
            setDownloading(true);
        }, 50);
    };

    const handleCancel = () => {
        setShowAlert(false);
    };

    return (
        <div className="resume-download">
            <h3 style={{cursor:"no-drop"}}>Click here to download Resume</h3>
            <button className="download-button" onClick={() => setShowAlert(true)}>
                Download Resume
            </button>

            {showAlert && <ResumeAlert onConfirm={handleConfirm} onCancel={handleCancel} />}

            {downloading && <p className="download-msg">⏳ Please wait Resume is downloading...</p>}

        </div>
    );
};

export default ResumeDoc;


