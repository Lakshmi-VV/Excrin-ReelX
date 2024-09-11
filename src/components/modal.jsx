import React from "react";

import NewSpacePopup from "./NewSpacePopup.jsx";
import UploadAssets from "./UploadAssets.jsx";
import ArtboardShare from "./ArtboardShare.jsx";

function Modal({ children, activeComponent, open, ...props }) {
  return (
    <div>
      <div className="popup-overlay" onClick={() => open(false)}>
        {children}
        {activeComponent === "NewSpacePopup" && <NewSpacePopup />}
        {activeComponent === "UploadAssets" && <UploadAssets />}
        {activeComponent === "ArtboardShare" && <ArtboardShare />}
      </div>
    </div>
  );
}

export default Modal;
