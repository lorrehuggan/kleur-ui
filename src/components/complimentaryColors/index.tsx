import { ShuffleIcon } from "@radix-ui/react-icons";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useColor } from "@utils/globalState/color";
import { getComplement, getTextColor } from "@utils/vendor/color";

const ComplementaryColors = () => {
  const { color, setColor } = useColor((state) => state);
  const handleChangeColor = (hex: string) => {
    setColor(hex);
  };
  return (
    <div className="flex items-center">
      {getComplement(color).map((hex, i) => {
        return (
          <Tooltip.Provider key={i}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <div
                  onClick={() => handleChangeColor(hex)}
                  key={i}
                  style={{ backgroundColor: hex }}
                  className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-[2px] border-black"
                ></div>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  style={{ backgroundColor: hex, color: getTextColor(hex) }}
                  className=" flex items-center gap-1 rounded-md p-2 text-center text-sm text-neutral-500 shadow-md"
                >
                  <ShuffleIcon className="h-4 w-4" />
                  <span>Shuffle Complementary Color</span>
                  <Tooltip.Arrow style={{ fill: hex }} className="fill-white" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        );
      })}
    </div>
  );
};

export default ComplementaryColors;
