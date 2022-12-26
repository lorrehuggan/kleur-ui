import Image from "next/image";
import rightDrawn from "@public/svg/right-drawn.svg";

const Guides = () => {
  return (
    <>
      <div className="absolute right-[190px] -top-8 inline-block origin-left rotate-[5deg] ">
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
      <div className="absolute left-[150px] -top-10 inline-block origin-left -rotate-[5deg] ">
        <span className=" font-hand text-xl">
          Hit the ctrl<br></br>randomize hex code.
        </span>
      </div>
      <div className="absolute left-[250px] -top-0 inline-block origin-right -rotate-[20deg] ">
        <Image src={rightDrawn} alt="arrow swirl" width={40} height={40} />
      </div>
    </>
  );
};

export default Guides;
