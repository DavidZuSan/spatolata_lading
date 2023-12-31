import PropTypes from "prop-types";

const ArrowUpIcon = ({ color = "#8C1B24" }) => {
  return (
    <svg
      className="icon icon-tabler icon-tabler-arrow-autofit-up"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 4h-6a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h8" />
      <path d="M18 20v-17" />
      <path d="M15 6l3 -3l3 3" />
    </svg>
  );
};

ArrowUpIcon.propTypes = {
  color: PropTypes.string,
};

export default ArrowUpIcon;
