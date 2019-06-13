import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getEmails } from '../redux/actions/dataActions'

export class UserInput extends Component {

  state = {
    input: ''
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  } 

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.getEmails(this.state.input)
  }

  render() {
    return (
      <Fragment>
        <h2 className='text-secondary'>Enter the business domain you want to hack</h2>
        <h5 className='text-secondary'>i.e "example.com"</h5>
        <hr />
        <hr />
        <form>
          <div className='form-group' style={{ width: '50%', margin: 'auto'}}>
            <label htmlFor='email-input' >Domain</label>
            <input 
              type='text' 
              className='form-control' 
              id='email-input' 
              placeholder='Enter Domain...'
              onChange={this.handleChange}
              />
              <hr />
              <button className='btn btn-primary' onClick={this.handleSubmit}>Submit</button>
          </div>
        </form>
      </Fragment>
    )
  }
}

const mapDispatchToProps = {
  getEmails
}

const mapStateToProps = state => ({
  data: state.data
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInput)
