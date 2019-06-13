import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

export class DisplayResults extends Component {

  render() {
    const {
      domain,
      pattern,
      organization,
      emails
    } = this.props.data
    return (
      organization && organization !== null ? (
        <Fragment>
          <h2 className='display-3 text-center'>{organization}</h2>
          <hr />
          <h3 className='display-4 text-secondary text-center'>{`${pattern}@${domain}`}</h3>
          <hr />
          <p>Employees</p>  
          <table className='table table-hover'>
            
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Position</th>
                <th scope="col">Department</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {emails.map((employee, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{`${employee.first_name} ${employee.last_name}`}</th>
                    <td>{employee.position}</td>
                    <td>{employee.department}</td>
                    <td>{employee.value}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </Fragment>
      ) : ''
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.data
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayResults)