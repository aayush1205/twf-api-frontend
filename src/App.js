import "./App.css";
import React, { useState } from "react";
import Comp from "./components/Form";
import axios from "axios";
import "bootstrap";

const baseURL = "https://twf-api.herokuapp.com/";

function App() {
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);
  const [C, setC] = useState(0);
  const [D, setD] = useState(0);
  const [E, setE] = useState(0);
  const [F, setF] = useState(0);
  const [G, setG] = useState(0);
  const [H, setH] = useState(0);
  const [I, setI] = useState(0);

  const [answer, setAnswer] = useState(-1);
  const handleSubmit = async () => {
    // eslint-disable-next-line
    await axios
      .post(baseURL, {
        input: `${A} ${B} ${C} ${D} ${E} ${F} ${G} ${H} ${I}`,
      })
      .then(function (response) {
        console.log(response.data);
        setAnswer(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  if (answer === -1) {
    return (
      <Comp
        A={A}
        setA={setA}
        B={B}
        setB={setB}
        C={C}
        setC={setC}
        D={D}
        setD={setD}
        E={E}
        setE={setE}
        F={F}
        setF={setF}
        G={G}
        setG={setG}
        H={H}
        setH={setH}
        I={I}
        setI={setI}
        handleSubmit={handleSubmit}
      />
    );
  } else {
    return (
      <div className="card-holder1">
        <div className="card1">
          <h1 className="card-title">{answer}</h1>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => setAnswer(-1)}
          >
            Go back
          </button>
        </div>
      </div>
    );
  }
}

export default App;
