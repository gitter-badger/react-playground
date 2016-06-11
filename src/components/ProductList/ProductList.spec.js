import React from 'react'
import { mount } from 'enzyme'
import ProductList from './ProductList'
import productImage from '../../../test/fixtures/dummyProduct.jpg'

describe('component <ProductList />', () => {
  const products = [
    { id: 777, description: 'product description', productImage },
    { id: 666, description: 'product description' }
  ]
  const messages = {
    noProducts: 'no Products',
    title: 'Products',
    addProduct: 'Add a random product'
  }
  const onAddProduct = sinon.spy()
  const onDeleteProduct = sinon.spy()
  const wrapper = mount(<ProductList products={products} messages={messages} addProduct={onAddProduct} deleteProduct={onDeleteProduct} />)
  const wrapperEmpty = mount(<ProductList products={[]} messages={messages} addProduct={onAddProduct} deleteProduct={onDeleteProduct} />)

  it('can render messages without a product', () => {
    expect(wrapperEmpty.html().includes(messages.title)).to.equal(true)
    expect(wrapperEmpty.html().includes(messages.noProducts)).to.equal(true)
  })

  it('can render messages with a product', () => {
    expect(wrapper.html().includes(messages.addProduct)).to.equal(true)
  })

  it('can render product informations', () => {
    expect(wrapper.html().includes(products[0].description)).to.equal(true)
    expect(wrapper.html().includes(products[0].id)).to.equal(true)
  })

  it('can handle addProduct', () => {
    wrapper.find('.addProduct').simulate('click')
    expect(onAddProduct.calledOnce).to.equal(true)
  })

  it('can handle deleteProduct', () => {
    wrapper.find('.deleteProduct-777').simulate('click')
    expect(onDeleteProduct.calledOnce).to.equal(true)
  })
})
