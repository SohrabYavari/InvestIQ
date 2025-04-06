
type Props = {
  title: string;
  subTitle: string;
};

const Tile = ({ title, subTitle }: Props) => {
  return (
    <div className="stats shadow mx-auto">
      <div className="stat place-items-center">
        <div className="stat-title text-primary">{title}</div>
        <div className="stat-value text-accent">{subTitle}</div>
      </div>
    </div>
  );
};

export default Tile;
