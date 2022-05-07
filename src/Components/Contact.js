import React, { useState } from 'react'
import * as axios from 'axios';
import { Button, Form, Row } from 'react-bootstrap';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const submitEmail = () => {
    axios({
      method: "POST",
      url: "/send",
      data: { name, email, subject, message }
    }).then((response) => {
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  const resetForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }

  return (
    <div className='jumbotron'>
      <h1 className="display-4">Contact Us!</h1>
      <p className="lead">Let us know what you think! In order to provide better service,
        please do not hesitate to give us your feedback. Thank you!</p>
      <hr className="my-4" />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <Form id="contact-form" onSubmit={submitEmail}
                method="POST">
                <Form.Group>
                  <Row className="row">
                    <div className="col-md-6">
                      <input placeholder="Name" id="name" type="text"
                        className="form-control" required value={name}
                        onChange={e => setName( e.target.value )} />
                    </div>
                    <div className="col-md-6">
                      <input placeholder="Email" id="email" type="email"
                        className="form-control" aria-describedby="emailHelp"
                        required value={email}
                        onChange={e => setEmail( e.target.value )} />
                    </div>
                  </Row>
                </Form.Group>
                <Form.Group className='form-group'>
                  <input placeholder="Subject" id="subject" type="text"
                    className="form-control" required value={subject}
                    onChange={e => setSubject( e.target.value )} />
                </Form.Group>
                <Form.Group className='form-group'>
                  <textarea placeholder="Message" id="message"
                    className="form-control" rows="6"
                    required value={message}
                    onChange={e => setMessage( e.target.value )} />
                </Form.Group>
                <Form.Group className='form-group'>
                  <div className='button-group'>
                    <Button type="submit" className="primary-btn submit">Submit</Button>
                    <Button className='btn btn-danger' onClick={() => resetForm()}>Reset</Button>
                  </div>
                </Form.Group>
              </Form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact