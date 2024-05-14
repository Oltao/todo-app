export const Edit = ({ value, editChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={editChange}
      style={{ maxWidth: "70%", height: "100%" }}
    />
  );
};
