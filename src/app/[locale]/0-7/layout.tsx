import Image from "next/image";

const SevenLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      {children}
      <Image
        src="/0-7/0-7-bg.webp"
        alt="Picture of the author"
        className="-z-10 absolute top-0 left-0"
        width={500}
        height={500}
      />
    </div>
  );
};

export default SevenLayout;
