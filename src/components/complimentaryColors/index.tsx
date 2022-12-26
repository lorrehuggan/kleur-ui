import {
  ChevronRightIcon,
  ComponentBooleanIcon,
  ComponentNoneIcon,
  DotsHorizontalIcon,
  HamburgerMenuIcon,
  LayersIcon,
  LoopIcon,
  MagicWandIcon,
  ShuffleIcon,
} from "@radix-ui/react-icons";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useColor } from "@utils/globalState/color";
import {
  getComplement,
  getTriad,
  getTetrad,
  getSplitComplement,
  getAnalogous,
} from "@utils/vendor/color";

const ComplementaryColors = () => {
  const { color, setColor } = useColor((state) => state);

  const handleChangeColor = (hex: string) => {
    setColor(hex);
  };
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button>
          <HamburgerMenuIcon className="h-4 w-4" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className=" min-w-[220px] rounded-md bg-white p-2 shadow-outline">
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="color-t flex cursor-pointer items-center justify-between rounded-md p-1 pl-4 text-sm tracking-wide text-neutral-700 hover:bg-purple-400 hover:text-white">
              Complimentary
              <ComponentBooleanIcon className="h-4 w-4" />
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent className="min-w-[170px] space-y-2 rounded-md bg-white p-2 shadow-outline">
                {getComplement(color).map((hex, i) => {
                  return (
                    <DropdownMenu.Item key={i}>
                      <div
                        onClick={() => handleChangeColor(hex)}
                        style={{ backgroundColor: hex }}
                        className="h-4 w-full cursor-pointer rounded-md "
                      ></div>
                    </DropdownMenu.Item>
                  );
                })}
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="color-t flex cursor-pointer items-center justify-between rounded-md p-1 pl-4 text-sm tracking-wide text-neutral-700 hover:bg-purple-400 hover:text-white">
              Triad
              <DotsHorizontalIcon className="h-4 w-4" />
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent className="min-w-[170px] space-y-2 rounded-md bg-white p-2 shadow-outline">
                {getTriad(color)
                  .slice(1)
                  .map((hex, i) => {
                    return (
                      <DropdownMenu.Item key={i}>
                        <div
                          onClick={() => handleChangeColor(hex)}
                          style={{ backgroundColor: hex }}
                          className="h-4 w-full cursor-pointer rounded-md"
                        ></div>
                      </DropdownMenu.Item>
                    );
                  })}
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="color-t flex cursor-pointer items-center justify-between rounded-md p-1 pl-4 text-sm tracking-wide text-neutral-700 hover:bg-purple-400 hover:text-white">
              Tetrad
              <LayersIcon className="h-4 w-4" />
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent className="min-w-[170px] space-y-2 rounded-md bg-white p-2 shadow-outline">
                {getTetrad(color)
                  .slice(1)
                  .map((hex, i) => {
                    return (
                      <DropdownMenu.Item key={i}>
                        <div
                          onClick={() => handleChangeColor(hex)}
                          style={{ backgroundColor: hex }}
                          className="h-4 w-full cursor-pointer rounded-md"
                        ></div>
                      </DropdownMenu.Item>
                    );
                  })}
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="color-t flex cursor-pointer items-center justify-between rounded-md p-1 pl-4 text-sm tracking-wide text-neutral-700 hover:bg-purple-400 hover:text-white">
              Analagous
              <LoopIcon className="h-4 w-4" />
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent className="min-w-[170px] space-y-2 rounded-md bg-white p-2 shadow-outline">
                {getAnalogous(color)
                  .slice(1)
                  .map((hex, i) => {
                    return (
                      <DropdownMenu.Item key={i}>
                        <div
                          onClick={() => handleChangeColor(hex)}
                          style={{ backgroundColor: hex }}
                          className="h-4 w-full cursor-pointer rounded-md"
                        ></div>
                      </DropdownMenu.Item>
                    );
                  })}
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="color-t flex cursor-pointer items-center justify-between rounded-md p-1 pl-4 text-sm tracking-wide text-neutral-700 hover:bg-purple-400 hover:text-white">
              Split Compliment
              <ComponentNoneIcon className="h-4 w-4" />
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent className="min-w-[170px] space-y-2 rounded-md bg-white p-2 shadow-outline">
                {getSplitComplement(color)
                  .slice(1)
                  .map((hex, i) => {
                    return (
                      <DropdownMenu.Item key={i}>
                        <div
                          onClick={() => handleChangeColor(hex)}
                          style={{ backgroundColor: hex }}
                          className="h-4 w-full cursor-pointer rounded-md"
                        ></div>
                      </DropdownMenu.Item>
                    );
                  })}
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
          <DropdownMenu.Arrow />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default ComplementaryColors;
