import { Button } from '@nextui-org/react';
import { UserIcon } from '../components/icons/userIcon.jsx';

const profileButton = ({ onPress }) => {
  return (
    <Button icon ={<UserIcon fill="currentColor" />}
      style={{
        height: "80px",
        width: "80px",
        background: "#EBCEF5",
        color: "white",
        borderRadius: "50px",
        minWidth: "0",
      }}
      onPress={onPress}
    >
    </Button>
  );
};

export default profileButton;
