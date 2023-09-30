import Header from "components/Header/Header";
import React, {Suspense} from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "components/Loader/Loader";

export const Layout = () => {
    return (
        <div>
            <Header />
            <Suspense fallback={<Loader/>}>
              <Outlet/>  
            </Suspense>
        </div>
    )
}