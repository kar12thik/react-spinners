import React from "react";
import "./styles.css";
import { BounceLoader, BarLoader, BeatLoader } from "react-spinners";

export default function App() {
  return (
    <div className="App">
      <h1>Just some spinners</h1>
      <BounceLoader size={24} color="red" loading />
      <BeatLoader size={48} color="orange" loading />
      <BarLoader size={72} color="green" loading />
    </div>
  );
}
