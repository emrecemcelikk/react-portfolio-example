import './index.scss'
import React, { Component } from 'react'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router'

export default class index extends Component {
  render() {
    return (
      <div className="App" >
        <Sidebar />
        <div className="page" >
          <span className="tags top-tags" >
            &lt;body&gt;
          </span>
          <Outlet />
          <span className="tags bottom-tags" >
            &lt;/body&gt;
            <br />
            <span className="bottom-tag-html" >&lt;/html&gt;</span>
          </span>
        </div>
      </div>
    )
  }
}
