import { useColor } from "@utils/globalState/color";
import { getShades } from "@utils/vendor/color";

const GrossCard = () => {
  const color = useColor((state) => state.color);
  return (
    <div
      style={{ backgroundColor: getShades(color)[1] }}
      className="h-1/3 w-full rounded-md p-6"
    >
      <h5 style={{ color: getShades(color)[7] }} className="text-xl font-bold">
        Today
      </h5>
      <h3
        style={{ color: getShades(color)[7] }}
        className="text-4xl font-black"
      >
        $120.76
      </h3>
      <p style={{ color: getShades(color)[5] }}>Gross Volume</p>
    </div>
  );
};

export default GrossCard;
