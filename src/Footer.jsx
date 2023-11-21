import PropTypes from 'prop-types';

function Footer({ description }) {
  return <footer>{description}</footer>;
}

Footer.propTypes = {
  description: PropTypes.string.isRequired
};

export default Footer;
