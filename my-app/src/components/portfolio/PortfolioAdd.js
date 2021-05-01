import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const PortfolioAdd = () => {
    const [newPortfolio, setNewPortfolio] = useState({ title: "", image: "", description: "" })
    const history = useHistory();

    const handleChange = (event) => { 
        setNewPortfolio((prevState) => ({
            ...prevState, 
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        fetch("/api/portfolio", {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPortfolio)
        }).then((response) => response.json());
        history.push("/portfolio");
    };

return (
<div>
    <h4>Add New Portfolio Item</h4>
    <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" name="title" value={newPortfolio.title} onChange={handleChange} />
        <label>Image URL</label>
        <input type="url" name="image" value={newPortfolio.image} onChange={handleChange} />
        <label>Description</label>
        <input type="text" name="description" value={newPortfolio.description} onChange={handleChange} />
        <button>Add To Portfolio</button>
    </form>
</div>
)}


export default PortfolioAdd;