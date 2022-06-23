import React, { useEffect, useState } from "react"
import BreadCrumbs from "../components/BreadCrumbs"
import { CardSection } from "../components/card"
import { useSelector, useDispatch } from "react-redux"
import { getList } from "../redux/setProduct"
import styled from "styled-components"
import Filter from "../hook/Filter"

export default function Accessory() {
  const [accessory, setAccessory] = useState([])

  const dispatch = useDispatch()
  const list = useSelector((state) => state.setProduct.value)

  useEffect(() => {
    dispatch(getList())
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
