const Button = ({clickHandle,name}) => {

  const handleClick = () => clickHandle(name)

  return(
    <div>
      <button onClick={handleClick}>{name}</button>
    </div>
  )
};

export default Button;