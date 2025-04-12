import {Route, Routes} from "react-router";
import HomePage from "./components/pages/home-page/HomePage.tsx";
import CharPage from "./components/pages/char-page/CharPage.tsx";
import ErrorPage from "./components/pages/error-page/ErrorPage.tsx";
import Layot from "./components/layot/Layot.tsx";

function App() {

    return (
        <Routes>
            <Route path='/' element={<Layot />}>
                <Route index element={<HomePage />} />
                <Route path='char' element={<CharPage />} />
            </Route>
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    );
}

export default App;
