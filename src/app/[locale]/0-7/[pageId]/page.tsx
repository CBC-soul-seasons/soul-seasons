"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Page = ({ params }: { params: Promise<{ pageId: string }> }) => {
  const [pageId, setPageId] = useState<string | null>(null);

  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params;
      setPageId(resolvedParams.pageId);
    };

    resolveParams();
  }, [params]);

  if (!pageId) {
    return <div>Loading...</div>;
  }

  const nextId = parseInt(pageId, 10) + 1;

  return (
    <Link
      href={nextId === 9 ? "/0-8" : `/0-7/${nextId}`}
      className="flex justify-center items-center relative w-full min-h-screen"
    >
      <div className="flex items-center justify-center">
        <motion.img
          key={pageId}
          src={`/0-7/0-7-${pageId}.webp`}
          alt={` ${pageId}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          style={{
            marginBottom: `${pageId === "1" ? 175 : 100}px`,
            marginTop: `${
              ["3", "4", "5", "6", "7"].includes(pageId) ? 180 : 100
            }px`,
            width: `${
              pageId === "1"
                ? 175
                : pageId === "2"
                ? 226
                : ["3", "4"].includes(pageId)
                ? 277
                : ["5", "6", "7"].includes(pageId)
                ? 354
                : 100
            }px`,
            height: `${
              pageId === "1"
                ? 35
                : pageId === "2"
                ? 114
                : ["3", "4", "5", "6", "7"].includes(pageId)
                ? 203
                : 350
            }px`,
          }}
        />
      </div>
    </Link>
  );
};

export default Page;
