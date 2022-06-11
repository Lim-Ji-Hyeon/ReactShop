import React, { useEffect, useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import { CardSection } from '../components/card'
import { GET } from '../api/axios'

export default function Accessory() {
  const [accessory, setAccessory] = useState([])

  const getAccessory = async () => {
    const products = await Promise.all([GET('/products/category/jewelery')]).then((res) => {return res[0]})
    await setAccessory(products)
    }

  useEffect(() => {
    getAccessory()
  }, [])

  return (
    <>
      <BreadCrumbs from={"홈"} to={"액세서리"}/>
      <CardSection title={"액세서리"} data={accessory}/>
    </>
  )
}