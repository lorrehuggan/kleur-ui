import { useEffect, useState } from "react";
import * as Toast from "@radix-ui/react-toast";
import useCopyToClipboard from "@utils/hooks/useCopyToClipboard";

const CopyToastProvider = () => {
  const [value, copy] = useCopyToClipboard();
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    if (value) {
      setToastOpen(true);
    }
  }, [value]);

  return (
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
  );
};

export default CopyToastProvider;
