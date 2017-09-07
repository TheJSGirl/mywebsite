import React from 'react';

const Footer = () => {
  return(
    <div>
      <div className="row">
        <div className="col s10 offset-s1  m6 offset-m3  l4 offset-l4">
          <div className="chip">
            <i className="fa fa-github" aria-hidden="true"></i>
            &nbsp;&nbsp;
            <a href="https://github.com/thejsgirl" target="_blank">Github</a>
          </div>

          <div className="chip">
            <i className="fa fa-twitter" aria-hidden="true"></i>
            &nbsp;&nbsp;
            <a href="https://twitter.com/thejsgrl" target="_blank">Twitter</a>
          </div>

          <div className="chip">
            <i className="fa fa-envelope" aria-hidden="true"></i>  
            &nbsp;&nbsp;          
            <a href="mailto:prinegi100@gmail.com">Gmail</a>
           
          </div>
        
        </div>
       
      </div>
    </div>
  )
}
export default  Footer;