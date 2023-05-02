import React from 'react'
import "./home.scss"
import Sidebar from '../admin_sidebar/Sidebar';
import Navbar from '../admin_navbar/Navbar';
import Widget from '../admin_widget/Widget';


const Home = () => {
  return (
    <div className="home">
        <Sidebar />
        <div className="homeContainer">
            <Navbar/>
            <div className="widgets">
            <Widget type="user"  className="usr"/>
            <Widget type="worker" className="wrk"/>
            </div>
        </div>
    </div>
  )
}

export default Home