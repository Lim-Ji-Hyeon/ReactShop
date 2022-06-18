import React, { useEffect, useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import { CardSection } from '../components/card'
import { GET } from '../api/axios'
import styled from "styled-components";
import Filter from "../hook/Filter";


export default function Fashion() {
  const [fashion, setFashion] = useState([])

  const getFashion = async () => {
      const product = await Promise.all([
      GET("/products/category/men's clothing"),
      GET("/products/category/women's clothing")
      ])
      .then((res) => {return res[0].concat(res[1])})
      await setFashion(product)
    }

  useEffect(() => {
    getFashion()
  }, [])

  return (
    <FashionWrapper>
      <BreadCrumbs from={"홈"} to={"패션"}/>
      <Filter setFunction={setFashion}/>
      <CardSection title={"패션"} data={fashion}/>
    </FashionWrapper>
  )
}

const FashionWrapper = styled.div`
  width : 100%;
  height : 100%;
  position : relative;
`
