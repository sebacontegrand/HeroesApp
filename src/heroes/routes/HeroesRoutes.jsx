import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import { MarvelPages } from "../pages/MarvelPages"
import { DcPage } from "../pages/DcPage"
import {Hero} from "../pages/Hero"
import {Search} from "../pages/Search"

export const HeroesRoutes = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelPages />} />
                    <Route path="dc" element={<DcPage />} />
                    <Route path="search" element={<Search />} />
                    <Route path="Hero/:id" element={<Hero />} />
                    
                </Routes>

            </div>

        </>
    )
}
