import { useState, useEffect } from "react";
import React from "react";
import Icon from "./icons";
import User1 from "../images/user1.png";
import User2 from "../images/user2.png";
import User3 from "../images/user3.png";

export const NewSpacePopup = ({
  projectName,
  handleProjectNameChange,
  handleCreateWorkspace,
  step,
  error,
}) => {
  const [currentStep, setCurrentStep] = useState(step);
  useEffect(() => {
    setCurrentStep(step);
  }, [step]);

  const [toggle, setToggle] = useState({
    consent: true,
  });

  const iconToggle = () => {
    setToggle({ consent: !toggle.consent });
  };

  const handleNextStep = () => {
    setCurrentStep(step + 1);
  };

  return (
    <>
      <div
        className="workspace-popup-content inner-container"
        onClick={(e) => e.stopPropagation()}
      >
        {currentStep === 1 && (
          <>
            <div className="popup__title">
              <p>Create a new workspace</p>
            </div>
            <div className="mail-section">
              <div className="input-container">
                <div className="input-field">
                  <input
                    type="text"
                    placeholder="Project name"
                    value={projectName}
                    onChange={(e) => handleProjectNameChange(e.target.value)}
                  />
                </div>
                {error && <p className="invalid">{error}</p>}
              </div>

              <button className="btn" onClick={handleCreateWorkspace}>
                Continue
              </button>
            </div>
          </>
        )}

        {currentStep === 2 && (
          <>
            <div className="popup__title">
              <p>Invite Members</p>
            </div>

            <div className="email-input-checkbox">
              <div className="email__input">
                <div>
                  <input type="text" placeholder="Email (comma seperated)" />
                </div>

                <button className="btn-invite">Invite</button>
              </div>
              <div className="email__checbox">
                <div className="checkbox" onClick={() => iconToggle()}>
                  {toggle.consent && (
                    <Icon icon="tick" className="check-tick svg-icon" />
                  )}
                </div>
                <p>Notify members</p>
              </div>
            </div>

            <div className="copy-invite">
              <div className="copy-invite__heading">
                <p>Copy Invite Link</p>
              </div>
              <div className="copy-invite__input">
                <div>
                  <input type="text" placeholder="https://www.reelx/excrin" />
                </div>

                <button className="copy-invite__copy-btn">
                  <Icon className="popup-svg-icon" icon="copy-icon" />
                  Copy
                </button>
              </div>
            </div>

            <div className="btn-skip-continue">
              <button className="btn__skip" onClick={handleNextStep}>
                Skip
              </button>
              <button className="btn__continue" onClick={handleNextStep}>
                Continue
              </button>
            </div>
          </>
        )}

        {currentStep === 3 && (
          <>
            <div className="popup__title">
              <p>Upload Logo</p>
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
                  <p>SVG, PNG or JPG (max. 800x800px)</p>
                </div>
              </div>

              <button className="upload-space__btn-browse">Browse</button>
            </div>

            <div className="btn-skip-continue">
              <button className="btn__skip">Skip</button>
              <button className="btn__continue">Continue</button>
            </div>
          </>
        )}

        <div className="popup-slider">
          <div className={`dot ${currentStep === 1 ? "dot-active" : ""}`}></div>
          <div className={`dot ${currentStep === 2 ? "dot-active" : ""}`}></div>
          <div className={`dot ${currentStep === 3 ? "dot-active" : ""}`}></div>
        </div>
      </div>
    </>
  );
};

export const UploadAssets = ({}) => {
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
};

export const ArtboardShare = ({ close }) => {
  return (
    <>
      <div
        className="artboard-popup-content "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="artboard-popup-share">
          <div className="artboard-popup-share__heading">
            <p>Share</p>
            <Icon icon="artboard-closebtn" onClick={close} />
          </div>
          <div className="artboard-popup-share__subheading">
            <p>Share with your team mates</p>
          </div>
        </div>
        <hr class="dotted-line" />

        <div className="artboard-popup-comments">
          <div className="artboard-popup-comments__email">
            <input type="text" placeholder=" Email, comma separated" />
          </div>
          <div className="artboard-popup-comments__remark">
            <input type="text" placeholder=" Enter your remarks..." />
          </div>
          <div className="artboard-popup-comments__users">
            <p>Recents users from your organisation</p>
            <div className="artboard-popup-comments__users-images">
              <img src={User1} alt="user1" />

              <img src={User2} alt="user2" />
              <img src={User3} alt="user3" />
            </div>
          </div>
        </div>

        <div className="artboard-popup-linkShare">
          <div className="artboard-popup-linkShare__link">
            <div className="link">
              <p>https://www.youtube.com/watch?v=vvkqaQzKZiQ</p>
            </div>

            <Icon icon="copy-icon" className="artboard-copy-icon" />
          </div>

          <div className="artboard-popup-linkShare__share">
            <button>Share</button>
          </div>
        </div>
      </div>
    </>
  );
};
function Modal({ children, open, ...props }) {
  return (
    <div>
      <div className="popup-overlay" onClick={() => open(false)}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
