import React from "react";
import "bootstrap";

const Comp = (props) => {
  const {
    A,
    setA,
    B,
    setB,
    C,
    setC,
    D,
    setD,
    E,
    setE,
    F,
    setF,
    G,
    setG,
    H,
    setH,
    I,
    setI,
    handleSubmit,
  } = props;

  const clearInput = () => {
    setA(0);
    setB(0);
    setC(0);
    setD(0);
    setE(0);
    setF(0);
    setG(0);
    setH(0);
    setI(0);
  };
  return (
    <section className="login">
      <div className="loginContainer">
        <h2 className="logo-h1">TWF FLOURS</h2>
        <div className="row">
          <div className="col-5">
            <label>A</label>
            <input
              type="text"
              autoFocus
              required
              value={A}
              onChange={(e) => setA(e.target.value)}
            />
          </div>
          <div className="col-2"></div>
          <div className="col-5">
            <label>B</label>
            <input
              type="text"
              autoFocus
              required
              value={B}
              onChange={(e) => setB(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <label>C</label>
            <input
              type="text"
              autoFocus
              required
              value={C}
              onChange={(e) => setC(e.target.value)}
            />
          </div>
          <div className="col-2"></div>
          <div className="col-5">
            <label>D</label>
            <input
              type="text"
              autoFocus
              required
              value={D}
              onChange={(e) => setD(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <label>E</label>
            <input
              type="text"
              autoFocus
              required
              value={E}
              onChange={(e) => setE(e.target.value)}
            />
          </div>
          <div className="col-2"></div>
          <div className="col-5">
            <label>F</label>
            <input
              type="text"
              autoFocus
              required
              value={F}
              onChange={(e) => setF(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <label>G</label>
            <input
              type="text"
              autoFocus
              required
              value={G}
              onChange={(e) => setG(e.target.value)}
            />
          </div>
          <div className="col-2"></div>
          <div className="col-5">
            <label>H</label>
            <input
              type="text"
              autoFocus
              required
              value={H}
              onChange={(e) => setH(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <label>I</label>
            <input
              type="text"
              autoFocus
              required
              value={I}
              onChange={(e) => setI(e.target.value)}
            />
          </div>
          <div className="col-3"></div>
        </div>
        <div className="row btnContainer">
          <section className="row"></section>
          <button
            type="button"
            className="btn btn-warning col-5"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <div className="col-2"></div>
          <button
            type="button"
            className="btn btn-warning col-5"
            onClick={clearInput}
          >
            Clear Input
          </button>
        </div>
      </div>
    </section>
  );
};

export default Comp;
