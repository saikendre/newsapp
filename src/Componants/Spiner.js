import React, { Component } from 'react'
import Spinner from '../gif/Spinner-2.gif';

export default class Spiner extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center'>
        <img src={Spinner} alt="loading" />
      </div>
    )
  }
}
