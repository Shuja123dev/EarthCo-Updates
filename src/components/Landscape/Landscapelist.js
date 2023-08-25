import React from 'react'
import { NavLink } from 'react-router-dom';
import StaticComps from '../StaticComps'
import TitleBar from '../TitleBar'
import Footer from '../Footer'
const Landscapelist = () => {
    const icon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M14.7379 2.76181H8.08493C6.00493 2.75381 4.29993 4.41181 4.25093 6.49081V17.2038C4.20493 19.3168 5.87993 21.0678 7.99293 21.1148C8.02393 21.1148 8.05393 21.1158 8.08493 21.1148H16.0739C18.1679 21.0298 19.8179 19.2998 19.8029 17.2038V8.03781L14.7379 2.76181Z" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.4751 2.75V5.659C14.4751 7.079 15.6231 8.23 17.0431 8.234H19.7981" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.2882 15.3585H8.88818" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.2432 11.606H8.88721" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
 
    return (
        <>
        <StaticComps />
        <div className="content-body">
            <TitleBar icon={icon} title='Punchlists' />
            <div className="container-fluid">
                <div className="row">
                    <div class="col-xl-3  col-lg-6 col-sm-6">
                        <div class="widget-stat card">
                            <div class="card-body p-4">
                                <div class="media ai-icon">
                                    <span class="me-3 bgl-warning text-warning">
                                        <svg id="icon-orders" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                            <line x1="16" y1="13" x2="8" y2="13"></line>
                                            <line x1="16" y1="17" x2="8" y2="17"></line>
                                            <polyline points="10 9 9 9 8 9"></polyline>
                                        </svg>
                                    </span>
                                    <div class="media-body">
                                        <p class="mb-1">Open</p>
                                        <h4 class="mb-0">5131</h4>
                                        <span class="badge badge-warning">30%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3  col-lg-6 col-sm-6">
                        <div class="widget-stat card">
                            <div class="card-body p-4">
                                <div class="media ai-icon">
                                    <span class="me-3 bgl-success text-success">
                                        <svg id="icon-database-widget" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-database">
                                            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                                            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                                        </svg>
                                    </span>
                                    <div class="media-body">
                                        <p class="mb-1">Total</p>
                                        <h4 class="mb-0">777</h4>
                                        <span class="badge badge-success">100%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="tbl-caption">
                                    <div className="row p-3 ">
                                        <div className="col-md-6">
                                         <NavLink  to="/LandscapeForm">   <a className="btn btn-primary btn-md"  >+ Add </a></NavLink>
                                        </div>
                                        <div class="col-md-6" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <div className="col-md-3">
                                                <select class="default-select form-control wide" id="inlineFormCustomSelect">
                                                    <option selected>All</option>
                                                    <option value="1">Current Month</option>
                                                    <option value="2">Previous Month</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table id="example5" className="display table" style={{ minWidth: '845px' }}>
                                        <thead>
                                            <tr className='serviceRequestRecords'>
                                                <th>
                                                    <div className="form-check custom-checkbox ms-2">
                                                        <input type="checkbox" className="form-check-input" id="customCheckBox2" required="" />
                                                        <label className="form-check-label" htmlFor="customCheckBox2"></label>
                                                    </div>
                                                </th>
                                               
                                              
                                                <th>Customer Name</th>
                                                <th>Type</th>
                                                <th>Assigned to</th>
                                               
                                                <th>Status</th>
                                                <th>Date Created</th>
                                                <th>Report</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="form-check custom-checkbox ms-2">
                                                        <input type="checkbox" className="form-check-input" id="customCheckBox2" required="" />
                                                        <label className="form-check-label" htmlFor="customCheckBox2"></label>
                                                    </div>
                                                </td>
                                                <td>Vincente, Allan</td>
                                                <td>
                                                    PL-1001
                                                </td>
                                               
                                                <td>Sunrise Lane</td>
                                                <td>Closed</td>
                                                <td>1/17/2014</td>
                                                
                                                <td>
                                                <NavLink to='/Landscape'>
                    <span class="badge badge-primary light border-0 me-1">Open</span>
                </NavLink></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
        <Footer />
    </>
    )
}

export default Landscapelist