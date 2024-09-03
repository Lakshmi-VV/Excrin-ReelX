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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [statusDropdown, setStatusDropdown] = useState([
    { name: "In Progress", bgColor: "#fff2e1", color: "#9e6812" },
    { name: "On Hold", bgColor: "#ff2eb9", color: "#fff" },
    { name: "Needs review", bgColor: "#eae5f8", color: "#7a5aec" },
    { name: "Completed", bgColor: "#00b8a8", color: "#fff" },
  ]);

  const [selectedStatus, setSelectedStatus] = useState("Status");

  const [activeTab, setActiveTab] = useState("Comments");

  const [fileDetails, setFileDetails] = useState([
    {
      name: { fileName },
      size: "100 MB",
      type: ".mov",
      uploadedDate: "14 Sep 2023",
      UploadedTime: "07:30 PM",
      LastEdited: "14 Sep 2023, 07:30 PM",
    },
  ]);

  const handleArtboardShareModal = () => {
    setArtboardSharePopup(true);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
    setIsMenuOpen(false);
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

        <div className="artboard-container-sidebar">
          <div className="artboard-container-share">
            <button
              className="artboard-container-share__btn"
              onClick={handleArtboardShareModal}
            >
              Share
            </button>
            <div className="artboard-container-share__user-group">
              <Icon icon="user-group" />
              <p>5</p>
            </div>
            <div className="status-dropdown">
              <div
                className="status-dropdown__select-arrow"
                onClick={toggleMenu}
              >
                <span className="status-dropdown__select">
                  {selectedStatus.name || "Status"}
                </span>
                <div className="status-dropdown__arrow">
                  <Icon icon="status-dropdown" />
                </div>
              </div>

              {isMenuOpen && (
                <ul className="menu">
                  {statusDropdown.map((status, index) => (
                    <li
                      key={index}
                      className={`status-item ${status.name}`}
                      style={{
                        backgroundColor: status.bgColor,
                        color: status.color,
                      }}
                      onClick={() => handleStatusClick(status)}
                    >
                      <Icon
                        icon="status-tick"
                        className="tick-icon"
                        style={{ stroke: status.color }}
                      />
                      <p>{status.name}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="artboard-container-comments_info">
            <div className="artboard-container-comments_info-tab">
              <div
                className={`tab_comments  ${
                  activeTab === "Comments" ? "tabactive" : ""
                }`}
                onClick={() => setActiveTab("Comments")}
              >
                Comments
              </div>

              <div
                className={`tab_fileinfo ${
                  activeTab === "File Info" ? "tabactive" : ""
                }`}
                onClick={() => setActiveTab("File Info")}
              >
                File Info
              </div>
              <div
                className={`tab_versions ${
                  activeTab === "Versions" ? "tabactive" : ""
                }`}
                onClick={() => setActiveTab("Versions")}
              >
                Versions
              </div>
            </div>

            <div>
              {activeTab === "Comments" && (
                <>
                  <div className="comments_section">
                    <div className="comments_section__filters">
                      <div className="comments_section__search-filter">
                        <Icon icon="search-icon" />
                        <input type="text" placeholder="Search" />
                      </div>
                      <div className="comments_section__filter-icon">
                        <Icon icon="version-filter1" />
                      </div>
                      <div className="comments_section__filter-icon">
                        <Icon icon="version-filter2" />
                      </div>
                    </div>
                    <div></div>
                  </div>
                </>
              )}

              {activeTab === "File Info" && (
                <>
                  <div>
                    {fileDetails.map((file, index) => (
                      <div key={index} className="file-info">
                        <div className="file-info__name">
                          <p className="file-info__heading">File name</p>
                          <div className="file-info__value-filename">
                            <p className="file-info__value">
                              {file.name.fileName}
                            </p>
                          </div>
                        </div>

                        <div className="file-info__size">
                          <p className="file-info__heading">Size</p>
                          <p className="file-info__value">{file.size}</p>
                        </div>

                        <div className="file-info__type">
                          <p className="file-info__heading">File type</p>
                          <p className="file-info__value">{file.type}</p>
                        </div>

                        <div className="file-info__uploaded-date">
                          <p className="file-info__heading">Uploaded date</p>
                          <p className="file-info__value">
                            {file.uploadedDate}
                          </p>
                        </div>

                        <div className="file-info__uploaded-time">
                          <p className="file-info__heading">Uploaded time</p>
                          <p className="file-info__value">
                            {file.UploadedTime}
                          </p>
                        </div>

                        <div className="file-info__last-edited">
                          <p className="file-info__heading">Last edited</p>
                          <p className="file-info__value"> {file.LastEdited}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {activeTab === "Versions" && (
                <>
                  <div className="version-control">
                    <div className="version-control__heading">
                      <p>Version History</p>
                      <Icon icon="version-filter" />
                      <Icon icon="version-add" />
                      <Icon icon="version-close" />
                    </div>
                    <div>Current version</div>
                  </div>
                </>
              )}
            </div>
          </div>
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
