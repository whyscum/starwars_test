import {Outlet} from "react-router";
import Header from "../header/Header.tsx";

const Layot = () => {
    return (
        <>
            <Header />
            <main className="main">
                <Outlet/>
            </main>
        </>
    );
};

export default Layot;