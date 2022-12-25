import { useColor } from "@utils/globalState/color";
import { getShades, getTextColor } from "@utils/vendor/color";

const BarCalender = () => {
  const color = useColor((state) => state.color);
  const data = [
    {
      day: "M",
      height: "h-5",
      color: getShades(color)[2],
    },
    {
      day: "T",
      height: "h-16",
      color: getShades(color)[3],
    },
    {
      day: "W",
      height: "h-32",
      color: getShades(color)[6],
    },
    {
      day: "T",
      height: "h-28",
      color: getShades(color)[5],
    },
    {
      day: "F",
      height: "h-20",
      color: getShades(color)[4],
    },
    {
      day: "S",
      height: "h-12",
      color: getShades(color)[2],
    },
    {
      day: "S",
      height: "h-12",
      color: getShades(color)[2],
    },
  ];
  return (
    <div className="flex h-2/3 w-full flex-col justify-end rounded-md p-4">
      <div className="mt-4 flex justify-end">
        <span
          style={{
            backgroundColor: getShades(color)[7],
            color: getTextColor(getShades(color)[7]),
          }}
          className="rounded-full  p-1 px-4"
        >
          New
        </span>
      </div>
      <div className="grid h-full w-full grid-cols-7 gap-1">
        {data.map((item, i) => {
          return (
            <Bar
              key={i}
              height={item.height}
              day={item.day}
              color={item.color}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BarCalender;

interface Props {
  height: string;
  day: string;
  color: string;
}

const Bar = ({ height, day, color }: Props) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-end gap-2 p-2 px-3">
      <div
        style={{ backgroundColor: color }}
        className={`${height} w-full rounded-full`}
      ></div>
      <span>{day}</span>
    </div>
  );
};
