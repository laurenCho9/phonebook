import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import PhoneNumberCreate from "./components/PhoneNumberCreate";
import PhoneNumberSearch from "./components/PhoneNumberSearch";
import PhoneBookWrapper from "./components/PhoneBookWrapper";

function App() {
  return (
    <div className="App">
      <PhoneBookWrapper></PhoneBookWrapper>
    </div>
  );
}

export default App;
