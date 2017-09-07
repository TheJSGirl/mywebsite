import React, {Component} from 'react';

class Contact extends Component{
  constructor(props){
    super();
    this.state ={
      isSending: false,
      isSent: false,
      isSendingFailed: false
    }
  }

  //handle functon of form 
  _handleSubmit(e){
    e.preventDefault();

    // take data from form 
   const name = this.refs.name.value;
   const email = this.refs.email.value;
   const message= this.refs.message.value;

   if(!name || !email){
     return;
   }

    this.setState({isSending: true});

    fetch('/api/messages', {method: 'POST', body:{
      senderName: name,
      senderEmail: email,
      senderMessage: message
    }})
    .then((data) => {
      this.setState({
        isSending: false,
        isSent: true
      });
      
      return console.log(data);

    })
    .catch( (err) => {
      this.setState({
        isSending: false,
        isSendingFailed: true
      });
      return console.log(err);
    });

    
    
  }

  render() {

    const Form = <form  className="input-field col s12" onSubmit={this._handleSubmit.bind(this)}>
                    <input id="name" ref="name" type="text" className="validate" placeholder="Your Name"/>
                    <input id="email" ref="email" type="email" className="validate" placeholder="Your email"/><br/>
                    <textarea id="textarea1" ref="message" className="materialize-textarea" placeholder="Leave message"></textarea>
                    <button className="waves-effect waves-light btn-large" type="submit">Send</button>
                </form>;

    const Preloader =  <div ><br/>
                          <h4 className="center">Sending your message...</h4>
                          <div className="col s6 offset-s3">
                            <div className="progress">
                              <div className="indeterminate"></div>
                            </div>
                          </div>
                        </div>
        

    return(
      <div className="container">
        <h1 className="center">Contact Me</h1>
        <p className="center">Wating to hear from you..</p>
        
        <div className="row">
            {
              (this.state.isSent) ? <h5 className="center" style={{color: 'seagreen'}}>I got your message. Thanks</h5>: ''
            }
            {
              (this.state.isSendingFailed) ?  <h5 className="center" style={{color: 'red'}}>Failed to send</h5> : ''
            }
            {
              (this.state.isSending) ? Preloader : Form
            }
          
        </div>
      </div>
    );
  }
}

export default Contact; 