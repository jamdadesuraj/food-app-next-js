"use client";

import Link from "next/link";
import CustomBtn from "./common/CustomBtn";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full h-[90vh] p-4 md:p-0">
        <div className="flex-1 mx-4 md:mx-10 flex flex-col gap-5 items-center md:items-start justify-center text-center md:text-left">
          <h1 className="text-3xl md:text-6xl font-bold text-teal-700 py-5">
            Always Fresh & Always Delicious & Always Hot
          </h1>
          <p className="font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            tempora? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis, tempora?
          </p>
          <CustomBtn>
            <Link href="/menu">Menu</Link>
          </CustomBtn>
        </div>
        <div className="w-full flex-1 relative">
          <Image
            src="/banner.jpg"
            alt="banner"
            width={400}
            height={400}
            className="object-cover "
          />
        </div>
      </div>
    </>
  );
};

export default Home;
