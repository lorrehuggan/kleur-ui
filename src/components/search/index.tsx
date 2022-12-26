import Guides from "./Guides";
import { useColor } from "@utils/globalState/color";
import { useEffect, useState } from "react";
import { vendor } from "@utils/vendor";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import useKeyboardEvent from "@utils/hooks/useKeyboardEvent";
import * as Popover from "@radix-ui/react-popover";

const Search = () => {
  const { color, setColor } = useColor((state) => state);
  const [invalid, setInvalid] = useState(false);

  useKeyboardEvent("Control", (e) => {
    setColor(vendor.getRandomColor());
  });

  function handleColorChange(c: string) {
    setInvalid(false);
    if (!vendor.isValidColor(c)) {
      setInvalid(true);
    }
    if (c.includes("#")) {
      setColor(c);
      return;
    }
    setColor(`#${c}`);
  }

  return (
    <section className="container-sm lg:container-lg relative mt-16 lg:mt-24">
      <Guides />
      <div className="relative mx-auto w-full max-w-xl">
        <input
          className="h-16 w-full rounded-xl border-[1px] border-neutral-300 px-6 uppercase shadow-md"
          type="text"
          defaultValue={color}
          value={color}
          placeholder="Hexcode"
          maxLength={7}
          onChange={(e) => handleColorChange(e.target.value)}
        />
        <input
          className="absolute top-1/2 right-6 h-7 w-7 -translate-y-1/2 transform cursor-pointer overflow-hidden rounded-full border-[2px] border-neutral-800"
          type="color"
          value={color}
          onChange={(e) => handleColorChange(e.target.value)}
        />
        {invalid && (
          <ExclamationTriangleIcon className="absolute top-[35px] right-[60px] h-6 w-6 -translate-y-1/2 transform text-red-500" />
        )}
      </div>
    </section>
  );
};

export default Search;
