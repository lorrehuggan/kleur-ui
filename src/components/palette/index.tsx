import { useColor } from "@utils/globalState/color";
import useCopyToClipboard from "@utils/hooks/useCopyToClipboard";
import { getShades, getTextColor } from "@utils/vendor/color";
import * as Tooltip from "@radix-ui/react-tooltip";
import { ClipboardCopyIcon } from "@radix-ui/react-icons";
import * as Toast from "@radix-ui/react-toast";
import { useEffect, useState } from "react";
import { Color } from "@utils/vendor";

const Palette = () => {
  const { color } = useColor((state) => state);
  const [value, copy] = useCopyToClipboard();
  const [toastOpen, setToastOpen] = useState(false);
  const [colorCode, setColorCode] = useState<string>("");

  const c = new Color(color, "hex");

  useEffect(() => {
    console.log({ value });

    if (value) {
      setToastOpen(true);
    }
  }, [value]);

  return (
    <section className="container-lg mt-20 px-12">
      <div className=" flex items-center justify-between">
        <p className="text-lg">Color Name</p>
        <button className="text-neutral-500">Export</button>
      </div>
      <div className="mx-auto mt-4 flex overflow-hidden rounded-md ">
        {c.getShades().map((hex, i) => {
          return (
            <div
              className="color-t flex h-40 w-full flex-col items-center justify-end p-4"
              key={i}
              style={{ backgroundColor: hex }}
            >
              <span
                style={{ color: getTextColor(hex) }}
                className="color-t text-lg"
              >
                {i === 0 ? "50" : `${i}00`}
              </span>
              {/* tooltip */}
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
                    <Tooltip.Content className="flex items-center gap-1 rounded-md bg-white p-2 text-center text-sm text-neutral-500">
                      <ClipboardCopyIcon className="h-4 w-4" />
                      <span>Copy</span>
                      <Tooltip.Arrow className="fill-white" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
              {/* toast */}
              <Toast.Provider>
                <Toast.Root
                  open={toastOpen}
                  onOpenChange={setToastOpen}
                  className=" items-center gap-2 rounded-md  p-4 text-neutral-400 shadow"
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

                <Toast.Viewport className="fixed bottom-4 right-4" />
              </Toast.Provider>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Palette;
