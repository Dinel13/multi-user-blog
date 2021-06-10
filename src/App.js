import React, { Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import { login } from "./store/authSlice";

import Footer from "./components/footer/Footer";
import Header from "./components/header/header";
import Hero from "./components/hero/Hero";
import Loading from "./components/loading/LoadingFull";
import ErrorModal from "./components/modal/ErrorModal";
import PenulisPop from "./components/Populer/PenulisPop";
import TulisanPop from "./components/Populer/TulisanPop";
import TulisanTerbaru from "./components/Populer/TulisanTerbaru";
const Bacaan = React.lazy(() => import("./pages/Bacaan"));
const BacaOneBlog = React.lazy(() => import("./pages/BacaOneBlog"));
const CreateBlog = React.lazy(() => import("./pages/CreateBlog"));
const Login = React.lazy(() => import("./pages/Login"));
const MyAccount = React.lazy(() => import("./pages/MyAccount"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Register = React.lazy(() => import("./pages/Register"));
const Penulis = React.lazy(() => import("./pages/Penulis"));
const TentangKami = React.lazy(() => import("./pages/TentangKami"));
const Develop = React.lazy(() => import("./pages/Develop"));

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  React.useEffect(() => {
    localStorage.getItem("authUnhas") &&
      dispatch(login(JSON.parse(localStorage.getItem("authUnhas"))));
  });
  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Hero />
          <TulisanTerbaru />
          <TulisanPop />
          <PenulisPop />
        </Route>
        <Route path="/masuk" exact>
          <Redirect to="/" />
        </Route>
        <Route path="/daftar" exact>
          <Redirect to="/" />
        </Route>
        <Route path="/tulis" exact>
          <CreateBlog />
        </Route>
        <Route path="/bacaan" exact>
          <Bacaan />
        </Route>
        <Route path="/bacaan/:slug" exact>
          <BacaOneBlog />
        </Route>
        <Route path="/akunku" exact>
          <MyAccount />
        </Route>
        <Route path="/penulis/:id" exact>
          <Penulis />
        </Route>
        <Route path="/bacaan/kategori/:kategori" exact>
          <Penulis />
        </Route>
        <Route path="/tentang-kami" exact>
          <TentangKami />
        </Route>
        <Route path="/bantuan" exact>
          <Develop />
        </Route>
        <Route path="/dukung-kami" exact>
          <Develop />
        </Route>
        <Route path="/developper" exact>
          <Develop />
        </Route>
        <Route path="/newsletter" exact>
          <Develop />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Hero />
          <TulisanTerbaru />
          <TulisanPop />
          <PenulisPop />
        </Route>
        <Route path="/masuk" exact>
          <Login />
        </Route>
        <Route path="/daftar" exact>
          <Register />
        </Route>
        <Route path="/tulis" exact>
          <Redirect to="/masuk" />
        </Route>
        <Route path="/bacaan" exact>
          <Bacaan />
        </Route>
        <Route path="/bacaan/:slug" exact>
          <BacaOneBlog />
        </Route>
        <Route path="/penulis/:id" exact>
          <Penulis />
        </Route>
        <Route path="/akunku" exact>
          <Redirect to="/masuk" />
        </Route>
        <Route path="/bacaan/kategori/:kategori" exact>
          <Penulis />
        </Route>
        <Route path="/tentang-kami" exact>
          <TentangKami />
        </Route>
        <Route path="/bantuan" exact>
          <Develop />
        </Route>
        <Route path="/dukung-kami" exact>
          <Develop />
        </Route>
        <Route path="/developper" exact>
          <Develop />
        </Route>
        <Route path="/newsletter" exact>
          <Develop />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    );
  }
  return (
    <>
      <Header />
      <ErrorModal />
      <main>
        <Suspense fallback={<Loading />}>{routes}</Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
