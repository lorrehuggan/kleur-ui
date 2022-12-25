import Guides from "./Guides";
import { useColor } from "@utils/globalState/color";
import { useEffect } from "react";
import { vendor } from "@utils/vendor";

const Search = () => {
  const { color, setColor } = useColor((state) => state);

  function handleColorChange(c: string) {
    if (c.includes("#")) {
      setColor(c);
      return;
    }
    setColor(`#${c}`);
  }

  return (
    <section className="container-lg relative mt-24">
      <Guides />
      <div className="relative mx-auto w-full max-w-xl">
        <input
          className="h-16 w-full rounded-xl border-[1px] border-neutral-300 px-6 uppercase shadow-md"
          type="text"
          defaultValue={color}
          value={color}
          placeholder="Hexcode"
          onChange={(e) => handleColorChange(e.target.value)}
        />
        <input
          className="absolute top-1/2 right-6 h-7 w-7 -translate-y-1/2 transform cursor-pointer overflow-hidden rounded-full border-[2px] border-neutral-800"
          type="color"
          value={color}
          onChange={(e) => handleColorChange(e.target.value)}
        />
      </div>
    </section>
  );
};

export default Search;
