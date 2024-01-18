const Buttons = ({ onChangeHandler }) => {
  let symbols = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div id="button-container">
        <center>
          {symbols.map((item) => (
            <button onClick={() => onChangeHandler(item)} key={item}>
              {item}
            </button>
          ))}
        </center>
      </div>
    </>
  );
};

export default Buttons;
