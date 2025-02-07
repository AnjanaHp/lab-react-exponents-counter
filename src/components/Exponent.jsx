const Exponent = (props) => {
  
    
    const result = Math.pow(props.number, props.power);

    return(
        <>
         <div className="exponent-counter-container">
         <p className="exponent-label">{props.number} <sup>{props.power}</sup></p>
         <span className="total">{result}</span>
        </div>
        </>

    );


}
export default Exponent;