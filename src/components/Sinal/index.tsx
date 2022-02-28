import './style.css';

type SinalProps = {
  color: string;
  active: boolean;
  onClick: () => void;
};

export const Sinal = ({ color, active, onClick }: SinalProps) => {
  if (active) {
    return <div className='circleUp' style={{ backgroundColor: color }}></div>;
  }

  return (
    <div
      className='circle'
      onClick={onClick}
      style={{ backgroundColor: color }}
    ></div>
  );
};
