import Big from "big.js";

const operation = (num1, num2, operator) => {

  const var1 = Big(num1 || "0")
  const var2 = Big(num2 || (operator === "/" || operator ==="x" ? "1" : "0" ))

  if (operator === "+") return var1.plus(var2).toString()
  
  if (operator === "-") return var1.minus(var2).toString()
   
  if (operator === "x") return var1.times(var2).toString()
  
  if (operator === "/") if (var2 == 0) {
    alert("No se puede dividir entre cero")
  } else if (operator === "/") return var1.div(var2).toString()
};

export default operation;