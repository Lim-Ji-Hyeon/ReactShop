import React, { useEffect, useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import { CardSection } from '../components/card'
import { GET } from '../api/axios'
import styled from "styled-components";

export default function Digital() {
  const [digital, setDigital] = useState([])

  const selectFilter = (filter) => {
    switch(filter) {
      case "default" :
        return defaultFilter()
      case "highPrice" :
        return highPriceFilter()
      case "lowPrice" :
        return lowPriceFilter()
      case "popular" :
        return rateFilter()
    }
  }

  const defaultFilter = () => {
    setDigital((digital) =>{
      const sorted = digital.sort((a, b) => a.id - b.id)
      return ([...sorted])
    })
  }

  const rateFilter = () => {
    setDigital((digital) =>{
      const sorted = digital.sort((a, b) => b.rating.rate - a.rating.rate)
      return ([...sorted])
    })
  }

  const lowPriceFilter = () => {
    setDigital((digital) =>{
      const sorted = digital.sort((a, b) => a.price - b.price)
      return ([...sorted])
    })
  }

  const highPriceFilter = () => {
    setDigital((digital) =>{
      const sorted = digital.sort((a, b) => b.price - a.price)
      return ([...sorted])
    })
  }

  const getDigital = async () => {
    const products = await GET(`/products/category/electronics`).then(res => res)
    await setDigital(products)
    }

  useEffect(() => {
    getDigital()
  }, [])

  const checkOne = (check) => {
    const checkBoxes = document.getElementsByName("filter")
    for (let i = 0; i < checkBoxes.length; i++) {
      if (checkBoxes[i] !== check) {
        checkBoxes[i].checked = false;
      } else if (checkBoxes[i] === check) {
          if (checkBoxes[i].checked) {
            checkBoxes[i].onclick = selectFilter(checkBoxes[i].value)
          } else {
            checkBoxes[i].onclick = selectFilter("default")
          }     
       }
    }
  }

  return (
    <DigitalWrapper>
      <BreadCrumbs from={"홈"} to={"디지털"}/>
      <Filter>
        <FilterList>
          <input type="checkbox" id="highPrice" name="filter" value="highPrice" onChange={(e) => checkOne(e.target)}/>
          <FilterText htmlFor="highPrice">높은가격순</FilterText>
        </FilterList>
        <FilterList>
          <input type="checkbox" id="lowPrice" name="filter" value="lowPrice" onChange={(e) => checkOne(e.target)}/>
          <FilterText htmlFor="lowPrice">낮은가격순</FilterText>
        </FilterList>
        <FilterList>
          <input  type="checkbox" id="popular" name="filter" value="popular" onChange={(e) => checkOne(e.target)}/>
          <FilterText htmlFor="popular">인기순</FilterText>
        </FilterList>
      </Filter>
      <CardSection title={"디지털"} data={digital}/>
    </DigitalWrapper>
  )
}

const DigitalWrapper = styled.div`
  width : 100%;
  height : 100%;
  position : relative;
`

const Filter = styled.div`
  width : 40rem;
  height : 4rem;
  margin-left : 2rem;
` 

const FilterList = styled.div`
  display : inline-block;
  margin-right : 1rem;
`

const FilterText = styled.label`
  font-size : ${({theme}) => theme.font.size.normal};
  font-weight : ${({theme}) => theme.font.weight.normal};
  cursor : pointer;
  &:hover {
    color : ${({theme}) => theme.color.grey};
  }
`