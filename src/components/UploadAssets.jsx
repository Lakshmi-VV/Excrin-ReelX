import React from "react";
import Icon from "./Icons";

function UploadAssets() {
  return (
    <>
      <div
        className="workspace-popup-content inner-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="popup__title">
          <p>Upload Assets</p>
        </div>

        <div className="upload-space">
          <div className="upload-space__icon">
            <Icon className="svg-icon" icon="upload" />
          </div>

          <div className="upload-space__content">
            <div className="upload-space__instructions">
              <p className="upload-space__click">Click to upload</p>
              <p className="upload-space__drag">or drag and drop</p>
            </div>
            <div className="upload-space__file-info">
              <p>MP4, MOV</p>
            </div>
          </div>

          <button className="upload-space__btn-browse">Browse</button>
        </div>

        <div className="btn-upload">
          <button className="btn">Upload</button>
        </div>
      </div>
    </>
  );
}

export default UploadAssets;
