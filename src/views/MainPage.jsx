import React, { useEffect, useState } from "react"
import { CardSection } from "../components/card"
import { useSelector, useDispatch } from "react-redux"
import { getList } from "../redux/setProduct"

export default function MainPage() {
  const [newProducts, setNewProducts] = useState([])

  const dispatch = useDispatch()
  const list = useSelector((state) => state.setProduct.value)

  const category = ["electronics", "jewelery", "men's clothing", "women's clothing"]
  let categoryList = {}
  let newList = []

  useEffect(() => {
    dispatch(getList())
    category.forEach(
      (itemCategory) => (categoryList[itemCategory] = list.filter((item) => item.category === itemCategory))
    )
    category.forEach((category) => newList.push(categoryList[category][categoryList[category].length - 1]))
    setNewProducts(newList)
  }, [])

  return (
    <>
      <CardSection title="신제품" data={newProducts} />
    </>
  )
}
