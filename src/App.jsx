import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {ThemeProvider} from "styled-components";
import theme from "./utils/theme"
import Header from "../src/components/Header"
import Fashion from "../src/views/Fashion"
import Accessory from "../src/views/Accessory"
import Digital from "../src/views/Digital"
import Cart from "../src/views/Cart"
import Footer from "../src/components/Footer"
import MainPage from "./views/MainPage";
import ProductPage from "./views/ProductPage";
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'
import {store} from "../src/store/index"

function App() {
  let persistor = persistStore(store)
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header/>
            <Routes>
              <Route path={"/"} element={<MainPage/>}/>
              <Route path={"/fashion"} element={<Fashion/>}/>
              <Route path={"/accessory"} element={<Accessory/>}/>
              <Route path={"/digital"} element={<Digital/>}/>
              <Route path={"/myCart"} element={<Cart/>}/>
            </Routes>
          </BrowserRouter>
          <Footer/>
        </ThemeProvider>
      </PersistGate>
    </Provider>
    )
}

export default App
