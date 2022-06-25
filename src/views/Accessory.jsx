import React, { useEffect, useState } from "react"
import BreadCrumbs from "../components/BreadCrumbs"
import { CardSection } from "../components/card"
import { useSelector } from "react-redux"
import styled from "styled-components"
import Filter from "../hook/Filter"

export default function Accessory() {
  const [accessory, setAccessory] = useState([])

  const list = useSelector((state) => state.setProduct.value)

  useEffect(() => {
    setAccessory(list.filter((item) => item.category === "jewelery"))
  }, [])

  return (
    <AccessoryWrapper>
      <BreadCrumbs from={"홈"} to={"액세서리"} />
      <Filter setFunction={setAccessory} />
      <CardSection title={"액세서리"} data={accessory} />
    </AccessoryWrapper>
  )
}

const AccessoryWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
