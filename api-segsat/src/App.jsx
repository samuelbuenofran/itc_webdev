import "./App.css";
import Btn from "./components/Btn";
import TxtField from "./components/TxtField";
import CheckBox from "./components/CheckBox";

function App() {
  const msg = "React Forms";
  return (
    <>
      <h1>{msg}</h1>

      <TxtField type="text" label="Name:" />
      <TxtField type="email" label="E-mail:" />
      <TxtField type="tel" label="Phone:" />
      <Btn type="button" label="Submit" />
      <CheckBox type="checkbox" label="Remember me." />
    </>
  );
}

export default App;

/* Please, do not try to add more than one HTML element in the return statement. It may cause an error.
 */
