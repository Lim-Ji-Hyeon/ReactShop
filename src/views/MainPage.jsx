import React, { useEffect, useState } from "react"
import { CardSection } from "../components/card"
import { useSelector } from "react-redux"
import Carousel from "../components/carousel/Carousel"
import img_shop_digital from "/img_shop_digital.jpeg"
import img_shop_fashion from "/img_shop_fashion.jpeg"
import img_shop_grocery from "/img_shop_grocery.jpeg"

export default function MainPage() {
  const [newProducts, setNewProducts] = useState([])

  const list = useSelector((state) => state.setProduct.value)

  useEffect(() => {
    setNewProducts(() => {
      const categoryList = ["electronics", "jewelery", "men's clothing", "women's clothing"]
      const productList = categoryList.map((category) => list?.filter((item) => item.category === category))
      return productList.map((item) => item[item.length - 1])
    })
  }, [])

  return (
    <>
      <Carousel images={[`${img_shop_digital}`, `${img_shop_fashion}`, `${img_shop_grocery}`]} />
      <CardSection title="신제품" data={newProducts} />
    </>
  )
}
