import React, {Component} from 'react'
import { Button, Form, input, Message} from 'semantic-ui-react'
import axios from 'axios'

const Success = (props)=> {
  if(!props.formSent){
    //console.log('no success')
    return null
  }
  return (
    <div>
      <Message
      success
      header='Success'
      content="One of our consultants will contact you shortly"
      />
    </div>)
}
class Contact extends Component {
  constructor(props){
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      state: '',
      suburb: '',
      comments: '',
      formSent: false
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleInputChange(event) {
    const target = event.target
    const name = target.name
    const value = target.value

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event){
    const self = this
    axios.post('./contactForm', {
      info: this.state
    })
    .then(function(res) {
      self.setState({formSent: true})
    })
    .catch(function(error) {
      console.log(error)
    })
    event.preventDefault();
  }
  render(){
    return (
      <div className='contactPage'>
        <div className='contactContainer'>
          <h2>Contact</h2>
          <div className='contactForm'>
            <Form success>
              <Form.Group widths='equal'>
                <Form.Field>
                  <label>First Name</label>
                  <input placeholder='First Name' name='firstName' onChange={this.handleInputChange} value={this.state.firstName}></input>
                </Form.Field>
                <Form.Field>
                  <label>Last Name</label>
                  <input placeholder='Last Name' name='lastName' onChange={this.handleInputChange} value={this.state.lastName}></input>
                </Form.Field>
              </Form.Group>

              <Form.Field>
                <label>Phone number</label>
                <input placeholder='Phone Number' name='phoneNumber' type='tel' onChange={this.handleInputChange} value={this.state.phoneNumber}></input>
              </Form.Field>
              <Form.Input label='Email' name='email' placeholder='joe@schmoe.com' onChange={this.handleInputChange} value={this.state.email}/>
              <Form.Group widths='equal'>
                <Form.Field>
                  <label>State</label>
                  <input placeholder='state' name='state' onChange={this.handleInputChange} value={this.state.state}></input>
                </Form.Field>
                <Form.Field>
                  <label>Suburb</label>
                  <input placeholder='Suburb' name='suburb' onChange={this.handleInputChange} value={this.state.suburb}></input>
                </Form.Field>
              </Form.Group>
              <Form.Field>
                <label>Comments</label>
                <textarea placeholder='comments' name='comments' onChange={this.handleInputChange} value={this.state.comments}></textarea>
              </Form.Field>
              <div>
                <Success formSent={this.state.formSent} />
              </div>
              <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
            </Form>
          </div>
        </div>
        <div className='contactDetails'>
          <h2>Phone:</h2>
          <h3>1300 695 644</h3>
          <h2>Address:</h2>
          <h3>PO Box 6051, South Yarra Vic 3141</h3>
          <h2>Email:</h2>
          <h3>admin@freedomenergy.com.au</h3>

        </div>
      </div>
    )
  }

}

export default Contact
