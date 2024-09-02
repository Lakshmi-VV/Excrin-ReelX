import React from "react";
import { useLocation, Link } from "react-router-dom";
import Vdo from "../videos/vdo-1.mp4";
import Modal, { ArtboardShare } from "../src/components/modal";
import { useState } from "react";
import Icon from "../src/components/icons";

function Artboard() {
  const location = useLocation();
  const fileName = location.state;
  const [artboardSharePopup, setArtboardSharePopup] = useState(false);

  const handleArtboardShareModal = () => {
    setArtboardSharePopup(true);
  };
  return (
    <>
      <div className="artboard-container">
        <div className="artboard-container-vdo">
          <div className="artboard-container-vdo__backicon-filename">
            <Link to="/dashboard" className="icon">
              <Icon icon="back-left" className="svg-icon" />
            </Link>
            <p className="artboard-container-vdo__filename">{fileName}</p>
          </div>

          <div className="artboard-container-vdo__videofile">
            <video width="70%" controls>
              <source src={Vdo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="artboard-container-options">
          <div className="artboard-container-share">
            <button
              className="artboard-container-share__btn"
              onClick={handleArtboardShareModal}
            >
              Share
            </button>
            <div></div>
          </div>
          <div></div>
        </div>
      </div>

      {artboardSharePopup && (
        <Modal open={setArtboardSharePopup}>
          <ArtboardShare
            close={() => {
              setArtboardSharePopup(false);
            }}
          />
        </Modal>
      )}
    </>
  );
}

export default Artboard;
