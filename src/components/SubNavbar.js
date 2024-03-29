import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css"

import {
  BrandIcon,
  RecentIcon,
  MovieIcon,
  SeriesIcon,
  BooksIcon,
  BackIcon,
  EditIcon,
  ProfileIcon,
  DropDownIcon,
  TextSearchIcon,
  CharacterSearchIcon,
  LocationSearchIcon,
  ShareIcon,
  HeadPhoneIcon,
  ScriptView,
  OneWindow,
  PageViewIcon,
  ScriptViewIcon,
  InfinityPageViewIcon,
  SplitViewIcon,
  OnePageViewIcon,
  TimesIcon,
  DownloadRIghtIcon,
  SettingIcon,
  MicOffIcon,
  CollapseIcon,
  AlertTriIcon,
  TalkIcon
} from "./Svg";

import { AuthContext } from "../pages/context/AuthContext";

export default function SubNavbar(props) {
  const location = useLocation();

  if (location.pathname === "/dashboard") {
    return <DashboardSubNavbar />;
  }

  if (location.pathname === "/new-project") {
    return <NewProjectSubNavbar />;
  }

  if (location.pathname === "/edit-project") {
    return <EditSubNavbar />;
  }

  if (location.pathname === "/profile") {
    return <ProfileSubNavbar />;
  }
  if (location.pathname === "/workspace") {
    return <WorkSpaceNavbar />
  }
}

export const MainSubNavbar = () => {
  const { setIsAuthenticated } = React.useContext(AuthContext);
  const [openSubNav, setOpenSubNav] = React.useState(false);
  const [showLogoutModal, setShowLogoutModal] = React.useState(false);

  return (
    <div>
      <div className="dropdown">
        <div
          tabIndex="0"
          className=" w-14 h-14 !inline-flex flex flex-row p-4 h-full hover:bg-[#1F1F1F] cursor-pointer"
          onClick={() => {
            setOpenSubNav(true);
          }}
        >
          <BrandIcon />
        </div>

        {openSubNav ? (
          <ul
            tabIndex="0"
            className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content ml-2 mt-2 shadow bg-[#161616] border border-[#2B2B2B] w-[160px] h-80 rounded-[4px]"
          >
            <Link
              className="flex flex-row px-2 py-1.5 h-8 font-extrabold text-center text-white text-[9px] leading-5 border-b border-[#2B2B2B] hover:bg-[#5D5D5D]"
              to="/new-project"
            >
              New Project
            </Link>
            <li
              className="flex flex-row px-2 py-1.5 h-8 font-extrabold text-center text-white text-[9px] leading-5 border-b border-[#2B2B2B] hover:bg-[#5D5D5D]"
              onClick={() => {
                setOpenSubNav(false);
              }}
            >
              Continue Writing
            </li>
            <li
              className="flex flex-row px-2 py-1.5 h-8 font-extrabold text-center text-white text-[9px] leading-5 border-b border-[#2B2B2B] hover:bg-[#5D5D5D]"
              onClick={() => {
                setOpenSubNav(false);
              }}
            >
              Close Window
            </li>
            <li
              className="flex flex-row px-2 py-1.5 h-8 font-extrabold text-center text-white text-[9px] leading-5 border-b border-[#2B2B2B] hover:bg-[#5D5D5D]"
              onClick={() => {
                setOpenSubNav(false);
              }}
            >
              Close Tab
            </li>
            <li
              className="flex flex-row px-2 py-1.5 h-8 font-extrabold text-center text-white text-[9px] leading-5 border-b border-[#2B2B2B] hover:bg-[#5D5D5D]"
              onClick={() => {
                setOpenSubNav(false);
              }}
            >
              Reopen Closed Tab
            </li>
            <li
              className="flex flex-row px-2 py-1.5 h-8 font-extrabold text-center text-white text-[9px] leading-5 border-b border-[#2B2B2B] hover:bg-[#5D5D5D]"
              onClick={() => {
                setOpenSubNav(false);
              }}
            >
              Interface Scale
            </li>
            <li
              className="flex flex-row px-2 py-1.5 h-8 font-extrabold text-center text-white text-[9px] leading-5 border-b border-[#2B2B2B] hover:bg-[#5D5D5D]"
              onClick={() => {
                setOpenSubNav(false);
              }}
            >
              About Imaginarium
            </li>
            <li
              className="flex flex-row px-2 py-1.5 h-8 font-extrabold text-center text-white text-[9px] leading-5 border-b border-[#2B2B2B] hover:bg-[#5D5D5D]"
              onClick={() => {
                setOpenSubNav(false);
              }}
            >
              Check for Updates
            </li>
            <li
              className="flex flex-row px-2 py-1.5 h-8 font-extrabold text-center text-white text-[9px] leading-5 border-b border-[#2B2B2B] hover:bg-[#5D5D5D]"
              onClick={() => {
                setShowLogoutModal(true);
                setOpenSubNav(false);
              }}
            >
              Log Out
            </li>
            <li
              className="flex flex-row px-2 py-1.5 h-8 font-extrabold text-center text-white text-[9px] leading-5 border-b border-[#2B2B2B] hover:bg-[#5D5D5D]"
              onClick={() => {
                setOpenSubNav(false);
              }}
            >
              Exit
            </li>
          </ul>
        ) : null}
      </div>

      {showLogoutModal ? (
        <div className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] z-10 absolute flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-auto bg-[#2B2B2B] border border-[#161616] rounded-md">
          <div className="edit-modal-header flex flex-row justify-between items-center py-[14px] w-full h-8 border-b border-[#161616]">
            <label className="ml-[24px] text-[9px] text-white font-extrabold leading-5 tracking-[.21em]">
              LOGING OUT
            </label>
            <button
              className="mr-[10px] hover:bg-[#4F4F4F]"
              onClick={() => {
                setShowLogoutModal(false);
              }}
            >
              <img
                className="w-[20px] h-[20px]"
                src="assets/img/dashboard/close.png"
                alt="close"
              />
            </button>
          </div>
          <div className="edit-modal-content px-[24px] py-4 border-b border-[#161616]">
            <label className="text-white text-[12px] leading-5">
              You are about to sign out of your account. Confirm the action.
            </label>
          </div>
          <div className="flex justify-end edit-modal-footer py-4 px-[24px]">
            <button
              className="mr-4 flex justify-center items-center rounded-md px-[6px] text-center w-28 h-8 text-white bg-transparent border border-[#404040] font-extrabold text-[10px] tracking-widest leading-5 hover:bg-[#404040]"
              onClick={() => {
                setShowLogoutModal(false);
              }}
            >
              CANCEL
            </button>
            <Link
              className="cursor-pointer	flex justify-center items-center rounded-md px-[6px] text-center w-28 h-8 text-white bg-[#DD5E5E] font-extrabold text-[10px] tracking-widest leading-5 hover:opacity-80"
              to="/login"
              onClick={() => {
                setIsAuthenticated(false);
                localStorage.removeItem("auth");
              }}
            >
              LOG OUT
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export const DashboardSubNavbar = () => {
  function toggleMenu() {
    var menu = document.getElementById("menu");

    menu.classList.toggle("hidden");
    menu.classList.toggle("w-auto");
    menu.classList.toggle("h-auto");
  }

  const [projectsType, setProjectsType] = React.useState("ALL PROJECTS");
  const [openProjectsType, setOpenProjectsType] = React.useState(false);
  const [checkedShowFinish, setCheckedShowFinsh] = React.useState(false);
  const [projectType, setProjectType] = React.useState(1);

  return (
    <div className="flex w-full items-center justify-center h-14 bg-[#0E0E0E]">
      <MainSubNavbar />

      <div className="w-full flex items-center justify-between">
        <div
          id="menu"
          className="hidden sm:visible sm:fixed sm:left-14 sm:top-28 z-50 sm:w-[115px] sm:bg-[#1e1e1e] sm:rounded-tr-lg sm:rounded-bl-lg
          md:visible md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:top-0 md:left-0  "
        >
          <button
            className={
              "!inline-flex flex flex-row p-4 space-x-2 h-full cursor-pointer hover:bg-[#1F1F1F] focus:bg-black-rgba outline-none	" +
              +(projectType === 1 ? "active" : null)
            }
            onClick={() => {
              setProjectType(1);
            }}
          >
            <RecentIcon />
            <span className="text-white">Recent</span>
          </button>
          <button
            className={
              "!inline-flex flex flex-row p-4 space-x-2 h-full cursor-pointer hover:bg-[#1F1F1F] focus:bg-black-rgba outline-none " +
              (projectType === 2 ? "active" : null)
            }
            onClick={() => {
              setProjectType(2);
            }}
          >
            <MovieIcon />
            <span className="text-white">Movies</span>
          </button>
          <button
            className={
              "!inline-flex flex flex-row p-4 space-x-2 h-full cursor-pointer hover:bg-[#1F1F1F] focus:bg-black-rgba outline-none " +
              (projectType === 3 ? "active" : null)
            }
            onClick={() => {
              setProjectType(3);
            }}
          >
            <SeriesIcon />
            <span className="text-white">Series</span>
          </button>
          <button
            className={
              "!inline-flex flex flex-row p-4 space-x-2 h-full cursor-pointer hover:bg-[#1F1F1F] focus:bg-black-rgba outline-none " +
              (projectType === 4 ? "active" : null)
            }
            onClick={() => {
              setProjectType(4);
            }}
          >
            <BooksIcon />
            <span className="text-white">Books</span>
          </button>
        </div>
        <div className="flex items-center md:hidden">
          <button
            className="text-white text-4xl font-bold opacity-70 hover:opacity-100 duration-300"
            onClick={() => {
              toggleMenu();
            }}
          >
            &#9776;
          </button>
        </div>

        <div className="flex items-center flex-row justify-between">
          <div className="flex items-center">
            <label className="mr-4 flex flex-row items-center font-extrabold text-white text-[9px] leading-5 cursor-pointer tracking-[.21em] uppercase">
              <input
                type="checkbox"
                className="mr-3 bg-[#0E0E0E] cursor-pointer 
        w-[14px] h-[14px] border border-[#404040] rounded-[4px] checked:bg-[#0A0A0A] hover:bg-[#0E0E0E] focus:bg-[#0A0A0A]"
                checked={checkedShowFinish}
                onChange={() => {
                  setCheckedShowFinsh(!checkedShowFinish);
                }}
              />
              Show finished projects
            </label>

            <div className="dropdown">
              <div
                tabIndex="0"
                className="mr-4 p-1.5 w-32 h-8 bg-[#161616] border border-[#404040] rounded-[4px]"
                onClick={() => {
                  setOpenProjectsType(true);
                }}
                name="projects"
                id="projects"
              >
                <div className="flex justify-between">
                  <label className="ml-1.5 font-extrabold text-center text-white text-[9px] leading-5">
                    {projectsType}
                  </label>

                  <button>
                    <DropDownIcon />
                  </button>
                </div>
              </div>

              {openProjectsType ? (
                <ul
                  tabIndex="0"
                  className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content mt-2 shadow bg-[#161616] border border-[#2B2B2B] w-32 h-24 rounded-[4px]"
                >
                  <li
                    className="flex flex-row px-2 py-1.5 h-8 font-extrabold text-center text-white text-[9px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                    onClick={() => {
                      setProjectsType("ALL PROJECTS");
                      setOpenProjectsType(false);
                    }}
                  >
                    ALL PROJECTS
                  </li>
                  <li
                    className="flex flex-row px-2 py-1.5 h-8 font-extrabold text-center text-white text-[9px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                    onClick={() => {
                      setProjectsType("YOUR PROJECTS");
                      setOpenProjectsType(false);
                    }}
                  >
                    YOUR PROJECTS
                  </li>
                  <li
                    className="flex flex-row px-2 py-1.5 h-8 font-extrabold text-center text-white text-[9px] leading-5 hover:bg-[#5D5D5D]"
                    onClick={() => {
                      setProjectsType("SHARED WITH YOU");
                      setOpenProjectsType(false);
                    }}
                  >
                    SHARED WITH YOU
                  </li>
                </ul>
              ) : null}
            </div>

            <Link
              className="mr-4 flex justify-center items-center rounded-md px-[6px] text-center w-28 h-8 text-white bg-gradient-to-r from-[#FEAC6D] to-[#AE61ED] font-extrabold text-[10px] tracking-widest leading-5 hover:opacity-80"
              to="/new-project"
            >
              NEW PROJECT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NewProjectSubNavbar = () => {
  return (
    <div className="flex w-full h-14 bg-neutral-840">
      <MainSubNavbar />
      <div className="w-full flex justify-between">
        <div>
          <Link
            className="!inline-flex flex flex-row p-4 space-x-2 h-full"
            to="/dashboard"
          >
            <BackIcon />
            <span className="text-white">Back</span>
          </Link>
          <div className="!inline-flex flex flex-row p-4 space-x-2 h-full hover:bg-[#1F1F1F] cursor-pointer">
            <EditIcon />
            <span className="text-white">New Project</span>
          </div>
        </div>
        <div className="flex items-center flex-row justify-between">
          <div className="flex items-center">
            <Link
              className="mr-7 flex justify-center items-center rounded-md px-[6px] text-center w-28 h-8 text-white bg-gradient-to-r from-[#FEAC6D] to-[#AE61ED] font-extrabold text-[10px] tracking-widest leading-5 hover:opacity-80"
              to="/new-project"
            >
              CREATE
            </Link>
          </div>
        </div>
      </div>

      {/* {currentSubNavMenu === 1 && <DashboardSubNavbar />} */}
    </div>
  );
};

export const EditSubNavbar = () => {
  return (
    <div className="flex w-full h-14 bg-neutral-840">
      <MainSubNavbar />
      <div className="w-full flex justify-between">
        <div>
          <Link
            className="!inline-flex flex flex-row p-4 space-x-2 h-full"
            to="/dashboard"
          >
            <BackIcon />
            <span className="text-white">Back</span>
          </Link>
          <div className="!inline-flex flex flex-row p-4 space-x-2 h-full hover:bg-[#1F1F1F] cursor-pointer">
            <EditIcon />
            <span className="text-white">Edit Project</span>
          </div>
        </div>
        <div className="flex items-center flex-row justify-between">
          <div className="flex items-center">
            <button className="mr-7 flex justify-center items-center rounded-md px-[6px] text-center w-28 h-8 text-white bg-gradient-to-r from-[#FEAC6D] to-[#AE61ED] font-extrabold text-[10px] tracking-widest leading-5 hover:opacity-80">
              SAVE
            </button>
          </div>
        </div>
      </div>

      {/* {currentSubNavMenu === 1 && <DashboardSubNavbar />} */}
    </div>
  );
};

export const ProfileSubNavbar = () => {
  const [showExportModal, setShowExportModal] = React.useState(false);
  const [projectType, setProjectType] = React.useState(
    "Microsoft Word (*.docx)"
  );
  const [showProject, setShowProject] = React.useState(false);

  return (
    <div className="flex w-full h-14 bg-neutral-840">
      <MainSubNavbar />
      <div className="w-full flex justify-between">
        <div>
          <Link
            className="!inline-flex flex flex-row p-4 space-x-2 h-full hover:bg-neutral-900 cursor-pointer"
            to="/dashboard"
          >
            <BackIcon />
            <span className="text-white">Back</span>
          </Link>
          <div className="!inline-flex flex flex-row p-4 space-x-2 h-full hover:bg-neutral-900 cursor-pointer active:bg-[#1F1F1F]">
            <ProfileIcon />
            <span className="text-white">Profile</span>
          </div>
        </div>
        <div className="flex items-center flex-row justify-between">
          <div className="flex items-center">
            <button
              className="mr-7 flex justify-center items-center rounded-md px-[6px] text-center w-28 h-8 text-white bg-[#1DAEFF] font-extrabold text-[10px] tracking-widest leading-5 hover:opacity-80"
              onClick={() => {
                setShowExportModal(true);
              }}
            >
              EXPORT
            </button>
          </div>
        </div>
      </div>
      {showExportModal ? (
        <>
          <div className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] z-10 fixed flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-auto bg-[#2B2B2B] border border-[#161616] rounded-md">
            <div className="edit-modal-header flex flex-row justify-between items-center py-[14px] w-full h-8 border-b border-[#161616]">
              <label className="ml-[24px] text-[9px] text-white font-extrabold leading-5 tracking-[.21em]">
                EXPORT PROJECT
              </label>
              <button
                className="mr-[10px] hover:bg-[#4F4F4F]"
                onClick={() => {
                  setShowExportModal(false);
                }}
              >
                <img
                  className="w-[20px] h-[20px]"
                  src="assets/img/dashboard/close.png"
                  alt="close"
                />
              </button>
            </div>
            <div className="edit-modal-content px-[24px] py-4 border-b border-[#161616]">
              <div className="flex flex-col">
                <div className="save">
                  <label className="flex text-white text-[9px] font-extrabold leading-5 tracking-[.21em]">
                    EXPORT AS
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="mt-1 px-2 py-1.5 w-full h-8 bg-[#161616] border border-[#404040] focus:border-white placeholder-[#5F5F5F] focus:outline-none rounded-md text-[12px] text-white"
                    placeholder="Enter name of archive"
                  />
                  <label className="flex mt-3 text-white text-[9px] font-extrabold leading-5 tracking-[.21em]">
                    WHERE TO SAVE
                  </label>
                  <div className="mt-1 flex justify-between items-center bg-[#161616] border border-[#404040] w-full h-8 rounded-md">
                    <label className="ml-2 text-[12px] leading-5 text-white">
                      Documents
                    </label>
                    <input type="file" id="save-path" className="" hidden />
                    <label className="cursor-pointer" htmlFor="save-path">
                      <img
                        className="mr-1.5"
                        src="assets/img/dashboard/folder.png"
                        alt="folder"
                      />
                    </label>
                  </div>

                  <label className="flex mt-3 text-white text-[9px] font-extrabold leading-5 tracking-[.21em]">
                    PROJECT FORMAT
                  </label>

                  <div className="flex w-full dropdown">
                    <div
                      tabIndex="0"
                      className="w-full h-8 bg-[#161616] border border-[#404040] rounded-[4px] flex items-center justify-between"
                      onClick={() => {
                        setShowProject(true);
                      }}
                      name="projects"
                      id="projects"
                    >
                      <label className="ml-2 text-center text-white text-[12px] leading-5">
                        {projectType}
                      </label>

                      <button className="mr-1.5">
                        <DropDownIcon />
                      </button>
                    </div>

                    {showProject ? (
                      <ul
                        tabIndex="0"
                        className="menu menu-compact dropdown-content mt-[40px] bg-[#161616] w-full h-[56px] mt-0 rounded-[4px]"
                      >
                        <li
                          className="bg-[#161616] flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border border-[#404040] hover:bg-[#5D5D5D]"
                          onClick={() => {
                            setProjectType("Microsoft Word Document (*.docx)");
                            setShowProject(false);
                          }}
                        >
                          Microsoft Word Document (*.docx)
                        </li>
                        <li
                          className="bg-[#161616] flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-x border-[#404040] hover:bg-[#5D5D5D]"
                          onClick={() => {
                            setProjectType("HTML Document (*.html)");
                            setShowProject(false);
                          }}
                        >
                          HTML Document (*.html)
                        </li>
                        <li
                          className="bg-[#161616] flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border border-[#404040] hover:bg-[#5D5D5D]"
                          onClick={() => {
                            setProjectType("Rich Text Format (*.rtf)");
                            setShowProject(false);
                          }}
                        >
                          Rich Text Format (*.rtf)
                        </li>
                        <li
                          className="bg-[#161616] flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-x border-[#404040] hover:bg-[#5D5D5D]"
                          onClick={() => {
                            setProjectType("Plain Text (*.txt)");
                            setShowProject(false);
                          }}
                        >
                          Plain Text (*.txt)
                        </li>
                        <li
                          className="bg-[#161616] flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border border-[#404040] hover:bg-[#5D5D5D]"
                          onClick={() => {
                            setProjectType("Text with Layout (*.txt)");
                            setShowProject(false);
                          }}
                        >
                          Text with Layout (*.txt)
                        </li>
                        <li
                          className="bg-[#161616] flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-x border-[#404040] hover:bg-[#5D5D5D]"
                          onClick={() => {
                            setProjectType("Avid Script-Based Editing (*.txt)");
                            setShowProject(false);
                          }}
                        >
                          Avid Script-Based Editing (*.txt)
                        </li>
                        <li
                          className="bg-[#161616] flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border border-[#404040] hover:bg-[#5D5D5D]"
                          onClick={() => {
                            setProjectType("Tab Delimited Dialogue (*.txt)");
                            setShowProject(false);
                          }}
                        >
                          Tab Delimited Dialogue (*.txt)
                        </li>
                      </ul>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end edit-modal-footer py-4 px-[24px]">
              <button
                className="cursor-pointer	flex justify-center items-center rounded-md px-[6px] text-center w-28 h-8 text-white bg-gradient-to-r from-[#FEAC6D] to-[#AE61ED] font-extrabold text-[10px] tracking-widest leading-5 hover:opacity-80"
                onClick={() => {
                  setShowExportModal(false);
                }}
              >
                SAVE
              </button>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export const WorkSpaceNavbar = () => {
  function toggleMenu() {
    var menu = document.getElementById("menu");

    menu.classList.toggle("hidden");
    menu.classList.toggle("w-auto");
    menu.classList.toggle("h-auto");
  }

  const [projectType, setProjectType] = React.useState(1);
  const [isOpenScript, setOpenScript] = React.useState(false);
  const [isOpenPage, setOpenPage] = React.useState(false);
  const [isHeaderPhoneModal, setHeaderPhoneModal] = React.useState(false);


  return (
    <div className="flex w-full h-14 bg-neutral-840 select-none">
      <MainSubNavbar />
      <div className="w-full flex items-center justify-between">
        <div
          id="menu"
          className="hidden sm:visible sm:fixed sm:left-14 sm:top-28 z-50 sm:bg-[#1e1e1e] sm:rounded-tr-lg sm:rounded-bl-lg
          md:visible md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:top-0 md:left-0  "
        >
          <button
            className={
              "!inline-flex flex flex-row p-4 space-x-2 h-full cursor-pointer  outline-none	items-center "
              + (projectType === 1 ? "bg-sky-900" : "bg-[#0E0E0E]")
            }
            onClick={() => {
              setProjectType(1);
            }}
          >
            <TextSearchIcon />
            <span className="text-white">Text</span>
          </button>
          <button
            className={
              "!inline-flex flex flex-row p-4 space-x-2 h-full cursor-pointer  outline-none items-cen+ter " +
              (projectType === 2 ? "bg-sky-900" : "bg-[#0E0E0E]")
            }
            onClick={() => {
              setProjectType(2);
            }}
          >
            <CharacterSearchIcon />
            <span className="text-white">Character</span>
          </button>
          <button
            className={
              "flex flex-row p-4 space-x-2 h-full cursor-pointer  outline-none items-center " +
              (projectType === 3 ? "bg-sky-900" : "bg-[#0E0E0E]")
            }
            onClick={() => {
              setProjectType(3);
            }}
          >
            <LocationSearchIcon />
            <span className="text-white">Locations</span>
          </button>
        </div>
        <div className="flex items-center md:hidden">
          <button
            className="text-white text-4xl font-bold opacity-70 hover:opacity-100 duration-300"
            onClick={() => {
              toggleMenu();
            }}
          >
            &#9776;
          </button>
        </div>
        <div className="flex items-center flex-row justify-center ">
          <div className="max-w-2xl text-white text-sm breadcrumbs">
            <ul>
              <li>John Wick Chapter 4</li>
              <li>Act 1</li>
              <li>Scene 1 - No Scene Title</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center flex-row justify-between">
          <div className="flex items-center gap-2">

            <div className="dropdown w-full">
              <div className="avatar placeholder" tabIndex="0" onClick={() => setOpenScript(true)}>
                <div className="bg-[#2b2b2b] text-white rounded w-10 cursor-pointer">
                  <span className="text-xs"><ScriptView /></span>
                </div>
              </div>
              {isOpenScript &&
                <ul
                  tabIndex="0"
                  className="list-none p-0 drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content mt-1 shadow bg-[#161616] border border-[#464646] w-40 max-h-fit rounded-[4px]"
                >
                  <button className="cursor-pointer flex flex-row items-center px-2 py-1.5 h-8 border-b border-[#464646] hover:bg-[#5D5D5D] gap-2">
                    <InfinityPageViewIcon />

                    <label className="cursor-pointer p-0 ml-1 text-[9px] font-extrabold text-white leading-5 tracking-[.21em]">
                      SCRIPT VIEW
                    </label>
                  </button>
                  <button className="cursor-pointer flex flex-row items-center px-2 py-1.5 h-8 border-b border-[#464646] hover:bg-[#5D5D5D] gap-2">
                    <PageViewIcon />
                    <label className="cursor-pointer p-0 ml-2 text-[9px] font-extrabold text-white leading-5 tracking-[.21em]">
                      PAGE VIEW
                    </label>
                  </button>
                  <button className="cursor-pointer flex flex-row items-center px-2 py-1.5 h-8 border-b border-[#464646] hover:bg-[#5D5D5D] gap-2">
                    <ScriptViewIcon />

                    <label className="cursor-pointer p-0 ml-2 text-[9px] font-extrabold text-white leading-5 tracking-[.21em]">
                      INFINITY PAGE
                    </label>
                  </button>
                </ul>
              }
            </div>


            <div className="dropdown w-full">
              <div className="avatar placeholder" tabIndex={0} onClick={() => setOpenPage(true)}>
                <div className="bg-[#2b2b2b] text-white rounded w-10 cursor-pointer">
                  <span className="text-xs"><OneWindow /></span>
                </div>
              </div>
              {isOpenPage &&
                <ul
                  tabIndex="0"
                  className="list-none p-0 drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content mt-1 shadow bg-[#161616] border border-[#464646] w-40 max-h-fit rounded-[4px]"
                >
                  <button className="cursor-pointer flex flex-row items-center px-2 py-1.5 h-8 border-b border-[#464646] hover:bg-[#5D5D5D] gap-2">
                    <OnePageViewIcon />

                    <label className="cursor-pointer p-0 ml-2 text-[9px] font-extrabold text-white leading-5 tracking-[.21em]">
                      ONE SCREEN
                    </label>
                  </button>
                  <button className="cursor-pointer flex flex-row items-center px-2 py-1.5 h-8 border-b border-[#464646] hover:bg-[#5D5D5D] gap-2">
                    <SplitViewIcon />
                    <label className="cursor-pointer p-0 ml-2 text-[9px] font-extrabold text-white leading-5 tracking-[.21em]">
                      SPLIT SCREEN
                    </label>
                  </button>
                </ul>
              }
            </div>


            <div className="dropdown dropdown-left  w-full">
              <div className="avatar placeholder ml-10 cursor-pointer" tabIndex={0} onClick={() => setHeaderPhoneModal(true)}>
                <div className="bg-[#2b2b2b] text-white rounded-full w-9">
                  <span className="text-xs"><HeadPhoneIcon /></span>
                </div>
              </div>
              {
                isHeaderPhoneModal &&
                <ul
                  tabIndex="0"
                  className="cursor-pointer drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact  dropdown-content shadow bg-[#2B2B2B] border border-[#161616] rounded-[4px] w-[300px] mt-20 mr-6"
                >
                  <div className=" flex flex-row justify-between items-center py-[14px] w-full h-14 border-b border-[#161616]  pl-5">
                    <div className="avatar placeholder">
                      <div className="bg-[#2b2b2b] text-white rounded-full w-9">
                        <img src="assets/img/dashboard/Avatar14.png" alt="Avatar" />
                      </div>
                    </div>
                    <div className="flex w-full justify-end gap-2">
                      <button className="w-8 h-8 text-[#F39C12]">
                        <AlertTriIcon />
                      </button>
                      <button className="rounded w-8 h-8 bg-[#DD5E5E] flex items-center justify-center">
                        <MicOffIcon />
                      </button>
                      <button className="border border-[#404040] rounded w-8 h-8 flex items-center justify-center">
                        <SettingIcon />
                      </button>
                      <button className="border border-[#404040] rounded w-8 h-8 flex items-center justify-center">
                        <DownloadRIghtIcon />
                      </button>

                      <button
                        className="mr-[10px] w-8 h-8 flex items-center justify-center rounded hover:bg-[#4F4F4F]"
                      >
                        <CollapseIcon />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 w-full">
                    <div className="indicator">
                      <div class="indicator-item indicator-bottom top-4 right-1">
                        <TalkIcon />
                      </div>
                      <div className="avatar placeholder">
                        <div className="bg-[#161616] text-white rounded-full w-9 ">
                          <span className="text-xs">MW</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-base text-white">
                      Margarett
                    </div>
                  </div>
                  <div className="flex items-center gap-4 px-4 py-2 w-full">
                    <div className="indicator">
                      <div class="indicator-item indicator-bottom top-4 right-1">
                        <TalkIcon />
                      </div>
                      <div className="avatar placeholder">
                        <div className="bg-[#161616] text-white rounded-full w-9 ">
                          <img src="assets/img/dashboard/Avatar16.png" alt="Avatar" />
                        </div>
                      </div>
                    </div>
                    <div className="text-base text-white">
                      William
                    </div>
                  </div>
                </ul>
              }
            </div>


            <div className="avatar placeholder">
              <div className="bg-[#2b2b2b] text-white rounded-full w-9">
                <span className="text-xs">MW</span>
              </div>
            </div>
            <div className="avatar placeholder">
              <div className="bg-[#2b2b2b] text-white rounded-full w-9">
                <img src="assets/img/dashboard/Avatar16.png" alt="Avatar" />
              </div>
            </div>
            <div className="avatar placeholder">
              <div className="bg-[#2b2b2b] text-white rounded-full w-9">
                <img src="assets/img/dashboard/Avatar15.png" alt="Avatar" />
              </div>
            </div>
            <div className="avatar placeholder">
              <div className="bg-[#2b2b2b] text-white rounded-full w-9">
                <img src="assets/img/dashboard/Avatar14.png" alt="Avatar" />
              </div>
            </div>
            <div className="avatar placeholder">
              <div className="bg-[#2b2b2b] text-white rounded-full w-9">
                <img src="assets/img/dashboard/Avatar13.png" alt="Avatar" />
              </div>
            </div>

            <div className="avatar placeholder ml-3">
              <div className="bg-[#2b2b2b] text-white rounded w-10">
                <span className="text-xs"><ShareIcon /></span>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}
