import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";
import HamburgerIcon from "../../assets/hamburher-icon.svg";

const Navbar = () => {
	const [activeMenu, setActiveMenu] = useState(false);
	const [activeSubMenu, setActiveSubMenu] = useState(false);
  const [activeSuperSubMenu, setActiveSuperSubMenu] = useState(false);

  function useOutsideClick(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setActiveMenu(false);
          setActiveSubMenu(false);
          setActiveSuperSubMenu(false)
        }
      }
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef);

  const linkActiveClickMenu = () => setActiveMenu(!activeMenu);
  const linkActiveClickSubMenu = () => setActiveSubMenu(!activeSubMenu);
  const linkActiveClickSuperSubMenu = () => setActiveSubMenu(!activeSuperSubMenu);

	return (
		<div ref={wrapperRef}>
			<button
				className="hamburger-btn"
				onClick={() => setActiveMenu(!activeMenu)}
			>
				<img src={HamburgerIcon} alt="" />
			</button>
			{activeMenu && (
				<ul className="list">
					<li className="list-item" onClick={() => setActiveSubMenu(!activeSubMenu)}>Dashboard</li>
					<li className="list-item"><Link onClick={linkActiveClickMenu} to="/data_manager">Data Manager</Link></li>
					<li className="list-item"><Link onClick={linkActiveClickMenu} to="/reporting">Reporting</Link></li>
					<li className="list-item"><Link onClick={linkActiveClickMenu} to="/user_management">User Management</Link></li>
					{activeSubMenu && (
						<ul className="subList">
							<li className="list-item"><Link onClick={linkActiveClickSubMenu} to="/dashboard/audit">Audit</Link></li>
							<li className="list-item"><Link onClick={linkActiveClickSubMenu} to="/dashboard/issue">Issue</Link></li>
							<li className="list-item" onClick={() => setActiveSuperSubMenu(!activeSuperSubMenu)}>
                <Link onClick={() => linkActiveClickSuperSubMenu} to="/dashboard/action_plan">Action Plan</Link>
              </li>
              {activeSuperSubMenu && (
                <ul className="superSubList">
                  <li className="list-item"><Link onClick={linkActiveClickSuperSubMenu} to="/dashboard/action_plan/test">Test</Link></li>
                </ul>
              )}
						</ul>
					)}
				</ul>
			)}
		</div>
	);
};

export default Navbar;
