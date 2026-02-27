import { useRef, useState } from 'react';
import carImg from '../assets/car.png';
import wheelImg from '../assets/wheel.png';

function Wheel({ className }: { className: string }) {
  return (
    <div className={`wheel-overlay ${className}`}>
      <div className="wheel-mask" />
      <img
        src={wheelImg}
        alt=""
        className="wheel-img"
        draggable={false}
      />
    </div>
  );
}

export default function CarScene() {
  const [zooming, setZooming] = useState(false);
  const [entered, setEntered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (zooming) return;
    setZooming(true);
  };

  const handleAnimationEnd = (e: React.AnimationEvent) => {
    if (e.animationName === 'drive-in') {
      setEntered(true);
    }
    if (e.animationName === 'drive-back') {
      setZooming(false);
    }
  };

  const containerClass = zooming
    ? 'car-container zoom-off'
    : entered
      ? 'car-container entered'
      : 'car-container';

  return (
    <div className="car-scene mb-14" onClick={handleClick}>
      {[...Array(5)].map((_, i) => (
        <div key={i} className={`exhaust-particle ${zooming ? '' : 'active'}`} />
      ))}

      <div
        ref={containerRef}
        className={containerClass}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className="car-img-wrapper">
          <img
            src={carImg}
            alt="Lamborghini Aventador line art"
            className="car-img"
            draggable={false}
          />
          <Wheel className="wheel-rear" />
          <Wheel className="wheel-front" />
        </div>
      </div>

      <div className="road">
        <div className={`road-line ${zooming ? 'road-fast' : ''}`} />
      </div>
    </div>
  );
}
