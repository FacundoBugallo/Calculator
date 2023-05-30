import Button from "../Botons/Botons";

const BtnPanel = ({clickHandle}) =>{

  const handleClick = nameBtn => clickHandle(nameBtn)

  return(
    <div className="BTN-PANEL">
      <div className="row">
        <Button name="AC" clickHandle={handleClick}/>
        <Button name="+/-" clickHandle={handleClick}/>
        <Button name="%" clickHandle={handleClick}/>
        <Button name="/" clickHandle={handleClick}/>
      </div>
      
      <div className="row">
        <Button name="7" clickHandle={handleClick}/>
        <Button name="8" clickHandle={handleClick}/>
        <Button name="9" clickHandle={handleClick}/>
        <Button name="x" clickHandle={handleClick}/>
      </div>

      
      <div className="row">
        <Button name="4" clickHandle={handleClick}/>
        <Button name="5" clickHandle={handleClick}/>
        <Button name="6" clickHandle={handleClick}/>
        <Button name="+" clickHandle={handleClick}/>
      </div>

      
      <div className="row">
        <Button name="3" clickHandle={handleClick}/>
        <Button name="2" clickHandle={handleClick}/>
        <Button name="1" clickHandle={handleClick}/>
        <Button name="-" clickHandle={handleClick}/>
      </div>

      <div className="row">
        <Button name="0" clickHandle={handleClick}/>
        <Button name="." clickHandle={handleClick}/>
        <Button name="=" clickHandle={handleClick}/>
        <Button name="CLEAR" clickHandle={handleClick}/>
      </div>    
    </div>
  )
}

export default BtnPanel;