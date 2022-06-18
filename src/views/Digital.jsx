import React, { useEffect, useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import { CardSection } from '../components/card'
import { GET } from '../api/axios'
import styled from "styled-components";
import Filter from "../hook/Filter"

export default function Digital() {
  const [digital, setDigital] = useState([])

  const getDigital = async () => {
    const products = await GET(`/products/category/electronics`).then(res => res)
    await setDigital(products)
    }

  useEffect(() => {
    getDigital()
  }, [])

  return (
    <DigitalWrapper>
      <BreadCrumbs from={"홈"} to={"디지털"}/>
      <Filter setFunction={setDigital}/>
      <CardSection title={"디지털"} data={digital}/>
    </DigitalWrapper>
  )
}

const DigitalWrapper = styled.div`
  width : 100%;
  height : 100%;
  position : relative;
`
