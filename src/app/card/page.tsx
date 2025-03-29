"use client";
import Image from "next/image";
import React, { Suspense } from "react";
import img from "../../assets/bg.png";
import { useSearchParams } from "next/navigation";

function CardsContent() {
    const searchParams = useSearchParams();
    const sender = searchParams.get("sender");
    const reciver = searchParams.get("reciver");
    const message = searchParams.get("message");

    return (
        <div className="h-full w-full flex items-center justify-center">
            <Image src={img} alt={"Hello"} className="h-full w-full" />
            <div className="mt-10 z-1 absolute flex flex-col items-center justify-center h-full w-full text-stone-900">
                <h1 className="text-[50px] font-extrabold leading-snug text-center bg-gradient-to-r from-green-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text">
                    <b>Happy</b> <br />
                    Eid Mubarak !<br />
                    To <br /> <b>{reciver}</b>
                </h1>
                <div className="bottom-text mt-10">
                    <p className="text-xl font-bold text-center leading-7 my-10">
                        عيد مبارك! أسأل الله أن يملأ حياتك بالسعادة والسلام
                    </p>
                    <p className="text-xl font-bold text-center leading-7">
                        {message
                            ? message
                            : "Eid Mubarak! May Allah fill your life with happiness and peace"}
                    </p>
                    <p className="text-center mt-10 text-lg">~ {sender} ~</p>
                </div>
            </div>
        </div>
    );
}

export default function Cards() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CardsContent />
        </Suspense>
    );
}
