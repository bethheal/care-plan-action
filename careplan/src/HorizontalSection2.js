import React from 'react';
import './HorizontalSection2.css'; // Import CSS file for HorizontalSection2

function HorizontalSection2() {
  return (
    <div className="content-column sidebar">
      <div className="container sidebar">
        <div className="title-bar sidebar">
          <div className="title-bar-block">
            <div data-w-id="4415eedb-f0b9-bb57-e355-13ea7e9cdd36" className="navbar-menu-button">
              <img src="images/menu-03.svg" loading="lazy" alt="" className="navbar-menu-icon" />
            </div>
            <a href="set-care-plan.html" className="nav-icon back w-inline-block"></a>
            <div className="title-grid-block">
              <div className="nav-title-h1">Care Plan</div>
            </div>
            <div href="#" className="nav-icon expand"></div>
          </div>
          <a href="notifications.html" className="save-status w-inline-block">
            <div className="save-indicator-block">
              <img src="images/ic-saved.svg" loading="lazy" alt="" className="save-icon" />
              <div className="save-state"></div>
            </div>
          </a>
        </div>
        <div className="data-container w-clearfix">
          <div className="content-container-track">
            <div className="content-container crumps w-clearfix">
              <div className="breadcrumps-wrapper">
                <a href="in-patients.html" className="breadcrumps-link-block home w-inline-block">
                  <div className="nav-icon crumpls"></div>
                </a>
                <div className="breadcrumps-link-wrapper w-clearfix">
                  <div className="breadcrumps-separator">
                    <div className="breadcrumps-label">/</div>
                  </div>
                  <a href="encounter.html" className="breadcrumps-link-block w-inline-block">
                    <div className="breadcrumps-label">Encounter</div>
                  </a>
                </div>
                <div className="breadcrumps-link-wrapper w-clearfix">
                  <div className="breadcrumps-separator">
                    <div className="breadcrumps-label">/</div>
                  </div>
                  <a href="care-plan.html" className="breadcrumps-link-block w-inline-block">
                    <div className="breadcrumps-label">Care Plan</div>
                  </a>
                </div>
                <div className="breadcrumps-link-wrapper w-clearfix">
                  <div className="breadcrumps-separator">
                    <div className="breadcrumps-label">/</div>
                  </div>
                  <a href="care-plan-action.html" aria-current="page" className="breadcrumps-link-block w-inline-block w--current">
                    <div className="breadcrumps-label">Care Plan action</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="careplan-row-block">
              <div className="content-container">
                <div className="title-block history w-clearfix">
                  <div className="heading-title">Patient vitals</div>
                  <a data-w-id="a1961f15-5581-a9d7-14fb-51b209c6d4a9" href="#" className="button-secondary title w-button">History</a>
                </div>
                <div className="unit-wrapper vital-list">
                  <div data-w-id="599d5fc6-d247-7a0d-4305-f8ed44e2ed17" className="vitals-record-block w-clearfix">
                    <div className="vitals-avatar"></div>
                    <div className="vital-record-label">Recent record at 8:30 AM</div>
                    <div className="nav-icon forward vitals"></div>
                  </div>
                  <a href="#" data-w-id="0a8ea100-be08-8ee5-a4b9-66c26acd165e" className="button-primary confirm vitals w-button">Record Vitals</a>
                </div>
              </div>
            </div>
            <div className="content-container">
              <div className="title-block w-clearfix">
                <div className="heading-title">Medication Sheet</div>
                <a data-w-id="aa814b10-ef6a-ebfa-e824-758c28e5c19c" href="#" className="button-secondary title w-button">History</a>
              </div>
              <div className="unit-wrapper medication">
                <div className="empty-state medication-sheet">
                  <div className="empty-state-label-h2">No data recorded for this encounter</div>
                </div>
              </div>
            </div>
            <div className="careplan-row-block">
              <div className="content-container null">
                <div className="title-block medication w-clearfix">
                  <div className="heading-title">Medication Sheet</div>
                  <a data-w-id="99bb9b4e-1c42-72a3-6c04-dec0df4d8e84" href="#" className="button-secondary title w-button">History</a>
                </div>
                <div className="unit-wrapper medication-detected">
                  <div data-w-id="0a9a80e2-a30a-7f28-7fbc-7b3bca3b30bf" className="medication-detected-alert">
                    <div className="div-block-2 w-clearfix">
                      <img src="images/Medical-ID-dark.svg" loading="lazy" alt="" className="medication-detected-icon" />
                      <div className="report-date-label">New medication detected, add to Care Plan</div>
                    </div>
                    <a data-w-id="0a9a80e2-a30a-7f28-7fbc-7b3bca3b30c2" href="#" className="button-primary medication-detected w-button">Add</a>
                  </div>
                </div>
                <div className="unit-wrapper medication">
                  <div className="medication-form-block w-form">
                    <form id="wf-form-Medication-Form" name="wf-form-Medication-Form" data-name="Medication Form" method="get" data-wf-page-id="63fb3a9a8bb3690a8717ef25" data-wf-element-id="f633d7a8-6806-292f-d624-9186dfeb3f2f">
                      <div className="medication-wrapper w-clearfix">
                        <div className="medication-column-01">
                          <div className="medication-count">01<br /></div>
                        </div>
                        <div className="medication-column-02">
                          <div className="medication-block">
                            <div className="medication-prescription">
                              <div className="medication-label-h1">Tab. Arthemeter Lumifantrin</div>
                            </div>
                            <div className="medication-dosage">
                              <div className="w-layout-grid medication-dosage-grid">
                                <div className="medication-label-h2">Today at 8:30 PM</div>
                                <div id="w-node-f633d7a8-6806-292f-d624-9186dfeb3f3e-dfeb3f2e" className="medication-dispense-block">
                                  <a href="#" className="button-secondary set w-button">Stop</a><select id="Set-Medication-Selector-2" name="Set-Medication-Selector-2" data-name="Set Medication Selector 2" className="button-primary selector w-select">
                                    <option value="">Chart</option>
                                    <option value="First">Dispensed</option>
                                    <option value="Second">Unavailable</option>
                                    <option value="Third">Pt Refused</option>
                                    <option value="Fourth">No line</option>
                                    <option value="Fifth">Stopped</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="pill-badge-wrapper w-clearfix">
                            <div className="pill-badge-block w-clearfix">
                              <div className="pill-badge left admin">Admin</div>
                              <div className="pill-badge right admin">80/480 mg</div>
                            </div>
                            <div className="pill-badge-block w-clearfix">
                              <div className="pill-badge left route">Route</div>
                              <div className="pill-badge right route">Oral</div>
                            </div>
                            <div className="pill-badge-block w-clearfix">
                              <div className="pill-badge left freq">Freq</div>
                              <div className="pill-badge right freq">BID</div>
                            </div>
                            <div className="pill-badge-block w-clearfix">
                              <div className="pill-badge left dur">Dur</div>
                              <div className="pill-badge right dur">3 of 7 Days</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="careplan-row-block">
              <div className="content-container medication-sheet">
                <div className="title-block medication w-clearfix">
                  <div className="heading-title">Medication Sheet</div>
                  <a data-w-id="24acbd6f-641f-f0de-acfb-54eb568b82d5" href="#" className="button-secondary title w-button">History</a>
                </div>
                <div className="unit-wrapper medication-detected">
                  <div data-w-id="24acbd6f-641f-f0de-acfb-54eb568b82d8" className="medication-detected-alert">
                    <div className="div-block-2 w-clearfix">
                      <img src="images/Medical-ID-dark.svg" loading="lazy" alt="" className="medication-detected-icon" />
                      <div className="report-date-label">New medication detected, add to Care Plan</div>
                    </div>
                    <a data-w-id="24acbd6f-641f-f0de-acfb-54eb568b82dd" href="#" className="button-primary medication-detected w-button">Add</a>
                  </div>
                </div>
                <div className="unit-wrapper medication-item">
                  <div className="medication-wrapper w-clearfix">
                    <div className="medication-column-01">
                      <div className="medication-count">01</div>
                    </div>
                    <div className="medication-column-02">
                      <div className="medication-block">
                        <div className="medication-prescription">
                          <div className="medication-label-h1">Medication 01</div>
                        </div>
                        <div className="medication-dosage-block w-clearfix">
                          <div className="pill-badge admin-mini">20 mg</div>
                          <div className="pill-badge route-mini">Oral</div>
                          <div className="pill-badge freq-mini">QID</div>
                          <div className="pill-badge dur-mini">10 Days</div>
                        </div>
                      </div>
                      <div className="w-layout-grid grid-medication-sheet">
                        <div className="charted charted-status">
                          <div className="medication-history-status-label">Status</div>
                          <div className="status default">Dispensed</div>
                        </div>
                        <div className="charted due-next">
                          <div className="medication-history-status-label">Scheduled</div>
                          <div className="status default">Today at 8:45 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a data-w-id="59a65183-19c6-c2ca-8948-91adf9b229ee" href="#" className="button-primary chart w-button">Open</a>
                </div>
                {/* Repeat the above structure for each medication item */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalSection2;
