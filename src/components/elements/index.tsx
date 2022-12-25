import { useColor } from "@utils/globalState/color";
import { ReactNode } from "react";
import BarCalender from "./barCalender";
import GrossCard from "./grossCard";

const Elements = () => {
  const color = useColor((state) => state.color);

  return (
    <section className="container-lg mt-4 grid grid-cols-3 gap-3 rounded-xl border-[1px] border-black/30 p-12">
      <Container>
        <GrossCard />
        <BarCalender />
      </Container>
      <Container>
        <p></p>
      </Container>
      <Container>
        <p></p>
      </Container>
    </section>
  );
};

export default Elements;

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-96 w-full max-w-sm flex-col gap-2">{children}</div>
  );
};
