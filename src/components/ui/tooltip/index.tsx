import * as Tooltip from "@radix-ui/react-tooltip";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  content: ReactNode;
  trigger: ReactNode;
  position?: "top" | "right" | "bottom" | "left";
}
const ToolTip = ({ children, content, position, trigger }: Props) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{trigger}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="flex items-center gap-1 rounded-md bg-white p-2 text-center text-sm text-neutral-500">
            {content}
            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
export default ToolTip;
