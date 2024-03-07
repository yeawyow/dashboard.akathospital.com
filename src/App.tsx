import React, { Suspense, useEffect, useState } from "react";
import DefaultLayout from "./layout/DefaultLayout";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import { Toaster } from "react-hot-toast";
import SignIn from "./pages/Authentication/SignIn";
import Nopage from "./pages/Nopage";
import ProtectRoute from "./protectRoute/ProtectRoute";

import Loader from "./common/Loader";
import Dashboard from "./pages/Dashboard";
export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />

      <Routes>
        {/* <Route path="/auth/signin" element={<SignIn />} /> */}
        <Route path="*" element={<Nopage />} />
        <Route element={<DefaultLayout />}>
          {routes.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  // <ProtectRoute>
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                  //  </ProtectRoute>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </>
  );
}
