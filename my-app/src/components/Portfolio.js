import React from 'react';
import edinburghPhoto from '../images/edinburghPhoto.jpg';
import helsinkiPhoto from '../images/helsinkiPhoto.jpg';
import irelandPhoto from '../images/irelandPhoto.jpg';
import morainePhoto from '../images/morainePhoto.jpg';
import swedenPhoto from '../images/swedenPhoto.jpg';
import washingtonPhoto from '../images/washingtonPhoto.jpg';

 
const Portfolio = () => {
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
          <article className="imgContainerOne">
          <section className="ediPhoto">
          <img src={edinburghPhoto} alt="Edinburgh Castle" className="edinburghPhoto" height="200px" width="300px" />
          <p>Edinburgh, Scotland</p>
          </section>
          <section className="helPhoto">
          <img src={helsinkiPhoto} alt="Helsinki" className="helsinkiPhoto" height="200px" width="300px" />
          <p>Helsinki, Finland</p>
          </section>
          <section className="irePhoto">
          <img src={irelandPhoto} alt="Cork, Ireland" className="irelandPhoto" height="200px" width="300px" />
          <p>Cork, Ireland</p>
          </section>
          </article>
          <br />
          <article className="imgContainerTwo">
          <section className="morPhoto">
          <img src={morainePhoto} alt="Moraine Lake" className="morainePhoto" height="200px" width="300px" />
          <p>Moraine Lake, Canada</p>
          </section>
          <section className="swePhoto">
          <img src={swedenPhoto} alt="Malmo, Sweden" className="swedenPhoto" height="200px" width="300px" />
          <p>Malmo, Sweden</p>
          </section>
          <section className="wasPhoto">
          <img src={washingtonPhoto} alt="Washington, D.C." className="washingtonPhoto"  height="200px" width="300px" />
          <p>Washington, USA</p>
          </section>
          </article>
          </main>
          <br />
        <hr />

        <h4>Add New Portfolio Item</h4>
        <label>Location Name</label>
        <input type="text" />
        <label>Image</label>
        <input type="file"/>
        <button>Add To Portfolio</button>
        


      </div>
    );
  };
 
export default Portfolio;