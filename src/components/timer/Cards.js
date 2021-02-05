import './Cards.css';

// function component
const AnimatedCard = ({ animation, digit }) => {
  return (
    <div className={`flipCard ${animation}`}>
      <span>{digit}</span>
    </div>
  );
};

// function component
const StaticCard = ({ position, digit }) => {
  return (
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
};

// function component
const FlipUnitContainer = ({ digit, shuffle, unit }) => {
  // assign digit values
  let currentDigit = digit;
  let previousDigit = digit + 1;

  // to prevent a negative value
  if (unit !== "hours") {
    previousDigit = previousDigit === 60 ? 0 : previousDigit;
  } else {
    previousDigit = previousDigit === 24 ? 0 : previousDigit;
  }

  // add zero
  if (currentDigit < 10) {
    currentDigit = `0${currentDigit}`;
  }
  if (previousDigit < 10) {
    previousDigit = `0${previousDigit}`;
  }

  // shuffle digits
  const digit1 = shuffle ? previousDigit : currentDigit;
  const digit2 = !shuffle ? previousDigit : currentDigit;

  // shuffle animations
  const animation1 = shuffle ? "fold" : "unfold";
  const animation2 = !shuffle ? "fold" : "unfold";

  return (
    <div className="counter">
      <div className={"counter__card"}>
        <StaticCard position={"upperCard"} digit={currentDigit} />
        <StaticCard position={"lowerCard"} digit={previousDigit} />
        <AnimatedCard digit={digit1} animation={animation1} />
        <AnimatedCard digit={digit2} animation={animation2} />
        <div className="counter__circles">
          <div className="circle circle--left"></div>
          <div className="circle circle--right"></div>
        </div>
      </div>
      <p className="counter__type">{unit}</p>
    </div>
  );
};

export default FlipUnitContainer;
