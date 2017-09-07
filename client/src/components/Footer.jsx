import React from 'react';

const Footer = () => {
  return(
    <div>
      <div className="row">
        <div className="col s6 offset-s3 m3 offset-m6  l4 offset-l4">
          <div className="chip">
            <i className="fa fa-github" aria-hidden="true"></i>
            &nbsp;&nbsp;
            <a href="https://github.com/thejsgirl" target="_blank">Github</a>
          </div>

          <div className="chip">
            <i className="fa fa-twitter" aria-hidden="true"></i>
            &nbsp;&nbsp;
            Twitter
          </div>

          <div className="chip">
            <i className="fa fa-envelope" aria-hidden="true"></i>  
            &nbsp;&nbsp;          
            Gmail
          </div>
        
        </div>
       
      </div>
    </div>
  )
}
export default  Footer;