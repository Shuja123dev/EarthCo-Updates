import React from 'react'

const StatusCardsEst = ({ drafts, sent, approved, rejected, total }) => {
    return (
        <>
            {/* <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div class="card box-hover">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="icon-box icon-box-lg bg-primary-light rounded-circle flex-box">
                                <span class="material-symbols-outlined" style={{ fontSize: '25px', color: '#0d99ff' }}>
                                    edit
                                </span>
                            </div>
                            <div class="total-projects ms-3">
                                <h3 class="text-primary count">{drafts}</h3>
                                <span>Drafts</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div class="card box-hover">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="icon-box icon-box-lg bg-danger-light rounded-circle flex-box">
                                <span class="material-symbols-outlined" style={{ fontSize: '30px', color: '#e3952e' }}>
                                    file_open
                                </span>
                            </div>
                            <div class="total-projects ms-3">
                                <h3 class="count" style={{ color: '#e3952e' }}>{sent}</h3>
                                <span>Sent</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div class="card box-hover">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="icon-box icon-box-lg bg-success-light rounded-circle flex-box">
                                <span class="material-symbols-outlined" style={{ fontSize: '35px', color: '#3ac977' }}>
                                    gpp_bad
                                </span>
                            </div>
                            <div class="total-projects ms-3">
                                <h3 class="text-success count">{approved}</h3>
                                <span>Approved</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div class="card box-hover">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="icon-box icon-box-lg bg-danger-light rounded-circle flex-box">

                                <span class="material-symbols-outlined" style={{ fontSize: '30px', color: '#ff5e5e' }}>
                                    block
                                </span>
                            </div>
                            <div class="total-projects ms-3">
                                <h3 class="text-danger count">{rejected}</h3>
                                <span>Rejected</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div class="card box-hover">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="icon-box icon-box-lg bg-purple-light rounded-circle flex-box">
                                <span class="material-symbols-outlined" style={{ fontSize: '35px', color: 'black' }}>
                                    person
                                </span>
                            </div>
                            <div class="total-projects ms-3">
                                <h3 class="text-secondary count">{total}</h3>
                                <span>Total</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div class="col-xl-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row task">
                            <div class="col-xl-2 col-sm-4 col-6">
                                <div class="task-summary">
                                    <div class="d-flex align-items-baseline">
                                        <h2 class="text-purple count">28,1045</h2>
                                    </div>
                                    <span>Open Estimates</span>
                                    {/* <p>Tasks assigne</p> */}
                                </div>
                            </div>
                            <div class="col-xl-2 col-sm-4 col-6">
                                <div class="task-summary">
                                    <div class="d-flex align-items-baseline">
                                        <h2 class="text-warning count">7,092</h2>
                                    </div>
                                    <span>Total Estimates</span>
                                    {/* <p>Tasks assigne</p> */}
                                </div>
                            </div>
                            <div class="col-xl-2 col-sm-4 col-6">
                                <div class="task-summary">
                                    <div class="d-flex align-items-baseline">
                                        <h2 class="text-secondary count">478,000 $</h2>
                                    </div>
                                    <span>Amount of Opened Estimats</span>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatusCardsEst
