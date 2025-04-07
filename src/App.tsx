import Header from "./components/header/Header.tsx";
import {Route, Routes} from "react-router";
import MainPage from "./components/pages/main-page/MainPage.tsx";
import CharPage from "./components/pages/char-page/CharPage.tsx";
import ErrorPage from "./components/pages/error-page/ErrorPage.tsx";

function App() {

  return (
      <div>
        <Header />
          <Routes>
              <Route path='/' element={<MainPage/>}/>
              <Route path='/char' element={<CharPage/>}/>
              <Route path='*' element={<ErrorPage/>}/>
          </Routes>
      </div>
  )
}

export default App
