import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Loading from "../src/loading/loading";
import Stored_passwords from "../src/stored_passwords/stored";
import Signup from "../src/components/signup/Signup.jsx";

import "./App.css";

function App() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/stored_passwords");
  }

  return (
    <>
      <Routes>
        <Route
          index
          element={
            <main>
              <Loading />
            </main>
          }
        />

        {/*   <Route
          path="/stored_passwords"
          element={
            <main className="body">
              <Stored_passwords />
            </main>
          }
        /> */}
        <Route
          path="/signup"
          element={
            <main className="body">
              <Signup />
            </main>
          }
        />
        {/*  <Route
          path="/edit_lckd"
          element={
            <main className="body">
              <Menu />
            </main>
          }
        /> */}
      </Routes>
    </>
  );
}

export default App;
