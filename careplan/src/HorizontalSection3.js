import React from 'react';
import './HorizontalSection3.css'; // Import CSS file for HorizontalSection3

function HorizontalSection3() {
  return (
    <div className="horizontal-part smaller-size">
      <div className="sidebar-column">
        <div className="side-nav-title">
          <a href="#" className="nav-icon sidebar-expand w-inline-block"></a>
          <div className="sidebar-nav-label">Patient Information</div>
        </div>
        <div className="sidebar-expand-track">
          <div className="patient-side-profile w-clearfix">
            <div className="patient-profile-avatar henry"></div>
            <div className="patient-info-block">
              <div className="patient-name">Henry Cooper</div>
              <div className="patient-id">GH 877 964 2877<a href="https://medtrack-nurse-dashboard.webflow.io/#"><br /></a>
              </div>
            </div>
          </div>
          {/* Add more content here */}
          <div className="sidebar-content-container">
            <div className="title-block-secondary w-clearfix">
              <div className="heading-title">Diagnosis</div>
            </div>
            <div className="sidebar-wrapper diagnosis">
              <div className="sidebar-diagnosis-item">
                <div className="sidebar-diagnosis-h1">Urticaria Due To Cold And Heat</div>
                <div className="sidebar-icd-block">
                  <div className="diagnosis-icd">ICD</div>
                  <div className="sidebar-icd-number">U202</div>
                </div>
              </div>
              {/* Add more diagnosis items here */}
            </div>
            <div className="sidebar-time-stamp diagnosis">Today • 2:15 PM</div>
          </div>
          {/* Add more content containers here */}
        </div>
      </div>
    </div>
  );
}

export default HorizontalSection3;
