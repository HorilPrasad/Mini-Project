import "../../css/worker_profile.css";

const Workerdetail = () => {
    return (
        <>
            <div className="w-name">
                <h2>Jeremy Rose</h2>
                <p>Product Designer</p>
            </div>

            <div className="w-rating">
                <p>RATING</p>
                <p><span>8.9</span>/10</p>
                <div className="rating-d">
                
                </div>
            </div>

            <div className="i-btn">
                <div className="btn-box">
                    <img src="msg-icon.png" alt="not found"></img>
                    <button type="button" className="btn-info">Send Message</button>
                </div>
                <div className="btn-box">
                    <img src="check.png" alt="not found"></img>
                    <button type="button" className="btn-info">Contact</button>
                </div>
                <div className="btn-box">
                    {/* <img src="user.png" alt="not found"></img> */}
                    <button type="button" className="btn-info">Report User</button>
                </div>
            </div>

            <div className="w-about" >
                <img src="user.png" alt="not found" width="15" height="17"></img>
                <p>About</p>
            </div>
        </>
    );
};

export default Workerdetail;