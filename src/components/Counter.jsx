
const Counter = (props) => {

  return (
    <div className="counter-container">
      <div>
      <p className="counter-value"> Number :{props.value}</p>
      <button className="counter-button" onClick={props.decrement}>-</button>
      <button className="counter-button" onClick={props.increment}>+</button>
      </div>
    </div>
  );
};

export default Counter;
