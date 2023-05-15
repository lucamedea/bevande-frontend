import Orders from "./orders.jsx";
import Products from "./products.jsx";
import Account from "./account.jsx";
import Users from "./users.jsx"
import NutritionalValues from "./nutritionalValues.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Grid } from "@nextui-org/react";
import useToken from "../components/hooks/useToken";
import NavBar from "../components/navbar/navbar";
import Login from "./login.jsx";

function Router() {

    const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken}  />;
  }

  return ( 
    <>
      <BrowserRouter>
        <Grid.Container>
          <Grid>
            <NavBar />
          </Grid>
          <Grid>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/nutritionalValues" element={<NutritionalValues />} />
              <Route path="/users" element={<Users />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/account" element={<Account />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </Grid>
        </Grid.Container>
      </BrowserRouter>
    </>
  );
}

export default Router;
