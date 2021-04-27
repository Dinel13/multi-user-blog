import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/header";
import Hero from "./components/hero/Hero";
import PenulisPop from "./components/Populer/PenulisPop";
import TulisanPop from "./components/Populer/TulisanPop";
import Baca from "./pages/Baca";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Tulis from "./pages/Tulis";

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
          <Tulis />
        </Route>
        <Route path="/baca" exact>
          <Baca />
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
        <Route path="/baca" exact>
          <Blog />
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
