"use client";
import { Link, useRouter } from "@/i18n/routing";
import { useEffect } from "react";

const Scene0 = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("0-1");
    }, 2000);
  }, []);
  return (
    <Link href="/0-1">
      <section
        className="w-full h-lvh flex flex-col"
      />
    </Link>
  );
};

export default Scene0