import './Job.css';

export default function Job(){

    return(
        <div className="job-container">
            {/* <h1>Job</h1> */}
            <div>
                <span className="job-titles">Role : </span>
                <span className="job-details">Full Stack Developer – Node.js/React.js (Linux)</span>
            </div>

            <div>
                <span className="job-titles">Exp : </span>
                <span className="job-details">1+ Yrs</span>
            </div>

            <div>
                <span className="job-titles">Location : </span>
                <span className="job-details">Bangalore, Karnataka, India</span>
            </div>

            <button className='apply-btn'>
                Apply
            </button>

        </div>
    )
} 
