import React from 'react';

const Home = () => {

  return(
    <div className="container">
      <div className="row">
        <br/><br/>
        <h3 className="center">few bytes about me. </h3>        
        <div className="col s4 offset-s4">
          <img src="images/img.jpg" alt="my pic" 
            style={{height:'150px', width: '150px'}}
            className="center responsive-img circle"/>
        </div>
        <br/><br/>
        <div className="divider"></div>
      </div>
      <div className="row">
        <div className="s10 offset-s1 m8 offset-m2">
           
          <h1 className= "center"> <span style={{fontSize: 50}}>Hello there!</span></h1>
          <p className= "center" style={{fontSize: 20}}>
            I am Priyanka Negi. I am Javascript Developer.
            
          </p>
          <br/>
        </div>
      </div>
    </div>
  )
}


export default Home; 