import React, { useEffect, useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import { CardSection } from '../components/card'
import { GET } from '../api/axios'
import styled from "styled-components";
import Filter from "../hook/Filter";

export default function Accessory() {
  const [accessory, setAccessory] = useState([])

  const getAccessory = async () => {
    const products = await GET(`/products/category/jewelery`).then(res => res)
    await setAccessory(products)
    }

  useEffect(() => {
    getAccessory()
  }, [])

  return (
    <AccessoryWrapper>
      <BreadCrumbs from={"홈"} to={"액세서리"}/>
      <Filter setFunction={setAccessory}/>
      <CardSection title={"액세서리"} data={accessory}/>
    </AccessoryWrapper>
  )
}

const AccessoryWrapper = styled.div`
  width : 100%;
  height : 100%;
  position : relative;
`
