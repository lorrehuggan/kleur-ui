import { useColor } from "@utils/globalState/color";
import { getShades } from "@utils/vendor/color";

const BigCard = () => {
  const color = useColor((state) => state.color);
  return (
    <div
      style={{ backgroundColor: getShades(color)[2] }}
      className="relative h-full w-full overflow-hidden rounded-md p-10"
    >
      <div
        style={{ backgroundColor: getShades(color)[7] }}
        className="absolute -top-28 -right-28 h-56 w-56 rounded-full "
      ></div>
      <div
        style={{ backgroundColor: getShades(color)[7] }}
        className="absolute left-20 top-24 h-10 w-10 rounded-full "
      ></div>
      <div className="flex h-full w-full flex-col justify-end">
        <div>
          <p
            style={{ color: getShades(color)[7] }}
            className="text-sm uppercase tracking-wider"
          >
            Projects
          </p>
          <h4
            style={{ color: getShades(color)[7] }}
            className="text-3xl font-black"
          >
            Tailwind CSS <br></br> Colors
          </h4>
        </div>
        <div
          style={{
            backgroundColor: getShades(color)[5],
            color: getShades(color)[1],
          }}
          className="mt-4 w-full rounded-full p-3"
        >
          Search...
        </div>
      </div>
    </div>
  );
};

export default BigCard;
