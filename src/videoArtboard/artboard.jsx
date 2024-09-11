import React from "react";
import { useLocation, Link } from "react-router-dom";
import Vdo from "../assets/videos/vdo-1.mp4";
import Modal from "../components/Modal";
import ArtboardShare from "../components/ArtboardShare";
import { useState } from "react";
import Icon from "../components/Icons";
import UserImg from "../assets/images/artboard_user.png";
import Header from "../components/Header";

function Artboard() {
  const location = useLocation();
  const fileName = location.state;

  const [artboardSharePopup, setArtboardSharePopup] = useState(false);

  const [statusDropdown, setStatusDropdown] = useState({
    dropDownOpen: false,
    dropDownMenu: [
      { name: "In Progress", bgColor: "#fff2e1", color: "#9e6812" },
      { name: "On Hold", bgColor: "#ff2eb9", color: "#fff" },
      { name: "Needs review", bgColor: "#eae5f8", color: "#7a5aec" },
      { name: "Completed", bgColor: "#00b8a8", color: "#fff" },
    ],
    selectedMenu: "Status",
  });

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
    setStatusDropdown({
      ...statusDropdown,
      dropDownOpen: !statusDropdown.dropDownOpen,
    });
  };
  const handleStatusClick = (status) => {
    setStatusDropdown({
      ...statusDropdown,
      selectedMenu: status,
      dropDownOpen: false,
    });
  };
  return (
    <>
      <Header />
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
              <Icon icon="user-group" className="svg-icon" />
              <p>5</p>
            </div>
            <div className="status-dropdown">
              <div
                className="status-dropdown__select-arrow"
                onClick={toggleMenu}
              >
                <span className="status-dropdown__select">
                  {statusDropdown.selectedMenu.name || "Status"}
                </span>
                <div className="status-dropdown__arrow">
                  <Icon icon="status-dropdown" className="svg-icon" />
                </div>
              </div>

              {statusDropdown.dropDownOpen && (
                <ul className="menu">
                  {statusDropdown.dropDownMenu.map((status, index) => (
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
                        <Icon icon="search-icon" className="search-svg-icon" />
                        <input type="text" placeholder="Search" />
                      </div>
                      <div className="comments_section__filter-icon">
                        <Icon icon="version-filter1" className="svg-icon" />
                      </div>
                      <div className="comments_section__filter-icon">
                        <Icon icon="version-filter2" className="svg-icon" />
                      </div>
                    </div>

                    <div className="comments_section__comment-container">
                      <div className="comments-section__comments">
                        <div className="comments-section__comment">
                          <div className="comments-section__user">
                            <div className="comments-section__user-name">
                              <img src={UserImg} width="24px" height="24px" />
                              <p>Vijay Ananth</p>
                            </div>

                            <Icon
                              icon="three-dot"
                              className="comments-section__user-icon"
                            />
                          </div>
                          <div className="comments-section__time">
                            <div className="comments-section__time-time">
                              <Icon icon="clock" />
                              <p>03:42</p>
                            </div>
                            <p className="comments-section__time-sec">
                              40 sec ago
                            </p>
                          </div>
                          <div className="comments-section__text">
                            <p>
                              The view of the frame is misaligned The view of
                              the frame is misaligned
                            </p>
                          </div>
                          <hr className="dotted-line" />
                          <div className="comments-section__reply-resolve">
                            <div className="comments-section__reply">
                              <Icon icon="resolve-check" />
                              <p>Resolve</p>
                            </div>
                            <div className="comments-section__resolve">
                              <Icon icon="comment-reply" className="svg-icon" />
                              <p>Reply</p>
                            </div>
                          </div>
                        </div>
                        <div className="comments-section__comment">
                          <div className="comments-section__user">
                            <div className="comments-section__user-name">
                              <img src={UserImg} width="24px" height="24px" />
                              <p>Vijay Ananth</p>
                            </div>

                            <Icon
                              icon="three-dot"
                              className="comments-section__user-icon"
                            />
                          </div>
                          <div className="comments-section__time">
                            <div className="comments-section__time-time">
                              <Icon icon="clock" />
                              <p>03:42</p>
                            </div>
                            <p className="comments-section__time-sec">
                              40 sec ago
                            </p>
                          </div>
                          <div className="comments-section__text">
                            <p>
                              The view of the frame is misaligned The view of
                              the frame is misaligned
                            </p>
                          </div>
                          <hr className="dotted-line" />
                          <div className="comments-section__reply-resolve">
                            <div className="comments-section__reply">
                              <Icon icon="resolve-check" />
                              <p>Resolve</p>
                            </div>
                            <div className="comments-section__resolve">
                              <Icon icon="comment-reply" className="svg-icon" />
                              <p>Reply</p>
                            </div>
                          </div>
                        </div>
                        <div className="comments-section__comment">
                          <div className="comments-section__user">
                            <div className="comments-section__user-name">
                              <img src={UserImg} width="24px" height="24px" />
                              <p>Vijay Ananth</p>
                            </div>

                            <Icon
                              icon="three-dot"
                              className="comments-section__user-icon"
                            />
                          </div>
                          <div className="comments-section__time">
                            <div className="comments-section__time-time">
                              <Icon icon="clock" />
                              <p>03:42</p>
                            </div>
                            <p className="comments-section__time-sec">
                              40 sec ago
                            </p>
                          </div>
                          <div className="comments-section__text">
                            <p>
                              The view of the frame is misaligned The view of
                              the frame is misaligned
                            </p>
                          </div>
                          <hr className="dotted-line" />
                          <div className="comments-section__reply-resolve">
                            <div className="comments-section__reply">
                              <Icon icon="resolve-check" />
                              <p>Resolve</p>
                            </div>
                            <div className="comments-section__resolve">
                              <Icon icon="comment-reply" className="svg-icon" />
                              <p>Reply</p>
                            </div>
                          </div>
                        </div>
                        <div className="comments-section__comment">
                          <div className="comments-section__user">
                            <div className="comments-section__user-name">
                              <img src={UserImg} width="24px" height="24px" />
                              <p>Vijay Ananth</p>
                            </div>

                            <Icon
                              icon="three-dot"
                              className="comments-section__user-icon"
                            />
                          </div>
                          <div className="comments-section__time">
                            <div className="comments-section__time-time">
                              <Icon icon="clock" />
                              <p>03:42</p>
                            </div>
                            <p className="comments-section__time-sec">
                              40 sec ago
                            </p>
                          </div>
                          <div className="comments-section__text">
                            <p>
                              The view of the frame is misaligned The view of
                              the frame is misaligned
                            </p>
                          </div>
                          <hr className="dotted-line" />
                          <div className="comments-section__reply-resolve">
                            <div className="comments-section__reply">
                              <Icon icon="resolve-check" />
                              <p>Resolve</p>
                            </div>
                            <div className="comments-section__resolve">
                              <Icon icon="comment-reply" className="svg-icon" />
                              <p>Reply</p>
                            </div>
                          </div>
                        </div>
                        <div className="comments-section__comment">
                          <div className="comments-section__user">
                            <div className="comments-section__user-name">
                              <img src={UserImg} width="24px" height="24px" />
                              <p>Vijay Ananth</p>
                            </div>

                            <Icon
                              icon="three-dot"
                              className="comments-section__user-icon"
                            />
                          </div>
                          <div className="comments-section__time">
                            <div className="comments-section__time-time">
                              <Icon icon="clock" />
                              <p>03:42</p>
                            </div>
                            <p className="comments-section__time-sec">
                              40 sec ago
                            </p>
                          </div>
                          <div className="comments-section__text">
                            <p>
                              The view of the frame is misaligned The view of
                              the frame is misaligned
                            </p>
                          </div>
                          <hr className="dotted-line" />
                          <div className="comments-section__reply-resolve">
                            <div className="comments-section__reply">
                              <Icon icon="resolve-check" />
                              <p>Resolve</p>
                            </div>
                            <div className="comments-section__resolve">
                              <Icon icon="comment-reply" className="svg-icon" />
                              <p>Reply</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                      <Icon icon="version-filter" className="svg-icon" />
                      <Icon icon="version-add" className="svg-icon" />
                      <Icon icon="version-close" className="svg-icon" />
                    </div>

                    <div className="version-control__versions">
                      <ul className="version-control__version-list">
                        <li className="version-control__version-list-item">
                          <Icon
                            icon="step-progress"
                            className="step-progress"
                          />
                          <span>Current version</span>
                        </li>
                        <li className="version-control__version-list-item">
                          <Icon
                            icon="step-progress"
                            className="step-progress"
                          />
                          <span>20 autosave version</span>
                        </li>
                      </ul>
                      <div className="version-control__version-time">
                        <li>
                          <p className="time">Versions-1</p>
                          <div className="version_userdetail">
                            <img src={UserImg} width="18px" height="17px" />
                            <p className="name">Vijay Ananth</p>
                          </div>
                          <div className="version_userdetail">
                            <img src={UserImg} width="18px" height="17px" />
                            <p className="name">Subu</p>
                          </div>
                        </li>
                        <li>
                          <p className="time">8:05 PM</p>
                          <div className="version_userdetail">
                            <img src={UserImg} width="18px" height="17px" />
                            <p className="name">Vijay Ananth</p>
                          </div>
                          <div className="version_userdetail">
                            <img src={UserImg} width="18px" height="17px" />
                            <p className="name">Subu</p>
                          </div>
                        </li>
                        <li>
                          <p className="time">8:05 PM</p>
                          <div className="version_userdetail">
                            <img src={UserImg} width="18px" height="17px" />
                            <p className="name">Vijay Ananth</p>
                          </div>
                          <div className="version_userdetail">
                            <img src={UserImg} width="18px" height="17px" />
                            <p className="name">Subu</p>
                          </div>
                        </li>
                      </div>
                    </div>
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
