import styled from "styled-components";
import googlelogo from "../assets/logogoogle.png";
import { UserAuth } from "../context/AuthContext";

export function Login() {
  const {signInWithGoogle} = UserAuth();


  return (
    <div className="App">
 
      <h1>Task G4 - Login</h1>
      <img src={googlelogo} className="logo google" alt="React logo" />
      <div className="card">
        <button onClick={signInWithGoogle} >Iniciar con Google</button>
        <p>Angelo Olmedo</p>
      </div>
      <p className="read-the-docs">
        Supabase implementa todo el poder de PostgreSQL
      </p>
    </div>
  );
}
const Container = styled.div`
  background-color: #242424;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: rgba(255, 255, 255, 0.87);
  .card {
    display:flex;
    flex-direction:column;
    gap: 20px;
    button{
      color:white;
    }
  }
`;
