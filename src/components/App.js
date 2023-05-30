import operations from "../Logic/operations";
import Display from "./Display/Display"
import BtnPanel from "./Panel/BtnPanel"
import React from "react";

function App() {

  const state = {
    result : null,
    operator : null,
    next: null
  };

  const handleClick = nameBtn => operations(this.state, nameBtn )

  return (
    <div>
      <Display value={state.next || state.result || "0"} />
      <BtnPanel clickHandle={handleClick}/>
    </div>
  );
}

export default App;
