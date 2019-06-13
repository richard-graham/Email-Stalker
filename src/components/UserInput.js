import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

export class UserInput extends Component {
  render() {
    return (
      <Fragment>
        <h2 className='text-secondary'>Enter the Domain you want to search</h2>
        <hr />
        <h4 className='text-secondary'>ie "example.com"</h4>
        <hr />
        <form>
          <div className='form-group' style={{ width: '50%', margin: 'auto'}}>
            <label for='email-input' >Domain</label>
            <input 
              type='text' 
              className='form-control' 
              id='email-input' 
              placeholder='Enter Domain...'
      
              />
          </div>
        </form>
      </Fragment>
    )
  }
}

const mapDispatchToProps = {
  // getEmail
}

const mapStateToProps = state => ({
  data: state.data
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInput)
