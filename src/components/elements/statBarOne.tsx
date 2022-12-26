import {
  DownloadIcon,
  HeartFilledIcon,
  LightningBoltIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { useColor } from "@utils/globalState/color";
import { getShades } from "@utils/vendor/color";
import Image from "next/image";

const StatBarOne = () => {
  const color = useColor((state) => state.color);
  return (
    <div
      style={{ backgroundColor: getShades(color)[2] }}
      className="flex h-1/4 w-full items-center rounded-md"
    >
      <div className="flex h-full flex-1 items-center justify-between p-3">
        <div>
          <p style={{ color: getShades(color)[8] }} className="text-xs">
            Downloads
          </p>
          <h4
            style={{ color: getShades(color)[8] }}
            className="text-xl font-black"
          >
            31K
          </h4>
        </div>
        <div>
          <DownloadIcon
            style={{ color: getShades(color)[8] }}
            className="h-7 w-7"
          />
        </div>
      </div>
      <div className="flex h-full flex-1 items-center justify-between p-3">
        <div>
          <p style={{ color: getShades(color)[8] }} className="text-xs">
            New Users
          </p>
          <h4
            style={{ color: getShades(color)[8] }}
            className="text-xl font-black"
          >
            4,200
          </h4>
        </div>
        <div>
          <PersonIcon
            style={{ color: getShades(color)[8] }}
            className="h-7 w-7"
          />
        </div>
      </div>
    </div>
  );
};

export default StatBarOne;
