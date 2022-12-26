import Image from "next/image";

import { useColor } from "@utils/globalState/color";
import { getShades } from "@utils/vendor/color";

const DogCard = () => {
  const color = useColor((state) => state.color);
  return (
    <div
      style={{ backgroundColor: getShades(color)[9] }}
      className="flex h-full flex-col items-center justify-center overflow-hidden rounded-md px-6"
    >
      <h4
        className="text-3xl font-black"
        style={{ color: getShades(color)[1] }}
      >
        Hello There
      </h4>
      <p
        style={{ color: getShades(color)[1] }}
        className="mt-4 text-center text-sm"
      >
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi.
      </p>
      <div
        style={{
          backgroundColor: getShades(color)[1],
          color: getShades(color)[9],
        }}
        className="mt-4 rounded-md p-2 font-black"
      >
        Get Started
      </div>
    </div>
  );
};

export default DogCard;
