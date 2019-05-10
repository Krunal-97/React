import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'

export default class Product extends Component {
  render() {
    const { id, title, img, price } = this.props.product
    return (
      <React.Fragment>
        <div onClick = { () => console.log('clicked')}>
          <Link to = './ProductDetails'>
            <img src = { img } alt = 'Product Img' />
          </Link>
        </div>
        <div>
          <p>{ title }</p>
          <p>${ price }</p>
        </div>
      </React.Fragment>
    )
  }
}
