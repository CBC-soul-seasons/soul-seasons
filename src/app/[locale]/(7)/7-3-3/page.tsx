"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

const products = [
  [
    {
      image: "/7-3-3/Merchandise (1).webp",
    },
    {
      image: "/7-3-3/Merchandise (2).webp",
    },
  ],
  [
    {
      image: "/7-3-3/Merchandise (3).webp",
    },
    {
      image: "/7-3-3/Merchandise (4).webp",
    },
  ],
  [
    {
      image: "/7-3-3/Merchandise (5).webp",
    },
  ],
];

const Page7_3_3 = () => {
  const t = useTranslations("7-3-3");
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPageIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <motion.div
        className="text-center text-white absolute top-[12%] "
        style={{
          fontSize: "14px",
        }}
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p>{t("p2.s1")}</p>
        <p>{t("p2.s2")}</p>
        <p>{t("p2.s3")}</p>
      </motion.div>
      <div className="relative w-[361px] h-[530px] bg-white rounded-2xl shadow-lg p-6 overflow-y-auto custom-scrollbar overflow-x-hidden top-[5%]">
        <div className="flex justify-center mt-10 mb-4">
          <Image
            src="/7-3-3/image 102.webp"
            alt="Exhibition Image"
            width={330}
            height={410}
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
        <motion.div
          className="text-center text-[16px] text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p
            className="text-[16px]"
            style={{
              color: "#182649",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.1) 100%)",
              maskImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.1) 100%)",
            }}
          >
            {t("slide")}
          </p>
        </motion.div>
        <div className="flex justify-center mt-1 mb-10">
          <Image
            src="/7-3-3/Frame 121075708.webp"
            alt="Exhibition Image"
            width={330}
            height={410}
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
        <motion.div
          className="text-left w-[90%] mx-auto mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[17px] font-bold bg-gradient-to-r from-[#9A8CB5] via-[#CBD9EF] via-[#FCD5C6] via-[#F2DD83] to-[#EB9861] text-transparent bg-clip-text">
            {t("p1.s1")}
          </p>
          <p className="mt-1 text-[16px] bg-gradient-to-r from-[#9A8CB5] via-[#FCD5C6] via-[#F2DD83] to-[#EB9861] text-transparent bg-clip-text">
            {t("p1.s2")}
          </p>
          <p className="text-[16px] bg-gradient-to-r from-[#9A8CB5] via-[#F2DD83] to-[#EB9861] text-transparent bg-clip-text">
            {t("p1.s3")}
          </p>
          <p className="text-[16px] bg-gradient-to-r from-[#9A8CB5] to-[#EB9861] text-transparent bg-clip-text">
            {t("p1.s4")}
          </p>
          <p className="text-[16px] bg-gradient-to-r from-[#9A8CB5] via-[#FCD5C6] via-[#F2DD83] to-[#EB9861] text-transparent bg-clip-text">
            {t("p1.s5")}
          </p>
          <br />
          <p className="text-[16px] text-[#182649]">{t("p1.s6")}</p>
          <br />
          <p className="text-[16px] text-[#182649]">{t("p1.s7")}</p>
          <br />
          <p className="text-[16px] text-[#182649]">{t("p1.s8")}</p>
          <br />
          <p className="text-[16px] text-[#182649]">{t("p1.s9")}</p>
          <br />
          <p className="text-[16px] text-[#182649]">{t("p1.s10")}</p>

          <div className="flex items-center gap-1">
            <Image
              src="/7-3-3/fi-rr-home-location-alt.svg"
              alt="Location Icon"
              width={15}
              height={15}
              objectFit="contain"
            />
            <p className="text-[16px] text-[#182649]">{t("p1.s11")}</p>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/7-3-3/fi-rr-calendar.svg"
              alt="Calendar Icon"
              width={15}
              height={15}
              objectFit="contain"
            />
            <p className="text-[16px] text-[#182649]">{t("p1.s12")}</p>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/7-3-3/fi-rr-clock.svg"
              alt="Clock Icon"
              width={15}
              height={15}
              objectFit="contain"
            />
            <p className="text-[16px] text-[#182649]">{t("p1.s13")}</p>
          </div>

          <p className="text-[16px] text-[#182649]">{t("p1.s14")}</p>
          <br />
          <p className="text-[16px] text-[#182649]">{t("p1.s15")}</p>

          <div className="flex items-center gap-2">
            <p className="text-[16px] font-bold text-[#EB9861] cursor-pointer underline">
              <a
                href="https://www.zipeventapp.com/e/Soul-Seasons"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("p1.s16")}
              </a>
            </p>

            <p className="text-[16px] text-[#182649]">{t("p1.s17")}</p>
          </div>

          <p className="text-[16px] text-[#182649]">{t("p1.s18")}</p>
          <br />
        </motion.div>
        <motion.div
          className="text-center w-[85%] mx-auto mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-left text-[19px] font-bold bg-gradient-to-r from-[#9A8CB5] via-[#CBD9EF] via-[#FCD5C6] via-[#F2DD83] to-[#EB9861] text-transparent bg-clip-text">
            {t("p3.s1")}
          </p>
          <br />
          <p className="text-[16px] text-[#182649]">{t("p3.s2")}</p>
          <p className="text-[16px] text-[#182649]">{t("p3.s3")}</p>
        </motion.div>
        <motion.div
          className="flex w-full mt-10"
          animate={{ transform: `translateX(-${pageIndex * 100}%)` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {products.map((productPage, index) => (
            <div
              key={index}
              className="flex w-full min-w-full justify-center gap-6"
            >
              {productPage.map((product, i) => (
                <div
                  key={i}
                  className="w-[140px] h-[140px] flex items-center justify-center flex-shrink-0"
                >
                  <Image
                    src={product.image}
                    alt="Product"
                    width={130}
                    height={130}
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
        {/* Navigation Dots (Click to Manually Change) */}
        <div className="flex mt-10 justify-center space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setPageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                pageIndex === index ? "bg-black scale-110" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="flex justify-center gap-6 mt-6">
          <a
            href="mailto:soulseasons24@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/7-3-3/Frame 121075755.webp"
              alt="Contact Us"
              width={50}
              height={58}
              objectFit="contain"
              className="rounded-lg"
            />
          </a>
          <a
            href="https://www.instagram.com/cbc.exhibit?igsh=MWFpczEwbGhsd3Bhaw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/7-3-3/Frame 121075756.webp"
              alt="Follow Us"
              width={50}
              height={58}
              objectFit="contain"
              className="rounded-lg"
            />
          </a>
        </div>
        <div className="flex justify-center mt-1 mb-10">
          <Image
            src="/7-3-3/Frame 121075708.webp"
            alt="Exhibition Image"
            width={330}
            height={410}
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
        <motion.div
          className="text-left w-[85%] mx-auto mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[19px] bg-gradient-to-r from-[#9A8CB5] via-[#CBD9EF] via-[#FCD5C6] via-[#F2DD83] to-[#EB9861] text-transparent bg-clip-text">
            {t("p4.s1")}
          </p>
          <p className="text-[14px] text-[#182649]">{t("p4.s2")}</p>
          <br />
          <div className="flex items-center gap-4">
            <Image
              src="/7-3-3/image 109.webp"
              alt="QR Code"
              width={120}
              height={120}
              objectFit="contain"
              className="rounded-lg"
            />

            <div className="text-left">
              <p className="text-[12px] text-[#182649]">{t("p4.s3")}</p>
              <p className="text-[12px] text-[#182649]">{t("p4.s4")}</p>
              <p className="text-[12px] text-[#182649]">{t("p4.s5")}</p>
              <p className="text-[12px] text-[#182649]">{t("p4.s6")}</p>
              <p className="text-[12px] text-[#182649]">{t("p4.s7")}</p>
            </div>
          </div>
          <br />
        </motion.div>
        <motion.div
          className="text-left w-[85%] mx-auto mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[19px] bg-gradient-to-r from-[#9A8CB5] via-[#CBD9EF] via-[#FCD5C6] via-[#F2DD83] to-[#EB9861] text-transparent bg-clip-text">
            {t("p5.s1")}
          </p>
          <div className="flex items-center gap-4">
            <Image
              src="/7-3-3/Frame 121075737.webp"
              alt="QR Code"
              width={275}
              height={80}
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </motion.div>
        <div className="flex justify-center mt-1 mb-10">
          <Image
            src="/7-3-3/Frame 121075708.webp"
            alt="Exhibition Image"
            width={330}
            height={410}
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
        <motion.div
          className="text-left w-[85%] mx-auto mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[19px] bg-gradient-to-r from-[#9A8CB5] via-[#CBD9EF] via-[#FCD5C6] via-[#F2DD83] to-[#EB9861] text-transparent bg-clip-text">
            {t("p6.s1")}
          </p>
          <br />
          <div className="flex items-center gap-4">
            <Image
              src="/7-3-3/1 1.webp"
              alt="QR Code"
              width={275}
              height={80}
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
          <br />
          <div className="flex items-center gap-1">
            <Image
              src="/7-3-3/fi-rr-link.svg"
              alt="QR Code"
              width={10}
              height={10}
              objectFit="contain"
              className="rounded-lg"
            />

            <p className="text-[14px] cursor-pointer underline">
              <a
                href="https://www.zipeventapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("p6.s2")}
              </a>
            </p>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <Image
              src="/7-3-3/Group 124.webp"
              alt="fb"
              width={25}
              height={25}
              objectFit="contain"
              className="rounded-lg"
            />

            <p className="text-[10px] cursor-pointer">
              <a
                href="https://www.facebook.com/zipevent/?locale=th_TH"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("p6.s1")}
              </a>
            </p>

            <Image
              src="/7-3-3/Group 125.webp"
              alt="fb"
              width={25}
              height={25}
              objectFit="contain"
              className="rounded-lg ml-4"
            />

            <p className="text-[10px] cursor-pointer">
              <a
                href="https://www.instagram.com/zipevent/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("p6.s1")}
              </a>
            </p>
          </div>
          <br />
        </motion.div>
        <motion.div
          className="text-left w-[85%] mx-auto mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[19px] bg-gradient-to-r from-[#9A8CB5] via-[#CBD9EF] via-[#FCD5C6] via-[#F2DD83] to-[#EB9861] text-transparent bg-clip-text">
            {t("p7.s1")}
          </p>
          <br />
          <div className="flex items-center gap-4">
            <Image
              src="/7-3-3/1 1 (1).webp"
              alt="QR Code"
              width={275}
              height={80}
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
          <br />
          <p className="text-center text-[12px] text-[#182649]">{t("p7.s2")}</p>
          <br />
        </motion.div>
        <motion.div
          className="text-left w-[85%] mx-auto mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[19px] bg-gradient-to-r from-[#9A8CB5] via-[#CBD9EF] via-[#FCD5C6] via-[#F2DD83] to-[#EB9861] text-transparent bg-clip-text">
            {t("p8.s1")}
          </p>
          <br />
          <div className="flex items-center gap-4">
            <Image
              src="/7-3-3/Frame 121075737 (1).webp"
              alt="QR Code"
              width={275}
              height={80}
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
          <br />
          <p className="text-[12px] text-[#182649]">{t("p8.s2")}</p>
          <p className="text-[12px] text-[#182649]">{t("p8.s3")}</p>
          <div className="flex items-center gap-1 mt-2">
            <Image
              src="/7-3-3/Group 124 (1).webp"
              alt="QR Code"
              width={25}
              height={25}
              objectFit="contain"
              className="rounded-lg"
            />

            <p className="text-[10px] cursor-pointer">
              <a
                href="mailto:soulseasons24@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("email")}
              </a>
            </p>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <Image
              src="/7-3-3/Group 125.webp"
              alt="QR Code"
              width={25}
              height={25}
              objectFit="contain"
              className="rounded-lg"
            />

            <p className="text-[10px] cursor-pointer">
              <a
                href="https://www.instagram.com/cbc.exhibit?igsh=MWFpczEwbGhsd3Bhaw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("ig")}
              </a>
            </p>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <Image
              src="/7-3-3/Group 125 (1).webp"
              alt="QR Code"
              width={25}
              height={25}
              objectFit="contain"
              className="rounded-lg"
            />

            <p className="text-[10px] cursor-pointer">
              <a
                href="tel:0969549900"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("tel")}
              </a>
            </p>
          </div>
        </motion.div>
        <div className="flex justify-center mt-1 mb-10">
          <Image
            src="/7-3-3/Frame 121075708.webp"
            alt="Exhibition Image"
            width={330}
            height={410}
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
        <motion.div
          className="text-left w-[85%] mx-auto mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[19px] bg-gradient-to-r from-[#9A8CB5] via-[#CBD9EF] via-[#FCD5C6] via-[#F2DD83] to-[#EB9861] text-transparent bg-clip-text">
            {t("p9.s1")}
          </p>
          <br />
          <div className="flex items-center gap-4">
            <Image
              src="/7-3-3/S__86908936 1.webp"
              alt="QR Code"
              width={80}
              height={80}
              objectFit="contain"
              className="rounded-lg"
            />

            <div className="text-left">
              <div className="flex items-center gap-1 mt-1">
                <Image
                  src="/7-3-3/Group 124 (1).webp"
                  alt="QR Code"
                  width={25}
                  height={25}
                  objectFit="contain"
                  className="rounded-lg"
                />

                <p className="text-[10px] cursor-pointer">
                  <a
                    href="mailto:tabsungnoensiraphat@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("p9.s2")}
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <Image
                  src="/7-3-3/Group 125.webp"
                  alt="QR Code"
                  width={25}
                  height={25}
                  objectFit="contain"
                  className="rounded-lg"
                />

                <p className="text-[10px] cursor-pointer">
                  <a
                    href="https://www.instagram.com/papapapaparewa?igsh=eGdqb2Rqa21temp0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("p9.s3")}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center mt-1 mb-10">
          <Image
            src="/7-3-3/Frame 121075708.webp"
            alt="Exhibition Image"
            width={400}
            height={100}
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
        <div className="-m-6 mt-5 w-[calc(100%+3rem)] bg-gradient-to-r from-[#F8F5FF] via-[#FAE9DD] to-[#F8F5FF] rounded-b-2xl shadow-lg p-4 text-center">
          <p className="text-left text-[14px] text-[#182649] font-bold pl-7">
            {t("contact")}
          </p>
          <div className="pl-6">
            <div className="flex items-center gap-1 mt-2">
              <Image
                src="/7-3-3/Group 124 (1).webp"
                alt="QR Code"
                width={30}
                height={30}
                objectFit="contain"
                className="rounded-lg"
              />

              <p className="text-[14px] cursor-pointer">
                <a
                  href="mailto:soulseasons24@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("email")}
                </a>
              </p>
            </div>
            <div className="flex items-center gap-1 mt-1">
              <Image
                src="/7-3-3/Group 125.webp"
                alt="QR Code"
                width={30}
                height={30}
                objectFit="contain"
                className="rounded-lg"
              />

              <p className="text-[14px] cursor-pointer">
                <a
                  href="https://www.instagram.com/cbc.exhibit?igsh=MWFpczEwbGhsd3Bhaw=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("ig")}
                </a>
              </p>
            </div>
            <div className="flex items-center gap-1 mt-1">
              <Image
                src="/7-3-3/Group 125 (1).webp"
                alt="QR Code"
                width={30}
                height={30}
                objectFit="contain"
                className="rounded-lg"
              />

              <p className="text-[14px] cursor-pointer">
                <a
                  href="tel:0969549900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("tel")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-3 transform -translate-x-1/2 flex flex-col space-y-2 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1 } }}
      >
        <a
          href="https://www.zipeventapp.com/e/Soul-Seasons"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#182649] text-[20px] font-bold w-[126px] h-[28px] flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 transition"
        >
          {t("p10.s1")}
        </a>

        <a
          href="7-2"
          className="bg-[#182649] text-[16px] text-white font-bold w-[102px] h-[28px] flex items-center justify-center rounded-full shadow-md hover:bg-[#0f1a30] transition"
        >
          {t("p10.s2")}
        </a>
      </motion.div>
    </div>
  );
};

export default Page7_3_3;
