const ExponentTwo = (props) => {

  const number = props.value;
  const finalValue = Math.pow(number, 2);
  
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n²</p>
      <p className="exponent-result"> {number} * {number} = <span className="total">{finalValue}</span></p>
    </div>
  )
};

export default ExponentTwo;