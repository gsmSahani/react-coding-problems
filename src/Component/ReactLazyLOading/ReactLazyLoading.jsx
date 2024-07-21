import React, { Suspense } from "react";
// import Home from "./Home";
// import Lorem from "./Lorem";

const Lorem = React.lazy(() => import("./Lorem"));
const Home = React.lazy(() => import("./Home"));
const ReactLazyLoading = () => {
  return (
    <>
      <div>
        <Suspense fallback={<div>Loading.....</div>}>
          <Home />
          <Lorem />
        </Suspense>
      </div>
    </>
  );
};

export default ReactLazyLoading;
