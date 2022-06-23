import React, { useEffect, useState } from "react"
import { CardSection } from "../components/card"
import { useSelector, useDispatch } from "react-redux"
import { getList } from "../redux/setProduct"
import Carousel from "../components/carousel/Carousel"
import img_shop_digital from "/img_shop_digital.jpeg"
import img_shop_fashion from "/img_shop_fashion.jpeg"
import img_shop_grocery from "/img_shop_grocery.jpeg"

export default function MainPage() {
  const [newProducts, setNewProducts] = useState([])
  const dispatch = useDispatch()
  const list = useSelector((state) => state.setProduct.value)
  const category = ["electronics", "jewelery", "men's clothing", "women's clothing"]
  let categoryList = {}

  useEffect(() => {
    dispatch(getList())
    category.forEach(
      (itemCategory) => (categoryList[itemCategory] = list.filter((item) => item.category === itemCategory))
    )
    const newList = category.map((category) => categoryList[category][categoryList[category].length - 1])
    setNewProducts(() => [...newList])
  }, [])

  return (
    <>
      <Carousel images={[`${img_shop_digital}`, `${img_shop_fashion}`, `${img_shop_grocery}`]} />
      <CardSection title="신제품" data={newProducts} />
    </>
  )
}
