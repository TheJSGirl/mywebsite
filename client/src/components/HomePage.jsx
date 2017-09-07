import React from 'react';

const Home = () => {

  return(
    <div className="container">
      <div className="row"><br/>
        <div className="row">
          <br/><br/>
          <div className="col s6 offset-s3">
          <img src="images/img.jpg" alt="my pic" 
            style={{height:'150px', width: '150px'}}
            className="responsive-img circle"/>
            
          </div>
        </div>
        <h1>About Me</h1>
        <p>
          <h4>Well! !n a nut shell I'm a tech enthusiast developer.</h4>
          <ul className="collection">
            <li className="collection-item">I always try tunning complex problems into simple one with beautiful and intuitive interface.</li>
            <li className="collection-item">I dislike mean people but I like the MEAN Stack.(currently learning).</li>
            <li className="collection-item"> I enjoy challenges and always look for good opportunities to develop my skills.</li>
            <li className="collection-item"> Mostly I code in JavaScript (thinking to try TypeScript) and sometimes in C++ (learning slowly)</li>
          </ul>
        </p>
      </div>
    </div>
  )
}


export default Home; 