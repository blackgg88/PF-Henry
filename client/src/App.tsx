import { useState } from "react";
import LoginButton from "./components/LoginButton";
import LogOutButton from "./components/LogOutButton";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated } = useAuth0();
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Vite + React</h1>
      {isAuthenticated ? (
        <div>
          <img src={user?.picture} alt={user?.name} />
          <h2>{user?.name}</h2>
          <h3>{user?.email}</h3>
          <LogOutButton />
        </div>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}

export default App;
