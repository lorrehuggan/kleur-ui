import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon, DownloadIcon } from "@radix-ui/react-icons";
import { useColor } from "@utils/globalState/color";
import useCopyToClipboard from "@utils/hooks/useCopyToClipboard";
import { generateTailwindColorConfig, getShades } from "@utils/vendor/color";
import { useEffect, useState } from "react";

const ExportOverlay = () => {
  const { color } = useColor((state) => state);
  const [colorName, setColorName] = useState<string>("Change me!");
  const [code, setCode] = useState<string>(
    generateTailwindColorConfig(getShades(color), colorName)
  );
  const [value, copy] = useCopyToClipboard();

  useEffect(() => {
    setCode(generateTailwindColorConfig(getShades(color), colorName));
  }, [colorName, color]);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="flex items-center gap-1 text-neutral-500">
          <DownloadIcon className="h-4 w-4" />
          Export
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/30 backdrop-blur-md" />
        <Dialog.Content asChild>
          <div className="fixed top-1/2 left-1/2 flex w-96 -translate-x-1/2 -translate-y-1/2 transform flex-col overflow-hidden rounded-md bg-neutral-900 text-neutral-50 shadow-md">
            <div className="flex items-center justify-between bg-slate-800 p-4">
              <div className="flex items-center gap-1">
                <label>Name:</label>
                <input
                  className=" rounded-md bg-slate-700 p-2"
                  type="text"
                  value={colorName}
                  onChange={(e) => setColorName(e.target.value)}
                />
              </div>
              <Dialog.Close asChild>
                <Cross2Icon className="h-6 w-6 cursor-pointer hover:text-red-400" />
              </Dialog.Close>
            </div>
            <div className="relative bg-slate-900 px-8 py-10">
              <pre className="font-mono text-slate-300">
                <code>{code}</code>
              </pre>
              <button
                onClick={() => {
                  copy(code);
                }}
                className="color-t absolute top-4 right-4 flex items-center gap-1 rounded-md bg-slate-800 p-2 text-sm hover:bg-slate-700 active:bg-slate-500"
              >
                <DownloadIcon className="h-4 w-4" />
                Copy Code
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ExportOverlay;
