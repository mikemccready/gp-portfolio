// Contact.js
import React from 'react';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      formStatusMessage: 'Send'
    }
    this.sendEmail = this.sendEmail.bind(this);
  }

  handleChange(e) {
    const input = e.target.getAttribute('id');

    if (input === 'contact-name') {
      this.setState({name: e.target.value});
    }else if (input === 'contact-email') {
      this.setState({email: e.target.value});
    }else if (input === 'contact-message') {
      this.setState({message: e.target.value});
    }
  }

  sendEmail(e) {
    let that = this;

    e.preventDefault();
    this.setState({formStatusMessage: 'Sending Message..'});

    const messageData = {
      _replyto: this.state.email,      
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if(xhr.status === 200 && xhr.readyState === 4) {
        that.setState({formStatusMessage: 'Message Received, Thank you!'});
      }     
    }
    xhr.open('POST', 'https://formspree.io/michaeljmccready@gmail.com');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send(JSON.stringify(messageData));
  }

  render() {
    return (
      <div className="contact-page">
        <form onChange={(e) => {this.handleChange(e)}}>
          <h2>CONTACT</h2>
          <div>
            <label>Name</label>
            <input id="contact-name" placeholder="name" name="name" value={this.state.name} />
          </div>
          <div>
            <label>Email</label>
            <input id="contact-email" placeholder="email" name="_replyto" value={this.state.email} />
          </div>
          <div>
            <label>How can I help?</label>
            <textarea id="contact-message" placeholder="Anything at all.." name="message" value={this.state.message} />
          </div>
          <button onClick={(e) => {this.sendEmail(e)}}>{this.state.formStatusMessage}</button>
        </form>
      </div>
    )
  }
}