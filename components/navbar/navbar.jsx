import React from "react";
import { Navbar, Button, Link, Text, useTheme,Spacer } from "@nextui-org/react";
import { Layout } from './layout.jsx';
export default function Navbar1() {
  const variant="highlight-rounded";
  const activeColor="secondary";

  const {isDark} = useTheme();
  const [activeProducts, setActiveProducts] = React.useState(true);
  const [activeUsers, setActiveUsers] = React.useState(true);
  const [activeOrders, setActiveOrders] = React.useState(true);
  const [activeNV, setActiveNV] = React.useState(true);

  const handlerProducts = () => {
    setActiveProducts(true);
    setActiveOrders(false);
    setActiveNV(false);
    setActiveUsers(false);
  }
  const handlerNV = () => {
    setActiveProducts(false);
    setActiveOrders(false);
    setActiveNV(true);
    setActiveUsers(false);
  }

  const handlerOrders = () => {
    setActiveProducts(false);
    setActiveOrders(true);
    setActiveNV(false);
    setActiveUsers(false);
  }
  const handlerUsers = () => {
    setActiveProducts(false);
    setActiveOrders(false);
    setActiveNV(false);
    setActiveUsers(true);
  }

  return (
    <Layout>
      <Navbar style={{backgroundColor:"#EBCEF5"}} sx={{outerWidth:"100px"}} isBordered={isDark} variant="sticky">
        <Navbar.Brand>
          <Text style={{ fontWeight:"lighter"}} b hideIn="xs">
            Bevanderia
          </Text>
        </Navbar.Brand>
        <Navbar.Content activeColor={activeColor} hideIn="xs" variant={variant}>
          <Navbar.Link style={{ font:"status-bar"}} isActive={activeProducts} onPress={handlerProducts} href='/products'>PRODOTTI</Navbar.Link>
          <Spacer x="1.3"/>
          <Navbar.Link style={{ font:"status-bar"}} isActive={activeNV} onPress={handlerNV} href='/users'>UTENTI</Navbar.Link>
          <Spacer x="1.3"/>
          <Navbar.Link style={{ font:"status-bar"}} isActive={activeUsers} onPress={handlerUsers} href='/orders'>ORDINI</Navbar.Link>
          <Spacer x="1.3"/>
          <Navbar.Link style={{ font:"status-bar"}} isActive={activeOrders} onPress={handlerOrders}  href='/account'>ACCOUNT</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <Button style={{ font:"revert-layer" }} auto flat as={Link} color={activeColor}   
              onPress={()=>{ 
              localStorage.removeItem("token");
              localStorage.removeItem("email");
              localStorage.removeItem("name");
              localStorage.removeItem("surname");
              localStorage.removeItem("id");
              window.location.reload();}}>
              Logout
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>  
    </Layout>
  )
}

