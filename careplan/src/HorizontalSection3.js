import React from 'react';
import './HorizontalSection3.css'; // Import CSS file for HorizontalSection3

const PhysicianTreatmentPlan = () => {
  return (
    <div className="sidebar-content-container">
      <div className="title-block-secondary w-clearfix">
        <div className="heading-title">Physician treatment plan</div>
      </div>
      <div className="sidebar-wrapper padding">
        <div className="null">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /><br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div className="empty-state">
          <div className="empty-state-label-h2">No data recorded for this encounter</div>
        </div>
      </div>
      <div className="sidebar-time-stamp">2nd Jan 2024 • 2:15 PM</div>
    </div>
  );
};

const Diagnostics = () => {
  return (
    <div className="sidebar-content-container">
      <div className="title-block-secondary w-clearfix">
        <div className="heading-title">Diagnostics</div>
      </div>
      <div className="sidebar-wrapper padding diagnostics w-clearfix">
        <div className="diagnostics-added">
          <div className="diagnostic-label">FBC</div>
        </div>
        <div className="diagnostics-added">
          <div className="diagnostic-label">Lorem ipsum</div>
        </div>
        <div className="diagnostics-added">
          <div className="diagnostic-label">Lorem Pl</div>
        </div>
        <div className="diagnostics-added">
          <div className="diagnostic-label">BPL</div>
        </div>
      </div>
      <div className="title-block-secondary w-clearfix">
        <div className="heading-title">Reports</div>
      </div>
      <div className="sidebar-wrapper padding attachments">
        <div className="attachment-block sidebar w-clearfix">
          <div className="attachmen-icon"></div>
          <div className="attachment-detail-block">
            <div className="label-h1 sidebar">Full_checkup_report...</div>
            <div className="label-h2 sidebar">237.32 kb</div>
          </div>
        </div>
        <div className="attachment-block sidebar w-clearfix">
          <div className="attachmen-icon"></div>
          <div className="attachment-detail-block">
            <div className="label-h1 sidebar">Full_checkup_report...</div>
            <div className="label-h2 sidebar">237.32 kb</div>
          </div>
        </div>
      </div>
      <div className="sidebar-time-stamp">2nd Jan 2024 • 2:15 PM</div>
    </div>
  );
};

const Notes = () => {
  return (
    <div className="sidebar-content-container">
      <div className="title-block-secondary w-clearfix">
        <div className="heading-title">Notes</div>
      </div>
      <div className="sidebar-wrapper padding">
        <div className="empty-state">
          <div className="empty-state-label-h2">Define empty state status and needed action if required</div>
        </div>
      </div>
    </div>
  );
};

const NotesWithContent = () => {
  return (
    <div className="sidebar-content-container">
      <div className="title-block-secondary w-clearfix">
        <div className="heading-title">Notes</div>
      </div>
      <div className="sidebar-wrapper padding">
        <div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
      </div>
      <div className="sidebar-time-stamp">2nd Jan 2024 • 1:30 PM</div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <PhysicianTreatmentPlan />
      <Diagnostics />
      <Notes />
      <NotesWithContent />
      <div className="end"></div>
    </div>
  );
};

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
          <Sidebar />
          {/* Add more content containers here */}
        </div>
      </div>
    </div>
  );
}

export default HorizontalSection3;
