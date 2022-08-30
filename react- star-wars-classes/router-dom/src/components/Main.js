import React from "react";
import { navItems } from "../utils/constants";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const Main = () => {
  return (
    <Routes>
      {
        navItems.map((Elem)=>(["/", "/:heroId", `${Elem.route}/:heroId`, Elem.route].map(
            (path) => (
              <Route
                path={path}
                key={path}
                element={Elem.tag}
              />
            )
          )))
      }
    <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  );
};

export default Main;
