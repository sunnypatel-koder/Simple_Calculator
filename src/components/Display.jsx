const Display = ({ displayVal }) => {
  return (
    <>
      <input value={displayVal} type="text" id="display" readOnly />
    </>
  );
};

export default Display;
