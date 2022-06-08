import React, { useEffect, useState } from 'react'
import { CardSection } from '../components/card'
import { GET } from '../api/axios'
export default function MainPage() {
  const [newProducts, setNewProducts] = useState([])

  const getNewProducts = async () => {
    const products = await Promise.all([
      GET('/products/category/electronics'),
      GET('/products/category/jewelery'),
      GET("/products/category/men's clothing"),
      GET("/products/category/women's clothing"),
    ]).then((res) => {
      return res.map(
        (category) => category[category.length - 1]
      )
    })
    await setNewProducts(products)
  }

  useEffect(() => {
    getNewProducts()
  }, [])
  return (
    <>
      <CardSection title='신제품' data={newProducts} />
    </>
  )
}
