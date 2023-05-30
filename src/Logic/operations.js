import Big from "big.js";
import operation from "./operation";
import isNumber from "./isNumber";

const operations = (state, nameBtn) => {
//AC
  if (nameBtn === "AC") {
      return{
      result : null,
      operator : null,
      next: null,
    }
  }

  if (isNumber(nameBtn)){

    if(nameBtn === "0" && state.next ==="0"){
      return{}
    }

    if(state.operator) {

      if(state.next){
        return {next: state.next + nameBtn}
      }
      return {next: nameBtn}
    }
    
    if (state.next){
      const next = state.next === "0" ? nameBtn: state.next + nameBtn ;
      
      return {next, result:null}
    }
    return {next: nameBtn, result:null}
  }
//dividir
  if(nameBtn === "/"){
    if(state.operator && state.next){
      const finishedResult = operation(state.result, state.next, state.operator)

      return {result: Big(finishedResult).div(Big("100").toString()), next:null, operator:null}
    }

    if(state.next){
      return {next:Big(state.next).div(Big("100").toString())}
    }
    return{}
  }
//decimal
  if(nameBtn === "."){
    
    if(state.next){

      if(state.next.include("."))return{}
      return {next: state.next + "."}
    }
    return {next : "0."}
  }

  if(nameBtn === "="){

    if(state.next && state.operation){
      return {result: operation(state.result, state.next, state.operator),
              next: null,
              operator: null
      }
    }
  }

  if(nameBtn === "+/-"){

    if(state.next) return {next: (-1 * parseFloat(state.next).toString())}

    if(state.result) return {result: (-1 * parseFloat(state.result).toString())}
  
    return {}
  }

  if( state.operator){
    return {
      result: operation(state.next, state.result, state.operator),
      next: null,
      operator: nameBtn
    }
  }

  if(!state.next)return {operator:nameBtn}

  return {
    result: state.next,
    next: null,
    operator:nameBtn
  }
};


export default operations;