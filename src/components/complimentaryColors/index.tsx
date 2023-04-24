import { CaretRightIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
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
        <DropdownMenu.Content className=" min-w-[220px] space-y-1 rounded-md bg-white p-2 shadow-outline">
          <Item colors={getComplement} title="Compliment" />
          <Item colors={getTriad} title="Triad" />
          <Item colors={getTetrad} title="Tetrad" />
          <Item colors={getSplitComplement} title="Split Complement" />
          <Item colors={getAnalogous} title="Analogous" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default ComplementaryColors;

interface Props {
  colors: (color: string) => string[];
  title: string;
}

const Item = ({ colors, title }: Props) => {
  const { color, setColor } = useColor((state) => state);

  const handleChangeColor = (hex: string) => {
    setColor(hex);
  };

  return (
    <DropdownMenu.Sub>
      <DropdownMenu.SubTrigger className="color-t group flex cursor-pointer items-center justify-between rounded-md p-1 pl-4 text-sm tracking-wide hover:bg-neutral-200 hover:text-neutral-700 hover:outline-none">
        {title}
        <CaretRightIcon className="color-t h-4 w-4 text-neutral-400 group-hover:text-neutral-700" />
      </DropdownMenu.SubTrigger>
      <DropdownMenu.Portal>
        <DropdownMenu.SubContent className="ml-2 min-w-[170px] space-y-2 rounded-md bg-white p-2 shadow-outline">
          {colors(color).map((hex, i) => {
            return (
              <DropdownMenu.Item key={i}>
                <div
                  onClick={() => handleChangeColor(hex)}
                  style={{ backgroundColor: hex }}
                  className="h-4 w-full cursor-pointer rounded"
                ></div>
              </DropdownMenu.Item>
            );
          })}
        </DropdownMenu.SubContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Sub>
  );
};
