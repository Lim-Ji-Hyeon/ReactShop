import React, { useEffect, useState } from "react"
import BreadCrumbs from "../components/BreadCrumbs"
import { CardSection } from "../components/card"
import { useSelector, useDispatch } from "react-redux"
import { getList } from "../redux/setProduct"
import styled from "styled-components"
import Filter from "../hook/Filter"

export default function Fashion() {
  const [fashion, setFashion] = useState([])

  const dispatch = useDispatch()
  const list = useSelector((state) => state.setProduct.value)

  useEffect(() => {
    dispatch(getList())
    setFashion(list.filter((item) => item.category === "women's clothing" || item.category === "men's clothing"))
  }, [])

  return (
    <FashionWrapper>
      <BreadCrumbs from={"홈"} to={"패션"} />
      <Filter setFunction={setFashion} />
      <CardSection title={"패션"} data={fashion} />
    </FashionWrapper>
  )
}

const FashionWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
