import { useState } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import './Navigation.css'
import './Header.css'
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
<Navigation/>
<Header/>
         

      </div>
    </>
  );
}

export default App;
