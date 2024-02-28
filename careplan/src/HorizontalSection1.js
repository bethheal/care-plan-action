import React from 'react';
import './HorizontalSection1.css'; // Import CSS file for HorizontalSection1

function HorizontalSection1() {
  return (
    <div className="horizontal-part smaller-size">
      <div className="section">
        <div className="navbar-column">
          <div className="navbar-content-wrapper">
            <div className="brand-block w-clearfix">
              <a href="#" className="brand-icon w-inline-block"></a>
              <div className="logo">MedTrack</div>
              <div className="navbar-menu-close">
                <img src="images/menu-03.svg" loading="lazy" alt="" className="navbar-menu-icon" />
              </div>
            </div>
            <div className="nav-user-profile">
              <a href="#" className="user-avatar w-inline-block"></a>
              <div className="username">Harriet Marfo</div>
              <div className="facility-name">Buduatta Health Centre<a href="https://medtrack-physician.netlify.app/patients"><br /></a>
              </div>
            </div>
            <div className="navbar-menu-wrapper">
              <div className="navbar-menu-items">
                <a href="patients.html" className="nav-link w-inline-block w-clearfix">
                  <div className="menu-icon patients"></div>
                  <div className="navbar-label">Patients</div>
                </a>
                <a href="waiting-room.html" className="nav-link w-inline-block w-clearfix">
                  <div className="menu-icon requests"></div>
                  <div className="navbar-label">Waiting room</div>
                </a>
                <a href="care-plan-action.html" aria-current="page" className="nav-link w-inline-block w-clearfix w--current">
                  <div className="menu-icon inpatient"></div>
                  <div className="navbar-label">In-Patients</div>
                </a>
                <a href="notifications.html" className="nav-link w-inline-block w-clearfix">
                  <div className="menu-icon notification"></div>
                  <div className="navbar-label">Notifications</div>
                  <div className="notification-indicator">4</div>
                </a>
                <a href="components.html" className="nav-link w-inline-block w-clearfix">
                  <div className="menu-icon settings"></div>
                  <div className="navbar-label">Settings</div>
                </a>
              </div>
              <div className="navbar-menu-base">
                <div href="#" className="logout-link w-clearfix">
                  <div className="menu-icon logout"></div>
                  <div className="navbar-label">Log out</div>
                </div>
                <a href="#" className="support-block w-inline-block">
                  <div className="support-icon-block"><img src="images/ic-feedback.svg" loading="lazy" alt="" className="support-icon" /></div>
                  <div className="support-info-block">
                    <div className="support-h1">Bugs &amp; feedback report</div>
                    <div className="support-h2">Feedback</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalSection1;
