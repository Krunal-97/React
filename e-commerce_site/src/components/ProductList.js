import React, { Component } from 'react'
import Product from './Product'
import { ProductConsumer } from '../context'

export default class ProductList extends Component {
  
  render() {
    // console.log(this.state.products)
    return (
      <React.Fragment>
        <ProductConsumer>
          { value => {
              return value.products.map( product => {
                return <Product key = { product.id } product = {product}/>
              })
          }}
        </ProductConsumer>
      </React.Fragment>
    )
  }
}
