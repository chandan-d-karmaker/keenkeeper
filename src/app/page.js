'use client';
import Banner from "@/components/banner/Banner";
import Friends from "@/components/Friends";
import Image from "next/image";
import { Suspense } from "react";

const friendPromise = fetch('/friends.json').then(res => res.json());



export default function Home() {
  return (
    <>
      <Banner friendPromise={friendPromise}></Banner>
      <div className="divider my-10"></div>
      <Friends friendPromise={friendPromise}></Friends>
    </>
  );
}
