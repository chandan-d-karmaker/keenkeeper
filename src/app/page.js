import Banner from "@/components/banner/Banner";
import Friends from "@/components/Friends";
import Image from "next/image";
import { Suspense } from "react";


export default function Home() {
  return (
    <>
      <Banner></Banner>

      <Friends></Friends>
    </>
  );
}
