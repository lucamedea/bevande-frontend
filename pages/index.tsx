import TextField from '../components/textField.jsx';
import SubmitButton from '../components/submitButton.jsx';
import PasswordField from '../components/passwordTextField.jsx';
import Navbar1 from '../components/navbar/navbar.jsx';
import AddProduct from '../components/modals/addProduct.jsx';
import SelectActive from '../components/selectActive.jsx';
import { Inter } from 'next/font/google';
import ProfileButton from '../components/profileButton';
import Login from './login.jsx';
import Account from './account.jsx';
import DisplayTable from '../components/displayTable.js';

const inter = Inter({ subsets: ['latin'] })
/*
<TextField placeholder="email" width="500px" label="prova" handleChange={1} initialValue=""/>
<SubmitButton height="80px" width="200px" text="Aggiungi"  onPress={1} textSize="11"/>
<PasswordField placeholder="email" width="500px" label="prova" handleChange={1} initialValue=""/>
<AddProduct width="800px" height="800px" show={1} close={0}> </AddProduct>
 <SelectActive width="300px" height="50px" boolActive="false" /> 
     <ProfileButton onPress={1} />
         <Navbar1/>
         <Login setToken={undefined} /> 
           <img src='../components/logo.png' alt="logo" width="200px" objectFit="fill"/>

*/


export default function Home() {
  return (

    <Account  /> 
  )
}
