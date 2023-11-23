import Spinner from 'react-bootstrap/Spinner';

const LoadSpinner = () => (
  <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
);

export default LoadSpinner;
