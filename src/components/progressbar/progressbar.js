import ProgressBar from 'react-bootstrap/ProgressBar';

function CustomProgressbar({prices}) {
    function Percentage(prices){
        var basePrice = 1000;
        var percent = (prices/basePrice)*100;
        return percent;
    }
  return <ProgressBar now={Percentage(prices)} />;
}

export default CustomProgressbar;





