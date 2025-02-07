const Exponent = (props) => {

  const result = Math.pow(props.value, props.exponent);

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {props.value} <sup>{props.exponent}</sup>
      </p>
      <span className="total">{result}</span>
    </div>
  );
};

export default Exponent;