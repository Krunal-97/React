import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
          <nav>
            <Link to = '/'>
              <img src = { logo } alt = "Home" />
            </Link>
            <ul>
              <Link to = '/'>
                <li>
                  All Products
                </li>
              </Link>
            </ul>
            <Link to = '/cart'>
              <button>
                <i className = "fas fa-cart-plus"></i>
              </button>
            </Link>
          </nav>
      </React.Fragment>
    )
  }
}
