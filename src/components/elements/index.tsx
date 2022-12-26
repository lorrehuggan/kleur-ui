import { useColor } from "@utils/globalState/color";
import { ReactNode } from "react";
import BarCalender from "./barCalender";
import BigCard from "./bigCard";
import DogCard from "./dog";
import GrossCard from "./grossCard";
import StatBar from "./statBar";
import StatBarOne from "./statBarOne";

const Elements = () => {
  const color = useColor((state) => state.color);

  return (
    <section className="container-lg mt-4 grid grid-cols-3 gap-4 rounded-xl p-12">
      <Container>
        <GrossCard />
        <BarCalender />
      </Container>
      <Container>
        <StatBar />
        <StatBarOne />
        <DogCard />
      </Container>
      <Container>
        <BigCard />
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
