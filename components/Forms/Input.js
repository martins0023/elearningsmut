export const Input = (props) => {
    const {handleChange, rel_styles, name, ...values} = props;
  return (
    <input
      className="appearance-none border w-full py-3 px-4 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
      {...values}
      style={rel_styles}
      onChange={(e) => handleChange(e, name)}
    />
  );
};
