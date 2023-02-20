import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Error } from "./components/Error";
import { Layout } from "./components/Layout";
import { SecondHome } from "./components/SecondHome";
import { FrontPageImage } from "./components/FrontPageImage";
import { ProductContent } from "./components/ProductContent";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <FrontPageImage />
            </Layout>
          }
        />
        <Route
          path="/collection"
          element={
            <Layout>
              <SecondHome />
            </Layout>
          }
        />
        <Route
          path="/collection/:id"
          element={
            <Layout>
              <ProductContent />
            </Layout>
          }
        />
        <Route
          path="/second"
          element={
            <Layout>
              <SecondHome />
            </Layout>
          }
        />

        <Route
          path="*"
          element={
            <Layout>
              <Error />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
