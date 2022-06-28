import React, { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux/es/exports"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import Button from "../components/Button"

export default function Search({ mode }) {
  const [searchInput, setSearchInput] = useState("")
  const [searchListView, setSearchListView] = useState(false)
  const [searchList, setSearchList] = useState([])

  const list = useSelector((state) => state.setProduct.value)

  const searchElement = useRef()
  const searchValue = useRef()

  const linkClick = (data) => {
    setSearchListView(false)
    searchValue.current.value = data
  }

  const items = searchList
    .filter((data) => {
      if (searchInput === "") {
        return data
      } else if (data.title[0].toLowerCase().includes(searchInput)) {
        return data
      }
    })
    .map((data, key) => {
      return (
        <ItemList key={`search_${key}`}>
          <Item
            onClick={() => {
              linkClick(data.title)
            }}
            to={`/product/${data.id}`}
          >
            {data.title}
          </Item>
        </ItemList>
      )
    })

  const onChangeSearchInput = (event) => {
    let keyword = event.target.value
    setSearchInput(keyword)

    if (keyword !== "") {
      setSearchListView(true)
    }
  }

  const searchClick = () => {
    setSearchListView(!searchListView)
  }

  const handleCloseSearch = (e) => {
    if (searchListView && !searchElement.current.contains(e.target)) setSearchListView(false)
  }

  useEffect(() => {
    setSearchList(
      list.map((item) => {
        return { title: item.title, id: item.id }
      })
    )
  }, [])

  useEffect(() => {
    document.addEventListener("click", handleCloseSearch)
    return () => {
      document.removeEventListener("click", handleCloseSearch)
    }
  })

  return (
    <SearchWrapper ref={searchElement} onClick={searchClick}>
      <Hidden>
        <Button color={mode} size={"xSmall"}>
          <FontAwesomeIcon icon={faMagnifyingGlass} alt="검색" />
        </Button>
      </Hidden>
      <SearchInput
        ref={searchValue}
        mode={mode}
        type="text"
        placeholder="검색"
        onChange={(e) => onChangeSearchInput(e)}
      ></SearchInput>
      {searchListView && (
        <SearchViewWrapper>
          <Items>
            {items.length === 0 && <NonItem>찾는 단어가 없습니다.</NonItem>}
            {items}
          </Items>
        </SearchViewWrapper>
      )}
    </SearchWrapper>
  )
}

const SearchWrapper = styled.div`
  width: 13rem;
  height: 5rem;
  display: inline-block;
  margin-right: 0.5rem;
`

const Hidden = styled.div`
  display: none;
`

const SearchViewWrapper = styled.div`
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

const SearchInput = styled.input`
  width: 12rem;
  height: 2.5rem;
  background-color: ${(props) => (props.mode === "black" ? "#696969" : "#cdcdcd")};
  border-radius: 0.5rem;
  border: 0;
  color: ${(props) => (props.mode === "black" ? "white" : "black")};
  padding-left: 0.6rem;
  margin: 0.6rem 0 0 0.5rem;
  ::placeholder {
    color: ${(props) => (props.mode === "black" ? "white" : "black")};
  }
`

const Item = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
`

const NonItem = styled.li`
  font-size: ${({ theme }) => theme.font.normal};
  padding-left: 1rem;
`
