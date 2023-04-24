import Image from "next/image";
import rightDrawn from "@public/svg/right-drawn.svg";

const Guides = () => {
  return (
    <>
      <div className="absolute right-[0px] -top-12 hidden origin-left rotate-[5deg] lg:-top-8 lg:right-[190px] lg:inline-block ">
        <span className=" font-hand text-xl">Pick a color</span>
      </div>
      <div className="absolute right-[240px] top-1 inline-block origin-right rotate-[18deg] ">
        <Image
          className=" scale-x-[-1]"
          src={rightDrawn}
          alt="arrow swirl"
          width={50}
          height={50}
        />
      </div>
      <div className="absolute left-[0px] -top-16 hidden origin-left -rotate-[5deg] lg:-top-10 lg:left-[150px] lg:inline-block ">
        <span className=" font-hand text-xl">
          Hit the escape<br></br>randomize hex code.
        </span>
      </div>
      <div className="absolute left-[250px] -top-0 hidden origin-right -rotate-[20deg] lg:inline-block ">
        <Image src={rightDrawn} alt="arrow swirl" width={40} height={40} />
      </div>
    </>
  );
};

export default Guides;
