import React from 'react'
import StaticComps from '../StaticComps'
import { useEffect } from 'react'
import Footer from '../Footer'


const WeeklyReport = () => {
   
    return (
        <>
                  <StaticComps />
               <div class="content-body ">
		
<div class="container-fluid">

            <div class="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-8">
                    <div class="card">

                        <div class="card-body">

                            <div class="row mb-5">
                                <div class="mt-5 col-xl-10 col-lg-10 col-md-10 col-sm-12 text-center">

                                    <h2> <strong>Weekly Report</strong> </h2>



                                </div>
                                <div class="mt-4 col-xl-2 col-lg-2 col-md-2 col-sm-12 d-flex justify-content-lg-end justify-content-md-center justify-content-xs-start">

                                    <div class="brand-logo mb-2 inovice-logo">
                                        <img src='./assets/images/background/earthco_logo.png' alt="" className="light-logo" style={{width:"100%"}} />
                                    </div>

                                </div>


                            </div>
                            <div class="row mb-2" style={{padding:"2px"}}>
                                <div class="col-md-4 addborder" style={{padding:"1%"}}>
                                    <div><h5> <strong>Customer Name</strong></h5> </div>
                                    <div><h5>3 Faraday</h5></div>
                                </div>
                                <div class="col-md-4 addborder"style={{padding:"1%"}}>
                                    <div> <h5><strong>Contact Name</strong></h5>  </div>
                                    <div><h5>Matt Bovee</h5> </div>
                                    <div><h5> <strong>Contact Company</strong></h5>  </div>
                                    <div><h5>Idaho Cal Partners</h5> </div>
                                </div>
                                <div class="col-md-4 addborder" style={{padding:"1%"}}>
                                    <div> <h5><strong>By Regional Manager</strong></h5>  </div>
                                    <div><h5>Dan Morrison</h5> </div>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 addborder">
                                    <div><h5> <strong>Report for Week of:</strong></h5> </div>
                                    <div><h5>07/14/2023</h5></div>
                                </div>
                                <div class="col-md-4 addborder">
                                    <div> <h5><strong>This week rotation:</strong></h5>  </div>
                                    <div><h5>4</h5> </div>
                                </div>
                                <div class="col-md-4 addborder">
                                    <div> <h5><strong>Next weeks rotation:</strong></h5>  </div>
                                    <div><h5>5</h5> </div>

                                </div>
                                <div class="col-md-12 addborder">
                                    <div> <h5><strong>Service Requests:</strong></h5>  </div>
                                    <div><h5>Blah Blaah Blah</h5> </div>

                                </div>
                                <div class="col-md-12 addborder">
                                    <div> <h5><strong>Proposals:</strong></h5>  </div>
                                    <div><h5>Blah Blaah Blah</h5> </div>

                                </div>
                                <div class="col-md-12 addborder">
                                    <div> <h5><strong>Notes:</strong></h5>  </div>
                                    <div><h5>Blah Blaah Blah</h5> </div>

                                </div>
                                <div class="col-md-12">
                                    <div> <h5><strong>Photos:</strong></h5>  </div>
                                </div>
                                <div class="col-md-3">
                                    <img src="./assets/images/1.jpg" class="weeklyimages"  />
                                </div>
                                <div class="col-md-3" >
                                    <img src="./assets/images/2.jpg" class="weeklyimages" />

                                </div>
                                <div class="col-md-3" >
                                    <img src="./assets/images/3.jpg" class="weeklyimages" />

                                </div>
                                <div class="col-md-3" >
                                    <img src="./assets/images/4.jpg" class="weeklyimages"/>

                                </div>
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

export default WeeklyReport
