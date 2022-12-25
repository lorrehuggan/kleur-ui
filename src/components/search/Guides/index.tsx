import Image from "next/image";
import arrowSwirl from "@public/svg/arrow-scribble.svg";
import rightDrawn from "@public/svg/right-drawn.svg";
import arrowWith from "@public/svg/arrow-with.svg";

const Guides = () => {
  return (
    <>
      <div className="absolute right-[190px] -top-8 inline-block origin-left rotate-[5deg] ">
        <span className=" font-hand text-xl">Pick a color</span>
      </div>
      <div className="absolute right-[240px] top-1 z-50 inline-block origin-right rotate-[18deg] ">
        <Image
          className=" scale-x-[-1]"
          src={rightDrawn}
          alt="arrow swirl"
          width={50}
          height={50}
        />
      </div>
      {/* <div className="absolute left-[150px] -top-10 inline-block origin-left -rotate-[5deg] ">
        <span className=" font-hand text-xl">
          Hit the space bar<br></br>randomize hex code.
        </span>
      </div>
      <div className="absolute left-[260px] -top-2 inline-block origin-right -rotate-[30deg] ">
        <Image src={arrowWith} alt="arrow swirl" width={50} height={50} />
      </div> */}
    </>
  );
};

export default Guides;
