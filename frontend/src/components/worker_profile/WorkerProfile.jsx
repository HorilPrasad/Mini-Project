import "../../css/worker_profile.css";
import Address from './Address';
import Skill from './Skill';
import Workerdetail from './Workerdetail';
import Wcontact from './Wcontact';
import Basicdetail from './Wbasicdetail'
import img from '../../img/worker-img.jpg';

const WorkerProfile = () => {
    return (
        <>
            <div className="main-s">
                <div className="p-details">
                    <img src={img} alt="" />

                    <h2>Work</h2>
                    
                    <Address />

                    <h2>Skills</h2>

                    <Skill />
                    
                </div>

                <div className="i-details">
                    <Workerdetail />

                    <hr></hr>

                    <Wcontact />

                    <Basicdetail />

                </div>

                <div className="right-space" >
                    
                </div>
            </div>
        </>
    )
}

export default WorkerProfile;