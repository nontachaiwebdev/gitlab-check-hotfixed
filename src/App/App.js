import React, { Component } from 'react'
import './app.css'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    console.log(this)
    this.state = {
      accessToken: undefined,
      commit: undefined,
      commitList: []
    }
  }

  handleInputChange (event) {
    const { name, value } = event.target
    const updateState =  Object.assign({}, this.state, {[name]: value})
    this.setstate(updateState)
  }

  render () {
    const { handleInputChange } = this
    return (
      <div className='app-container'>
        <div className='left-section'>
          <div className='form'>
            <input
              className='access-token'
              name='accessToken'
              type='password'
              placeholder='gitlab access token'
              onChange={handleInputChange} />
            <input
              className='commit-number'
              name='commit'
              type='text'
              placeholder='commit number'
              onChange={handleInputChange} />
            <button>check!!!</button>
          </div>
        </div>
        <div className='right-section'>
        </div>
      </div>
    )
  }
}
