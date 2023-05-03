import React from "react";
import { Navbar, Button, Link, Text, useTheme,Spacer } from "@nextui-org/react";
import { Layout } from './layout.jsx';

export default function Navbar1() {
  const variant="highlight-rounded";
  const activeColor="secondary";

  const {isDark} = useTheme();
  
  return (
    <Layout>
      <Navbar isBordered={isDark} variant="sticky">
        <Navbar.Brand>
          <Text style={{ font:"status-bar"}} b color="inherit" hideIn="xs">
            BEVANDERIA
          </Text>
        </Navbar.Brand>
        <Navbar.Content activeColor={activeColor} hideIn="xs" variant={variant}>
          <Navbar.Link style={{ font:"status-bar"}} isActive href='../../pages/products.jsx'>PRODOTTI</Navbar.Link>
          <Spacer x="0.9"/>
          <Navbar.Link style={{ font:"status-bar"}} href='../../pages/nutritionalValues.jsx'>VALORI NUTRIZIONALI</Navbar.Link>
          <Spacer x="0.9"/>
          <Navbar.Link style={{ font:"status-bar"}} href='../../pages/users.jsx'>UTENTI</Navbar.Link>
          <Spacer x="0.9"/>
          <Navbar.Link style={{ font:"status-bar"}} href='../../pages/orders.jsx'>ORDINI</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link style={{ font:"status-bar"}} color="inherit" href='../../pages/account.jsx'>
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
