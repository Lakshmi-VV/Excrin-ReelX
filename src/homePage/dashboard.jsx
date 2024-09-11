import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Icon from "../components/Icons.jsx";
import Img1 from "../assets/images/img1.png";
import Img2 from "../assets/images/img2.png";
import Img3 from "../assets/images/img3.png";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend, Title);
import Modal from "../components/Modal.jsx";
import NewSpacePopup from "../components/NewSpacePopup.jsx";
import UploadAssets from "../components/UploadAssets.jsx";
import { useContext } from "react";
import logoLight from "../assets/images/logo-light.png";
import logoDark from "../assets/images/logo-dark.png";
import { ThemeContext } from "../contexts/themeContext.jsx";

function Dashboard() {
  const [activeMenuItem, setActiveMenuItem] = useState("dashboard");
  const [projectName, setProjectName] = useState("");
  const [activeWorkspace, setActiveWorkspace] = useState(null);
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  const [workspaces, setWorkspaces] = useState([
    {
      id: 1,
      name: "Demo",
      assets: 2,
      color: "#e9c64a",
      size: 100,
      comments: 0,
      files: [
        {
          id: 1,
          title: "SV Sports.mov",
          modified: "14 Sep",
          created: "29-Mar-2024",
          comments: 4,
          image: Img1,
        },
        {
          id: 5,
          title: "SV Sports.mov",
          modified: "17 Sep",
          created: "29-Mar-2024",
          comments: 4,
          image: Img1,
        },
      ],
    },
    {
      id: 2,
      name: "ProjectX",
      assets: 12,
      color: "#18b6aa",
      size: 550,
      comments: 2,
      files: [
        {
          id: 2,
          title: "Aitoools Promo.mov",
          modified: "19 June",
          created: "29-Mar-2024",
          comments: 4,
          image: Img2,
        },
        {
          id: 3,
          title: "Framer Tuts.mov",
          modified: "19 July",
          created: "29-Mar-2024",
          comments: 4,
          image: Img3,
        },
        {
          id: 6,
          title: "Framer Tuts.mov",
          modified: "22 Aug",
          created: "29-Mar-2024",
          comments: 4,
          image: Img2,
        },
      ],
    },
    {
      id: 3,
      name: "PantomFX",
      assets: 20,
      color: "#ac4bfb",
      size: 500,
      comments: 0,
      files: [
        {
          id: 4,
          title: "Coderapper .mov",
          modified: "14 Sep",
          created: "29-Mar-2024",
          comments: 4,
          image: Img3,
        },
      ],
    },
  ]);
  const [view, setView] = useState("list");
  const [upgradeStorage, setUpgardeStorage] = useState("5.0");
  const [step, setStep] = useState(1);
  const [newWorkspacePopup, setNewWorkspacePopup] = useState(false);
  const [uploadAssetsPopup, setUploadAssetsPopup] = useState(false);
  const [error, setError] = useState("");

  const [viewSort, setViewSort] = useState("newest");
  const location = useLocation();
  const username = location.state?.username;

  const handleNewWorkspaceModal = () => {
    setStep(1);
    setNewWorkspacePopup(true);
  };

  const handleUploadAssetsModal = () => {
    setUploadAssetsPopup(true);
  };

  const handleProjectNameChange = (name) => {
    setProjectName(name);
    if (name.trim() !== "") {
      setError("");
    }
  };

  const handleCreateWorkspace = () => {
    if (projectName.trim() === "") {
      setError("Project name is required.");
      return;
    }
    const colors = ["#ea4335", "#18b6aa", "#ac4bfb", "#e9c64a"];
    const newWorkspace = {
      id: workspaces.length + 1,
      name: projectName,
      assets: 0,
      size: 0,
      color: colors[Math.floor(Math.random() * colors.length)],
      files: [],
    };
    setWorkspaces([...workspaces, newWorkspace]);
    setStep(2);
    setProjectName("");
  };

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    if (menuItem === "dashboard") {
      setActiveWorkspace(null);
    }
  };
  const handleWorkspaceClick = (workspace) => {
    setActiveWorkspace(workspace);
    setActiveMenuItem("workspace");
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const size = tooltipItem.raw;
            return `${size} MB`;
          },
        },
      },
    },
  };
  const data = {
    labels: workspaces.map((workspace) => workspace.name),
    datasets: [
      {
        label: "Size",
        data: workspaces.map((workspace) => workspace.size),
        backgroundColor: workspaces.map((workspace) => workspace.color),
        borderColor: workspaces.map((workspace) => workspace.color),
        // borderColor: "white",
        // borderRadius: "20",
      },
    ],
  };

  return (
    <>
      <div className="header">
        {isDarkTheme ? (
          <img src={logoDark} height={"32px"} />
        ) : (
          <img src={logoLight} height={"32px"} />
        )}
        <div className="header-inputfield">
          <Icon icon="search-icon" />
          <input type="text" placeholder="Search files" />
        </div>
        <div className="header__theme-help">
          <div className="header-theme">
            {isDarkTheme ? (
              <Icon icon="sun" onClick={toggleTheme} />
            ) : (
              <Icon icon="moon" onClick={toggleTheme} />
            )}
          </div>
          <div className="header-userinitial">
            {username ? username.charAt(0) : "!"}
          </div>
        </div>
      </div>

      <div className="dashboard-container">
        <div className="projects-menu">
          <div className="menu-heading">
            <p>Projects</p>
          </div>

          <div className="project-menu-items">
            <div
              className={`menu-item ${
                activeMenuItem === "dashboard" ? "clicked" : ""
              }`}
              onClick={() => handleMenuItemClick("dashboard")}
            >
              <Icon icon="dashboard" className="dashboard-svg-icon" />
              <p
                className={` ${
                  activeMenuItem === "dashboard" ? "clicked" : ""
                }`}
              >
                Dashboard
              </p>
            </div>
            <div className="menu-item">
              <Icon icon="archive" className="dashboard-svg-icon" />
              <p>Archive</p>
            </div>
          </div>

          <div className="menu-heading">
            <p>Workspace</p>
          </div>

          <div className="workspace-menu-items">
            {workspaces.map((workspace) => (
              <div
                key={workspace.id}
                className={`menu-item ${
                  activeWorkspace?.id === workspace.id ? "clicked" : " "
                }`}
                onClick={() => handleWorkspaceClick(workspace)}
              >
                <div
                  className={`work-icon`}
                  style={{ backgroundColor: workspace.color }}
                >
                  <p>{workspace.name.charAt(0)}</p>
                </div>
                <p
                  className={`${
                    activeWorkspace?.id === workspace.id ? "clicked" : " "
                  }`}
                >
                  {workspace.name}
                </p>
              </div>
            ))}
            <div
              className={`new-menu-item ${newWorkspacePopup ? "clicked" : ""}`}
              onClick={() => {
                handleNewWorkspaceModal();
              }}
            >
              <Icon icon="new-menu" className="dashboard-svg-icon" />
              <p>New Workspace</p>

              <span>⌘N</span>
            </div>

            {newWorkspacePopup && (
              <Modal open={setNewWorkspacePopup}>
                <NewSpacePopup
                  projectName={projectName}
                  handleProjectNameChange={handleProjectNameChange}
                  handleCreateWorkspace={handleCreateWorkspace}
                  step={step}
                  error={error}
                />
              </Modal>
            )}
          </div>
          <div className="logout-menu">
            <Icon icon="archive" className="dashboard-svg-icon" />
            <Link to="/" className="link-button">
              <div className="logout-text">
                <p>Logout</p>
              </div>
            </Link>

            <Icon icon="next" className="dashboard-svg-icon" />
          </div>
        </div>

        {activeMenuItem === "dashboard" && (
          <>
            <div className="dashboarddiv">
              <div className="welcome-msg">
                <p className="dashboard-title">Dashboard</p>
                <p className="greeting">
                  Hey {username ? username : "User"} ! Welcome back
                </p>
              </div>
              <div className="dashboard-folders">
                {workspaces.map((workspace) => (
                  <div key={workspace.id} className="dashboard-folder">
                    <div className="dashboard-folder-icon">
                      <div className="folder-icon">
                        <Icon icon="folder" className="svg-icon" />
                      </div>

                      <Icon icon="three-dot" className="svg-icon" />
                    </div>
                    <div className="dashboard-folder-name-assets">
                      <div className="name">
                        <p> {workspace.name}</p>

                        {workspace.comments > 0 && (
                          <p className="comments"> {workspace.comments}</p>
                        )}
                      </div>
                      <p className="assets">{workspace.assets} Assets</p>
                    </div>
                    <div className="progress-bar-space">
                      <div className="progress-bar">
                        <div
                          className="progress"
                          style={{
                            width: `${(workspace.size / 1000) * 100}%`,
                          }}
                        ></div>
                      </div>

                      <div className="progress-space">
                        <p>1.0 GB</p>
                        <p>{workspace.size} MB </p>
                      </div>
                    </div>
                    <div className="folder-border"></div>
                    <div className="folder-view">
                      <p>View</p>
                      <Icon icon="next" className="svg-icon" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="recent-files">
                <div className="recent-files-view ">
                  <p>Recent Files</p>
                  <div className="grid-list-view">
                    <div
                      onClick={() => setView("grid")}
                      className={`${view === "grid" ? "active" : ""}`}
                    >
                      <Icon icon="grid-view" className="svg-icon" />
                    </div>
                    <div
                      onClick={() => setView("list")}
                      className={`${view === "list" ? "active" : ""}`}
                    >
                      <Icon icon="list-view" className="svg-icon" />
                    </div>
                  </div>
                </div>
                <div
                  className={`recent-files-heading ${
                    view === "grid" ? "recent-files-heading-grid" : ""
                  }`}
                >
                  <p className="assest-name">Asset name</p>
                  <div className="heading-icon">
                    <p>Last modified</p>
                    <Icon className="svg-icon" icon="up-arrow" />
                  </div>
                  <div className="heading-icon">
                    <p>Created on</p>
                    <Icon className="svg-icon" icon="up-arrow" />
                  </div>
                  <div className="comment">
                    <p>Comments</p>
                  </div>
                </div>
                <div className={`files ${view === "grid" ? "grid" : "list"}`}>
                  {workspaces.map((workspace) =>
                    workspace.files.map((file) => (
                      <Link
                        to="/artboard"
                        className="link-button"
                        state={file.title}
                      >
                        <div
                          key={file.id}
                          className={`file ${
                            view === "grid" ? "file-grid" : ""
                          }`}
                        >
                          <div className="file-img">
                            <img src={file.image} />
                            <div
                              className={`work-icon ${workspace.name.toLowerCase()} hover-icon`}
                            >
                              {workspace.name.charAt(0)}
                            </div>
                          </div>
                          {view === "list" && (
                            <>
                              <div className="file-title">
                                <p>{file.title}</p>
                              </div>
                              <div className="file-edited">
                                <p>Edited on {file.modified}</p>
                              </div>
                              <div className="file-created">
                                <p>{file.created}</p>
                              </div>
                              <div className="file-comment">
                                <Icon
                                  className="svg-icon"
                                  icon="folder-comment"
                                />
                                <p>{file.comments} Comments</p>
                              </div>
                              <Icon icon="three-dot" className="svg-icon" />
                            </>
                          )}
                          {view === "grid" && (
                            <>
                              <div className="file-title">
                                <p>{file.title}</p>
                                <Icon icon="three-dot" className="svg-icon" />
                              </div>
                              <div className="file-edited-comment">
                                <div className="file-edited">
                                  <div>
                                    <p>Edited on {file.modified}</p>
                                  </div>

                                  <div
                                    className={`work-icon-grid ${workspace.name.toLowerCase()}`}
                                  >
                                    {workspace.name.charAt(0)}
                                  </div>
                                </div>

                                <div className="file-comment">
                                  <Icon
                                    className="svg-icon"
                                    icon="folder-comment"
                                  />
                                  <p>{file.comments}</p>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </Link>
                    ))
                  )}
                </div>
              </div>
            </div>

            <div className="storage-details">
              <div className="storage-title">Storage Details</div>
              <div className="storage-content">
                <div className="size-chart">
                  <Doughnut data={data} options={options} />
                </div>
                <div className="total-size">
                  {(
                    workspaces.reduce((acc, workspace) => {
                      const size = Number(workspace.size) || 0;
                      return acc + size;
                    }, 0) / 1024
                  ).toFixed(2)}{" "}
                  GB of 2 GB
                </div>

                <div className="workspace-size">
                  {workspaces.map((workspace) => (
                    <>
                      <div key={workspace.id}>
                        <span
                          className={`size-icon ${workspace.name.toLowerCase()}`}
                        ></span>
                        <span className="name">{workspace.name}</span>
                        <span className="size">{workspace.size} MB</span>
                      </div>
                      <div className="border-storage"></div>
                    </>
                  ))}
                </div>

                <div className="upgrade">
                  <div className="left-upgrade">
                    <Icon icon="left-upgrade" className="upgrade-svg-icon" />
                  </div>
                  <div className="content">
                    <p>Upgrade storage over {upgradeStorage} GB</p>
                    <button>Upgrade</button>
                  </div>
                  <div className="right-upgrade">
                    <Icon icon="right-upgrade" className="upgrade-svg-icon" />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeMenuItem === "workspace" && activeWorkspace && (
          <>
            {activeWorkspace.files.length === 0 && (
              <div className="newworkspace">
                <div className="newworkspace-header">
                  <div
                    className="newworkspace-header__letter"
                    style={{ backgroundColor: activeWorkspace.color }}
                  >
                    {activeWorkspace.name.charAt(0)}
                  </div>
                  <div className="newworkspace-header__name">
                    {activeWorkspace.name}
                  </div>
                  <div
                    className="newworkspace-header__upload"
                    onClick={handleUploadAssetsModal}
                  >
                    <Icon icon="assest-upload" className="svg-icon" />
                    <p className="newworkspace-header__upload-text">Upload</p>
                  </div>
                  <div className="newworkspace-header__share">
                    <button className="newworkspace-header__share-button">
                      Share
                    </button>
                  </div>
                  <div className="newworkspace-header__comment">
                    <Icon icon="workspace-comment" className="svg-icon" />
                  </div>
                  <div className="newworkspace-header__option-icon">
                    <Icon icon="three-dothole" className="svg-icon" />
                  </div>
                </div>

                <div className="welcome-message">
                  <div className="welcome-message__greeting">
                    <p className="welcome-message__greeting-text">Hey !! 👋</p>
                    <p className="welcome-message__greeting-welcome">
                      Welcome {activeWorkspace.name}
                    </p>
                    <p className="welcome-message__greeting-instruction">
                      Choose an action on the right to get started
                    </p>
                  </div>

                  <div className="welcome-message__actions">
                    <div className="welcome-message__action">
                      <div
                        className="welcome-message__action-icon"
                        onClick={handleUploadAssetsModal}
                      >
                        <Icon icon="assest-upload" className="svg-icon" />
                      </div>
                      <div className="welcome-message__action-details">
                        <p className="welcome-message__action-title">
                          Upload Assets
                        </p>
                        <p className="welcome-message__action-description">
                          Create and manage Assets at ease
                        </p>
                      </div>
                    </div>
                    {uploadAssetsPopup && (
                      <Modal open={setUploadAssetsPopup}>
                        <UploadAssets />
                      </Modal>
                    )}

                    <div className="welcome-message__action">
                      <div className="welcome-message__action-icon">
                        <Icon icon="app-tour" className="svg-icon" />
                      </div>
                      <div className="welcome-message__action-details">
                        <p className="welcome-message__action-title">
                          App Tour
                        </p>
                        <p className="welcome-message__action-description">
                          Take a tour for a complete experience of the app
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeWorkspace.files.length > 0 && (
              <div className="workspace-files">
                <div className="newworkspace-header">
                  <div
                    className={`newworkspace-header__letter `}
                    style={{ backgroundColor: activeWorkspace.color }}
                  >
                    {activeWorkspace.name.charAt(0)}
                  </div>
                  <div className="newworkspace-header__name">
                    {activeWorkspace.name}
                  </div>
                  <div
                    className="newworkspace-header__upload"
                    onClick={handleUploadAssetsModal}
                  >
                    <Icon icon="assest-upload" className="svg-icon" />
                    <p className="newworkspace-header__upload-text">Upload</p>
                  </div>
                  <div className="newworkspace-header__share">
                    <button className="newworkspace-header__share-button">
                      Share
                    </button>
                  </div>
                  <div className="newworkspace-header__comment">
                    <Icon icon="workspace-comment" className="svg-icon" />
                  </div>
                  <div className="newworkspace-header__option-icon">
                    <Icon icon="three-dothole" className="svg-icon" />
                  </div>
                </div>
                {uploadAssetsPopup && (
                  <Modal open={setUploadAssetsPopup}>
                    <UploadAssets />
                  </Modal>
                )}
                <div className="workspace-files-view ">
                  <p>Assets</p>

                  <div className="dropdown-container">
                    <label>Sort :</label>
                    <select
                      value={viewSort}
                      onChange={(e) => setViewSort(e.target.value)}
                    >
                      <option value="newest">Last Modified</option>
                      <option value="oldest">First Modified</option>
                    </select>
                  </div>

                  <div className="grid-list-view">
                    <div
                      onClick={() => setView("grid")}
                      className={`${view === "grid" ? "active" : ""}`}
                    >
                      {" "}
                      <Icon icon="grid-view" className="svg-icon" />{" "}
                    </div>
                    <div
                      onClick={() => setView("list")}
                      className={`${view === "list" ? "active" : ""}`}
                    >
                      {" "}
                      <Icon icon="list-view" className="svg-icon" />
                    </div>
                  </div>
                </div>
                <div className="workspace-files-assetlist">
                  <div
                    className={`recent-files-heading ${
                      view === "grid" ? "recent-files-heading-grid" : ""
                    }`}
                  >
                    <div className="assest-name">
                      <p>Asset name</p>
                    </div>

                    <div className="heading-icon last-modified">
                      <p>Last modified</p>
                      <Icon className="svg-icon" icon="up-arrow" />
                    </div>
                    <div className="heading-icon created">
                      <p>Created on</p>
                      <Icon className="svg-icon" icon="up-arrow" />
                    </div>
                    <div className="comment">
                      <p>Comments</p>
                    </div>
                  </div>
                  <div
                    className={`files ${
                      view === "grid" ? "workspace-grid" : "workspace-list"
                    }`}
                  >
                    {activeWorkspace.files
                      .sort((a, b) => {
                        if (viewSort === "newest") {
                          return new Date(b.modified) - new Date(a.modified);
                        } else if (viewSort === "oldest") {
                          return new Date(a.modified) - new Date(b.modified);
                        }
                      })
                      .map((file) => (
                        <div
                          key={file.id}
                          className={`file ${
                            view === "grid" ? "file-grid" : ""
                          }`}
                        >
                          <div className="file-img">
                            <img src={file.image} />
                            <div
                              className={`work-icon ${activeWorkspace.name.toLowerCase()} hover-icon`}
                            >
                              {activeWorkspace.name.charAt(0)}
                            </div>
                          </div>
                          {view === "list" && (
                            <>
                              <div className="file-title">
                                <p>{file.title}</p>
                              </div>
                              <div className="file-editedlist">
                                <p>Edited on {file.modified}</p>
                              </div>
                              <div className="file-createdlist">
                                <p>{file.created}</p>
                              </div>
                              <div className="file-commentlist">
                                <Icon
                                  className="svg-icon"
                                  icon="folder-comment"
                                />
                                <p>{file.comments} Comments</p>
                              </div>
                              <Icon icon="three-dot" className="svg-icon" />
                            </>
                          )}
                          {view === "grid" && (
                            <>
                              <div className="file-title">
                                <p>{file.title}</p>
                                <Icon icon="three-dot" className="svg-icon" />
                              </div>
                              <div className="file-edited-comment">
                                <div className="file-edited">
                                  <p>Edited on {file.modified}</p>
                                  <p
                                    className="asset-grid-icon"
                                    style={{
                                      backgroundColor: activeWorkspace.color,
                                    }}
                                  >
                                    {activeWorkspace.name.charAt(0)}
                                  </p>
                                </div>
                                <div className="file-comment">
                                  <Icon
                                    className="svg-icon"
                                    icon="folder-comment"
                                  />
                                  <p>{file.comments}</p>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Dashboard;
