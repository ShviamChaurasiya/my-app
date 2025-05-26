import { createFileRoute } from "@tanstack/react-router";
import GoogleButton from "react-google-button";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/google'
    console.log("Login button clicked");
  }
  return (
    <>
      <div className="App-header">
        <GoogleButton
          onClick= {handleLogin}
        />
      </div>
    </>
  );
}
