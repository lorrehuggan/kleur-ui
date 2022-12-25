import { useColor } from "@utils/globalState/color";
import { getShades, getTextColor } from "@utils/vendor/color";

const Palette = () => {
  const { color } = useColor((state) => state);
  return (
    <section className="container-lg mt-20 px-12">
      <div className=" flex items-center justify-between">
        <p className="text-lg">Color Name</p>
        <button className="text-neutral-500">Export</button>
      </div>
      <div className="mx-auto mt-4 flex overflow-hidden rounded-md ">
        {getShades(color).map((hex, i) => {
          return (
            <div
              className="color-t flex h-40 w-full flex-col items-center justify-end p-4"
              key={i}
              style={{ backgroundColor: hex }}
            >
              <span
                style={{ color: getTextColor(hex) }}
                className="color-t text-lg"
              >
                {i === 0 ? "50" : `${i}00`}
              </span>
              <span
                style={{
                  color: getTextColor(hex),
                }}
                className="color-t text-sm uppercase tracking-wider"
              >
                {hex}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Palette;
