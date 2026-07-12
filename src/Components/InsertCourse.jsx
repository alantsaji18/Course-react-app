import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const InsertCourse = () => {

    const [input, changeInput] = useState(
        {

            course_name: " ",
            duration: " ",
            fee: " ",
            mode: " ",
            trainer: ""
        }
    )

    const inputHandler = (event)=>{

        changeInput({...input,[event.target.name]:event.target.value})

    }


        const readValue=() =>{

            console.log(input)

            axios.post(" https://host-demo-app.onrender.com/api/add-course",input).then(
                (response)=>{

                    console.log(response.data)

                    alert("Couse Added Successfully")

                }
            ).catch()

        }

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col- col-12 col-sm-16 col-md-6 col-lg-6 col-xl-4 col-xxl-4 justify-content-center">

                        <div className="row g-3">
                            <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Course Name</label>
                                <input type="text" className="form-control"  name='course_name' value={input.course_name} onChange={inputHandler}/>

                            </div>
                            <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Duration</label>
                                <input type="text" className="form-control" name='duration' value={input.duration} onChange={inputHandler} />


                            </div>
                            <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Fees</label>
                                <input type="phone" className="form-control" name='fee' value={input.fee} onChange={inputHandler} />


                            </div>
                            <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Payment</label>
                                <select name="" id="" className="form-conrol" name='mode' value={input.mode} onChange={inputHandler}>
                                    <option value="">Select</option>
                                    <option value="">Online</option>
                                    <option value="">Offline</option>
                                    <option value="">Hybrid</option>
                                </select>


                            </div>
                            <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Tainer</label>
                                <input type="text" className="form-control" name='trainer' value={input.trainer} onChange={inputHandler}/>


                            </div>
                            <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readValue}>Submit</button>

                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default InsertCourse