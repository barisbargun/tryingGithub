import { BrowserRouter, Route, Routes } from "react-router-dom"
import App3 from "./tutorials/tut03/App3"
import { StoreProvider } from "easy-peasy"
import store from "./tutorials/tut03/store"

const App = () => {

  return (

    <StoreProvider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<App3 />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
    
  )
}

export default App
