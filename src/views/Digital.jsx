import React, { useEffect, useState } from "react"
import BreadCrumbs from "../components/BreadCrumbs"
import { CardSection } from "../components/card"
import { useSelector, useDispatch } from "react-redux"
import { getList } from "../redux/setProduct"
import styled from "styled-components"
import Filter from "../hook/Filter"

export default function Digital() {
  const [digital, setDigital] = useState([])

  const dispatch = useDispatch()
  const list = useSelector((state) => state.setProduct.value)

  useEffect(() => {
    dispatch(getList())
    setDigital(list.filter((item) => item.category === "electronics"))
  }, [])

  return (
    <DigitalWrapper>
      <BreadCrumbs from={"홈"} to={"디지털"} />
      <Filter setFunction={setDigital} />
      <CardSection title={"디지털"} data={digital} />
    </DigitalWrapper>
  )
}

const DigitalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
