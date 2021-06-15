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
const UpdateAccount = React.lazy(() => import("./pages/UpdateAccount"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Register = React.lazy(() => import("./pages/Register"));
const Penulis = React.lazy(() => import("./pages/Penulis"));
const TentangKami = React.lazy(() => import("./pages/TentangKami"));
const KritikSaran = React.lazy(() => import("./pages/KrtikSaran"));
const Kategori = React.lazy(() => import("./pages/BacaKategori"));
const UpdateTulisan = React.lazy(() => import("./pages/UpdateTulisan"));
const DukungKami = React.lazy(() => import("./pages/DukungKami"));
const Pengembang = React.lazy(() => import("./pages/Pengembang"));
const Newsletter = React.lazy(() => import("./pages/Newsletter"));
const Bantuan = React.lazy(() => import("./pages/Bantuan"));
const Pencarian = React.lazy(() => import("./pages/Pencarian"));

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
        <Route path="/update-tulisan/:slug" exact>
          <UpdateTulisan />
        </Route>
        <Route path="/bacaan" exact>
          <Bacaan />
        </Route>
        <Route path="/pencarian" exact>
          <Pencarian />
        </Route>
        <Route path="/bacaan/:slug" exact>
          <BacaOneBlog />
        </Route>
        <Route path="/akunku" exact>
          <MyAccount />
        </Route>
        <Route path="/akunku/update" exact>
          <UpdateAccount />
        </Route>
        <Route path="/penulis/:id" exact>
          <Penulis />
        </Route>
        <Route path="/bacaan/kategori/:kategori" exact>
          <Kategori />
        </Route>
        <Route path="/tentang-suaraUnhas" exact>
          <TentangKami />
        </Route>
        <Route path="/bantuan" exact>
          <Bantuan />
        </Route>
        <Route path="/dukung-kami" exact>
          <DukungKami />
        </Route>
        <Route path="/developper" exact>
          <Pengembang />
        </Route>
        <Route path="/newsletter" exact>
          <Newsletter />
        </Route>
        <Route path="/kritik-saran" exact>
          <KritikSaran />
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
        <Route path="/pencarian" exact>
          <Pencarian />
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
          <Kategori />
        </Route>
        <Route path="/tentang-kami" exact>
          <TentangKami />
        </Route>
        <Route path="/bantuan" exact>
          <Bantuan />
        </Route>
        <Route path="/dukung-kami" exact>
          <DukungKami />
        </Route>
        <Route path="/developper" exact>
          <Pengembang />
        </Route>
        <Route path="/newsletter" exact>
          <Newsletter />
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
