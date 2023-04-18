import logo from './logo.svg';
import "@aws-amplify/ui-react/styles.css";
import './App.css';
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";


function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

function Profile({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Heading level={1}>Enter Additional Details</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

{/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Travel Companion</h1>
        {/*<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
  </a>
      </header>
    </div>
  );
}/*/}


export default withAuthenticator(Profile);

//export default App;
