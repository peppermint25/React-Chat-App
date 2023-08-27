import React, { useState } from "react";
import Header from "../ChatScreen/Header/Header";
import "./FileUpload.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const FileUpload = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);
  
    const handleFileUpload = (selectedFiles) => {
        const newFilesArray = Array.from(selectedFiles).map((file) => ({
            name: file.name,
            size: file.size,
            type: file.type,
            date: new Date().toLocaleString(),
        }));
    
        // Concatenate the new files with the existing uploaded files
        setUploadedFiles((prevUploadedFiles) => [...prevUploadedFiles, ...newFilesArray]);
    };

    
    const handleFileDrop = (event) => {
        event.preventDefault();
        const selectedFiles = event.dataTransfer.files;
        handleFileUpload(selectedFiles);
    };

    const handleDeleteFile = (index) => {
        const updatedFiles = uploadedFiles.filter((file, i) => i !== index);
        setUploadedFiles(updatedFiles);
    };
    
    const handleDeleteAllFiles = () => {
        setUploadedFiles([]);
    };
    
    
    const handleFileSelect = (event) => {
        const selectedFiles = event.target.files;
        if (selectedFiles.length > 0) {
            handleFileUpload(selectedFiles);
        }
    };

    const formatFileSize = (bytes) => {
        if (bytes === 0) return "0 Bytes";
        const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
    };
    
    
    return (
        <div className="file-upload-screen">
            <Header />
            <div className="file-upload-bar">
                <div
                    className="drop-zone"
                    onDrop={handleFileDrop}
                    onDragOver={(event) => event.preventDefault()}
                >
                    <p>Drag and drop files here</p>
                </div>
                <label htmlFor="file-input" className="add-files-button">
                    Add Files
                </label>
                <input
                    type="file"
                    multiple
                    onChange={handleFileSelect}
                    className="file-input"
                    id="file-input"
                />
            </div>
            <div className="uploaded-files-list">
                <h2 className="file-title">Uploaded Files:</h2>
                <div className="files-list">
                    {uploadedFiles.map((file, index) => (
                    <div className="file" key={index}>
                        <div className="file-info">
                            <div className="info main">
                                <div className="main">
                                    <strong>Name: </strong>
                                        {file.name}
                                </div>
                                <div className="main">
                                    <strong>Size: </strong>
                                        {formatFileSize(file.size)}
                                </div>
                            </div>
                            <div className="info sub">
                                <div className="sub">
                                    <strong>Type: </strong> {file.type}
                                </div>
                                <div className="sub">
                                    <strong>Date: </strong> {file.date}
                                </div>
                            </div>
                        </div>
                        <div className="file-delete">
                            <button onClick={() => handleDeleteFile(index)}>
                                <div className="delete-icon"></div>
                            </button>
                        </div>   
                    </div>
                    ))}
                </div>
                <div className="bottom-bar">
                    <div className="file-count">
                        <strong>Number of Files: </strong> {uploadedFiles.length}
                    </div>
                    {uploadedFiles.length > 0 && (
                        <div className="delete-all">
                            <span>Delete all files:  </span> 
                            <button className="delete-all-button" onClick={handleDeleteAllFiles}>
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                        </div>
                        
                    )}
                </div>
            </div>
        </div>
    );
};

export default FileUpload;