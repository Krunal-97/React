import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data'

const ProductContext = React.createContext()

class ProductProvider extends Component {

    state = {
        products: storeProducts,
        detailProduct: detailProduct
    }

    handleProductDetail = () => {
        console.log('handle product details')
    }
    handleAddToCart = () => {
        console.log('handle add to cart')
    }
    
    render() {
    return (
        <ProductContext.Provider 
        value = {
            {
                ...this.state,
                handleProductDetail: this.handleProductDetail,
                handleAddToCart: this.handleAddToCart
            }
        }>
        { this.props.children }
        </ProductContext.Provider>
    )
    }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }
