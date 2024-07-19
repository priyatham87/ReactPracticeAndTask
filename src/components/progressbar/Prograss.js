import ProgressBar from 'react-bootstrap/ProgressBar';

function Progress({scale}) {
  return <ProgressBar now={scale} />;
}

export default Progress;