"use client";
import React, { MouseEvent } from "react";
import { useState } from "react";

// Interface
import LoginPayload from "../interfaces/Login";

function Login() {
  async function handleLogin(e:any) {
    e.preventDefault();
    const body : LoginPayload = {
      nim: nim,
      password: password,
    };

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log(await response.json());
  }

  let [nim, setNim] = useState("");
  let [password, setPassword] = useState("");

  return (
    <>
      <form onSubmit={handleLogin}>
        <h2>NIM</h2>
        <input type="text" name="nim" defaultValue={nim} onChange={(e) => setNim(e.target.value)} />
        <h2>Password</h2>
        <input type="password" name="password" defaultValue={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
