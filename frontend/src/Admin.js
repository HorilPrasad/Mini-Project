import React from "react";
import "./components/admin.css";

const Admin = () => {
    return (
        <>
            <div className="main-section">
                <div className="personal-details">
                    <h2>Personal Details</h2>
                    <img src="user-logo.png" alt="" />
                    <h3><span>Name</span>       : Shanish</h3>
                    <h3><span>Email id</span>   : aryashanish@gmail.com</h3>
                    <h3><span>Phone No</span>   : 9525633767</h3>
                    <h3><span>City</span>       : Patna(Bihar)</h3>
                    <h3><span>Occupation</span> : Technician</h3>
                </div>
                <div className="lining" >

                </div>
                <div className="user-req" >
                    <div className="working" id="w-card" >
                        <h3>Working on it</h3>
                    </div>
                    <div className="pending" id="w-card">
                        <h3>Pending Work</h3>
                    </div>
                    <div className="done" id="w-card">
                        <h3>Complate Work</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin;