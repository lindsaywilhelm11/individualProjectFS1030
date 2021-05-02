import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminPage = (props) => {

    let portfolioID = props.match.params.portfolioID;
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`http://localhost:3001/api/portfolio/${portfolioID}`);
            res.json().then((res) => setPortfolio(res));
        }
        fetchData();
    }, [portfolioID]);

    return(
        <div>
            <h1>Add an Item</h1>
            <Link to='/portfolioadd'><button>Portfolio</button></Link>
            <Link to='/resumeadd'><button>Resume</button></Link>

            <h1>Edit of Delete and Item</h1>
            <Link to='/portfolioone/:portfolioID'><button>Portfolio</button></Link>
            <Link to='/resumeone/:resumeID'><button>Resume</button></Link>
        </div>
    )
}

export default AdminPage;

{/* <Link
  to={{
    pathname: `/view-contact-details/${user.id}`,
    state: { users: user }
  }}
>
  <button>View</button>
</Link>; */}