import { useState } from "react";
import "../App.css";
export function Main() {
  return (
    <>
      <h1>Felipe Moreira Salas, M.S.</h1>
      <div className="text-3xl font-bold underline">Hello world!</div>
      <div>
        <a target="_blank">
          <img src="../../assets/picture.JPG" className="logo" />
        </a>
      </div>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
