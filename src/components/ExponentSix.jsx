const ExponentSix = (props) => {
  const number = props.value;
  const finalValue = Math.pow(number, 6);

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n⁶</p>
      <p className="exponent-result">{number} * {number} * {number} * {number} * {number} * {number} = <span className="total">{finalValue}</span></p>
    </div>
  )

}


export default ExponentSix;