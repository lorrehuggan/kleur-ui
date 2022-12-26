import { useColor } from "@utils/globalState/color";
import { getTextColor } from "@utils/vendor/color";

const Header = () => {
  const { color } = useColor((state) => state);
  return (
    <header className="flex h-20 items-center border-b-[1px] border-neutral-500/40">
      <div className="container-sm lg:container-lg flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className=" uppercase tracking-widest text-neutral-500">
            Kleur
          </span>
          <span
            style={{ color: getTextColor(color), backgroundColor: color }}
            className="color-t rounded-md p-1 px-2 font-black text-white"
          >
            ui
          </span>
        </div>
        <div className="flex items-center gap-4 text-sm uppercase tracking-widest text-neutral-600">
          <a>Create</a>
          <a>Edit</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
