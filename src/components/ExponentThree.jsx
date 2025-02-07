const ExponentThree = (props) => {

  const number = props.value;
  const finalValue = Math.pow(number, 3);

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n³</p>
      <p className="exponent-result">{number} * {number} * {number}= <span className="total">{finalValue}</span></p>
    </div>
  )
}

export default ExponentThree;