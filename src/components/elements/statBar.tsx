import { HeartFilledIcon, LightningBoltIcon } from "@radix-ui/react-icons";
import { useColor } from "@utils/globalState/color";
import { getShades } from "@utils/vendor/color";
import Image from "next/image";

const StatBar = () => {
  const color = useColor((state) => state.color);
  return (
    <div
      style={{ backgroundColor: getShades(color)[8] }}
      className="flex h-1/4 w-full items-center rounded-md"
    >
      <div className="flex h-full flex-1 items-center justify-between p-3">
        <div>
          <p
            style={{ color: getShades(color)[2] }}
            className="text-[8px] lg:text-xs"
          >
            Total Likes
          </p>
          <h4
            style={{ color: getShades(color)[2] }}
            className="font-black lg:text-xl"
          >
            20.5K
          </h4>
        </div>
        <div>
          <HeartFilledIcon
            style={{ color: getShades(color)[2] }}
            className="h-7 w-7"
          />
        </div>
      </div>
      <div className="flex h-full flex-1 items-center justify-between p-3">
        <div>
          <p
            style={{ color: getShades(color)[2] }}
            className="text-[8px] lg:text-xs"
          >
            Page Views
          </p>
          <h4
            style={{ color: getShades(color)[2] }}
            className="font-black lg:text-xl"
          >
            2.5M
          </h4>
        </div>
        <div>
          <LightningBoltIcon
            style={{ color: getShades(color)[2] }}
            className="h-7 w-7"
          />
        </div>
      </div>
      <div className="flex h-full flex-1 items-center justify-between p-3">
        <div>
          <p
            style={{ color: getShades(color)[2] }}
            className="text-[8px] lg:text-xs"
          >
            Tasks
          </p>
          <h4
            style={{ color: getShades(color)[2] }}
            className="font-black lg:text-xl"
          >
            38%
          </h4>
        </div>
        <div>
          <Image
            src="/images/avatar.jpg"
            alt=""
            width={45}
            height={45}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default StatBar;
