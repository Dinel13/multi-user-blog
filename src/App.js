import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/header";
import Hero from "./components/hero/Hero";
import PenulisPop from "./components/Populer/PenulisPop";
import TulisanPop from "./components/Populer/TulisanPop";
import Bacaan from "./pages/Bacaan";
import BacaOneBlog from "./pages/BacaOneBlog";
import CreateBlog from "./pages/CreateBlog";
import Login from "./pages/Login";
import MyAccount from "./pages/MyAccount";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

function App() {
  const token = useSelector((state) => state.auth.token);
  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Hero />
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
        <Route path="/baca" exact>
          <Bacaan />
        </Route>
        <Route path="/baca/:slug" exact>
          <BacaOneBlog />
        </Route>
        <Route path="/akunku" exact>
          <MyAccount />
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
        <Route path="/baca/:slug" exact>
          <BacaOneBlog />
        </Route> 
        <Route path="/akunku" exact>
          <Redirect to="/masuk" />
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
      <main>{routes}</main>
      <Footer />
    </>
  );
}

export default App;
