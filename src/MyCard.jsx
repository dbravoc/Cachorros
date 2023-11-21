import PropTypes from 'prop-types';
import Tags from './Tags';
import './App.css';

function MyCard({ image, name, description, tags }) {
  return (
    <div className='my-card'>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <div>
        {tags.map((tag, index) => (
          <Tags key={index} text={tag.text} color={tag.color} />
        ))}
      </div>
    </div>
  );
}

MyCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    })
  )
};

export default MyCard;
