import React from "react";
import { Navbar, Button, Link, Text, useTheme,Spacer } from "@nextui-org/react";
import { Layout } from './layout.jsx';
export default function Navbar1() {
  const variant="highlight-rounded";
  const activeColor="secondary";

  const {isDark} = useTheme();
  const [activeProducts, setActiveProducts] = React.useState(true);
  const [activeUsers, setActiveUsers] = React.useState();
  const [activeOrders, setActiveOrders] = React.useState();
  const [activeNV, setActiveNV] = React.useState();

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
      <Navbar sx={{outerWidth:"100px"}} isBordered={isDark} variant="sticky">
        <Navbar.Brand>
          <Text style={{ font:"status-bar"}} b color="inherit" hideIn="xs">
            BEVANDERIA
          </Text>
        </Navbar.Brand>
        <Navbar.Content activeColor={activeColor} hideIn="xs" variant={variant}>
          <Navbar.Link style={{ font:"status-bar"}} isActive={activeProducts} onPress={handlerProducts} href='/products'>PRODOTTI</Navbar.Link>
          <Spacer x="0.9"/>
          <Navbar.Link style={{ font:"status-bar"}} isActive={activeNV} onPress={handlerNV} href='/nutritionalValues'>VALORI NUTRIZIONALI</Navbar.Link>
          <Spacer x="0.9"/>
          <Navbar.Link style={{ font:"status-bar"}} isActive={activeUsers} onPress={handlerUsers} href='/users'>UTENTI</Navbar.Link>
          <Spacer x="0.9"/>
          <Navbar.Link style={{ font:"status-bar"}} isActive={activeOrders} onPress={handlerOrders}  href='/orders'>ORDINI</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link style={{ font:"status-bar"}} color="inherit" href='/account'>
            Account
          </Navbar.Link>
          <Navbar.Item>
            <Button style={{ font:"status-bar"}} auto flat as={Link} color={activeColor} href="#">
              Logout
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>  
    </Layout>
  )
}

