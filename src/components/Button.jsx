const Button = ({ text, onClick, type = "primary", style }) => {
  return (
    <button className={`btn btn-${type}`} style={style} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;