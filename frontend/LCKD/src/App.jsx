import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Loading from "../src/loading/loading";
import Stored_passwords from "../src/stored_passwords/stored";

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
            <main className="body" onClick={handleClick}>
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
        {/*   <Route
          path="/new_lckd"
          element={
            <main className="body">
              <Analog />
            </main>
          }
        /> */}
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
