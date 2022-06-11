import React, { useEffect, useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import { CardSection } from '../components/card'
import { GET } from '../api/axios'

export default function Digital() {
  const [digital, setDigital] = useState([])

  const getDigital = async () => {
    const products = await Promise.all([GET('/products/category/electronics')]).then((res) => {return res[0]})
    await setDigital(products)
    }

  useEffect(() => {
    getDigital()
  }, [])

  return (
    <>
      <BreadCrumbs from={"홈"} to={"디지털"}/>
      <CardSection title={"디지털"} data={digital}/>
    </>
  )
}