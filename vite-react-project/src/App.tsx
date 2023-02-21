import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Error } from "./components/Error";
import { Layout } from "./components/Layout";
import { SecondHome } from "./components/SecondHome";
import { FrontPageImage } from "./components/FrontPageImage";
import { Product } from "./components/Product";

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
              <Product />
            </Layout>
          }
        />

        <Route path="*" element={<Error />} />
        <Route path="/collection/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
