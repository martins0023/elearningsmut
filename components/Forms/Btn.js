import { CgSpinner } from "react-icons/cg";

export const Btn = (props) => {
  return (
    <button
      className={`font-normal py-3 px-10 flex items-center justify-center w-[150px] focus:outline-none focus:shadow-outline rounded-full ${
        props.disabled ? "bg-gray-300 text-[#A0A0A0]" : "bg-primary text-white"
      }`}
      style={props.style}
      type="button"
      disabled={props.disabled || props.loading}
      onClick={props.handleClick}
    >
      {props.loading ? (
        <CgSpinner size={25} className="animate-spin" />
      ) : (
        props.label
      )}
    </button>
  );
};
