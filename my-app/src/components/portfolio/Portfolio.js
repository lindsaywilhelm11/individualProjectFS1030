import React, { useState, useEffect } from "react";

 
const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const res = await fetch("http://localhost:3001/api/portfolio");
        res
          .json()
          .then((res) => setPortfolio(res))
      }
      fetchData();
    }, []);
    

    return (
        <div>
          


        <title>Lindsay Wilhelm's Portfolio</title>
      
        
        <article className="top-container">
          <h1 className="contentHeader">Lindsay Wilhelm</h1>
          <h4 className="contentSubHeader">Web Developer</h4>
        </article>
        <hr />
        <h3 className="portfolioContent">Thanks for checking out my portfolio.</h3>
        <p className="portfolioContent">I currently do not have any live projects to put in this section <br />
          but as I work through York University's Full-Stack Web Development Certificate program, <br /> 
          I will have more to show in my portfolio.</p>
        <br />
        <p className="portfolioContent">Please enjoy some of my photography instead.</p>
        <main>
          <article className="imgContainer">
          {portfolio.map((portfolio) => (
            <section className="ediPhoto" key={portfolio.portfolioID}>
              <p>{portfolio.title}</p>
              <img src={portfolio.image} alt={portfolio.title} width="300px" height="200px" />
              <p>{portfolio.description}</p>
              </section>
          ))}
          
          </article>
          </main>
          <br />
        <hr />

       
        


      </div>
    );
  };
 
export default Portfolio;