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
  return (
    <div className="car-scene mb-14">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="exhaust-particle active" />
      ))}

      <div className="car-container">
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
        <div className="road-line" />
      </div>
    </div>
  );
}
