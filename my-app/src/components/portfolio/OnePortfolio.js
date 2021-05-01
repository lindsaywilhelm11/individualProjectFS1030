import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

const OnePortfolio = (props) => {
    console.log(props);
    let portfolioID = props.match.params.portfolioID
    const [portfolio, setPortfolio] = useState([]);
    const [form, setForm] = useState({display: "none"});
    const [portfolioInfo, setPortfolioInfo] = useState({ title: "", image: "", description: "" });
    const history = useHistory();

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`http://localhost:3001/api/portfolio/${portfolioID}`);
            res.json().then((res) => setPortfolio(res));
        }
        fetchData();
    }, [portfolioID]);

    
    const handleDelete = (event, portfolioID) => {
        event.preventDefault();
        console.log(portfolioID);

        fetch(`/api/portfolio/${portfolioID}`, {
            method: "delete",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }).then((response) => response.json());
        history.push("/portfolio");
    };

    const handleEdit = (event, portfolioInfo) => {
        event.preventDefault();
        console.log(portfolioInfo);
        setForm({ display: "block" });
        setPortfolioInfo(portfolioInfo);
    };

    const handleChange = (event) => { 
        setPortfolioInfo((prevState) => ({
            ...prevState, 
            [event.target.name]: event.target.value,
        }));
    };

    const handleEditSubmit = (event, portfolioID) => {
        event.preventDefault();
        console.log(portfolioID);
        fetch(`/api/portfolio/${portfolioID}`, {
            method: "put",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(portfolioInfo)
        }).then((response) => response.json());
        history.push("/portfolio");
    }

    return(
     <article>
            {portfolio.map((portfolio) => (
            <section key={portfolio.portfolioID}>
              <p>{portfolio.title}</p>
              <img src={portfolio.image} alt={portfolio.title} width="300px" height="200px" />
              <p>{portfolio.description}</p>
              <button onClick={(e) => {handleDelete(e, portfolio.portfolioID)}}>Delete Portfolio Item</button>
              <button onClick={(e) => handleEdit(e, portfolioInfo)}>Edit Portfolio Item</button>
              </section>
          ))}
    
        <form onSubmit={(e) => handleEditSubmit (e, portfolio.portfolioID)} style={form}>
            <label>Title</label>
            <input type="text" name="title" value={portfolio.title} onChange={handleChange} />
            <label>Image URL</label>
            <input type="url" name="image" value={portfolio.image} onChange={handleChange} />
            <label>Description</label>
            <input type="text" name="description" value={portfolio.description} onChange={handleChange} />
            <button type="submit" value="Submit">Submit Edit</button>
    </form>
    </article>
    
    )
}





export default OnePortfolio;