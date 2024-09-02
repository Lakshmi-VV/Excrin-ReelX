import React from "react";
import { useLocation } from "react-router-dom";
import Vdo from "../videos/vdo-1.mp4";
import Modal, { ArtboardShare } from "../src/components/modal";
import { useState } from "react";

function Artboard() {
  const location = useLocation();
  const fileName = location.state;
  const [artboardSharePopup, setArtboardSharePopup] = useState(false);

  const handleArtboardShareModal = () => {
    setArtboardSharePopup(true);
  };
  return (
    <>
      {fileName}
      <video width="70%" controls>
        <source src={Vdo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={handleArtboardShareModal}>Share</button>
      {artboardSharePopup && (
        <Modal open={setArtboardSharePopup}>
          <ArtboardShare />
        </Modal>
      )}
    </>
  );
}

export default Artboard;
