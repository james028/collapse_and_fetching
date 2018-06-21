import React, { Component } from 'react'
import './collapse.css'

export default class Collapse extends Component {
    constructor() {
        super();
        this.state = {
            isShow: false
        };
    }

    handleClick = (e) => {
        console.log("ok");
        e.preventDefault();
        this.setState({
            isShow: !this.state.isShow
        })
    }

  render() {
    return (
      <div className={`card ${this.state.isShow ? "is-show-collapse" : ""}`} onClick={this.handleClick}>
          <div className="panel-heading">
            {this.props.title}
          </div>
          <div className="card-collapse">
            <div className="card-body">
                <p>{this.props.address}{this.props.text}</p>
                <p>{this.props.mail}</p>
            </div>
          </div>
      </div>
    )
  }
}
