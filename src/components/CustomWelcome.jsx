import { Alert } from "react-bootstrap";

const Welcome = () => {
  return (
    <Alert variant="dark">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>Thank you for visiting my web sites, I hope you will enjoy it</p>
      <hr />
      <p className="mb-0">Whenever you want you can exit by clicking on the X button at the top right</p>
    </Alert>
  );
};

export default Welcome;
