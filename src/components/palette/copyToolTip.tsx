import { useEffect, useState } from "react";
import * as Toast from "@radix-ui/react-toast";
import { ClipboardCopyIcon } from "@radix-ui/react-icons";
import * as Tooltip from "@radix-ui/react-tooltip";
import useCopyToClipboard from "@utils/hooks/useCopyToClipboard";
import { getTextColor } from "@utils/vendor/color";

interface Props {
  hex: string;
}

const CopyToolTip = ({ hex }: Props) => {
  const [value, copy] = useCopyToClipboard();
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    if (value) {
      setToastOpen(true);
    }
  }, [value]);

  return (
    <>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button
              onClick={() => {
                copy(hex);
              }}
              style={{
                color: getTextColor(hex),
              }}
              className="color-t text-sm uppercase tracking-wider"
            >
              {hex}
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              style={{ backgroundColor: hex, color: getTextColor(hex) }}
              className="flex items-center gap-1 rounded-md bg-white p-2 text-center text-sm text-neutral-500"
            >
              <ClipboardCopyIcon className="h-4 w-4" />
              <span>Copy</span>
              <Tooltip.Arrow
                style={{
                  fill: getTextColor(hex),
                }}
              />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>

      {/* toast */}
      <Toast.Provider>
        <Toast.Root
          open={toastOpen}
          onOpenChange={setToastOpen}
          className=" items-center gap-2 overflow-hidden  rounded-md p-4 text-neutral-500"
        >
          <div className="">
            <div className="flex items-center gap-2">
              <div
                style={{ backgroundColor: String(value) }}
                className="h-4 w-4 rounded"
              ></div>
              <span className="uppercase">{value ? value : ""}</span>
            </div>
            <span>Copied To Clipboard!</span>
          </div>
        </Toast.Root>

        <Toast.Viewport className="fixed top-[5%] left-1/2 -translate-x-1/2  transform rounded-md border border-black bg-white" />
      </Toast.Provider>
    </>
  );
};

export default CopyToolTip;
