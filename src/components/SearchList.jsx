import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { getList } from "../redux/setProduct"
import styled from "styled-components"
import { Link } from "react-router-dom"

export default function SearchList({ keyword }) {
  const [productsList, setProductsList] = useState([])
  const [productListView, setProductListView] = useState(true)

  const dispatch = useDispatch()
  const list = useSelector((state) => state.setProduct.value)

  const linkClick = () => {
    setProductListView(false)
  }

  useEffect(() => {
    dispatch(getList())
    setProductsList(
      list.map((item) => {
        return { title: item.title, id: item.id }
      })
    )
  }, [])

  const items = productsList
    .filter((data) => {
      if (keyword === null) {
        return data
      } else if (data.title[0].toLowerCase().includes(keyword)) {
        return data
      }
    })
    .map((data, key) => {
      return (
        <ItemList key={`search_${key}`}>
          <Link onClick={linkClick} to={`/product/${data.id}`}>
            {data.title}
          </Link>
        </ItemList>
      )
    })

  return (
    productListView && (
      <SearchWrapper>
        <Items>{items}</Items>
      </SearchWrapper>
    )
  )
}

const SearchWrapper = styled.div`
  width: 12rem;
  height: 20rem;
  overflow: auto;
  background-color: white;
  z-index: 12;
  border: 1px solid black;
  margin-left: 0.8rem;
`

const Items = styled.ul`
  padding: 0;
`

const ItemList = styled.li`
  list-style: none;
  margin: 0.5rem;
  &:hover {
    background-color: ${({ theme }) => theme.color.grey};
  }
  cursor: pointer;
`
