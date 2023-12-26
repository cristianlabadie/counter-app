import PropTypes from "prop-types";

export const FirstApp = ({ title, subtitle, name }) => {
  return (
    <>
      <h2 data-testid="test-title"> {title} </h2>
      <p data-testid="test-subtitle">{subtitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  name: PropTypes.string,
};

FirstApp.defaultProps = {
  subtitle: "Soy un subtitulo",
};
