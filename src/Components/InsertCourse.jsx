import React from 'react'

const InsertCourse = () => {
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col- col-12 col-sm-16 col-md-6 col-lg-6 col-xl-4 col-xxl-4 justify-content-center">

                        <div className="row">
                            <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Course Name</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Duration</label>
                                <input type="text" className="form-control" />


                            </div>
                            <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Fees</label>
                                <input type="phone" className="form-control" />


                            </div>
                            <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Payment</label>
                                <select name="" id="" className="form-conrol">
                                    <option value="">Select</option>
                                    <option value="">Online</option>
                                    <option value="">Offline</option>
                                    <option value="">Hybrid</option>
                                </select>


                            </div>
                            <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Tainer</label>
                                <input type="text" className="form-control" />


                            </div>
                            <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success">Submit</button>

                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default InsertCourse