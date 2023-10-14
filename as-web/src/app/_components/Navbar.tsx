import Link from "next/link"
import Image from "next/image"
import React from "react";

type Props = {};

export default function Navbar({}: Props){
    return (
        <nav>
            <div className="logo">
                <Link href="/">
                    <Image src="/logo.png" width={50} height={50} alt="logo" />
                </Link>
            </div>
            <Link href="/">Home</Link>
            <Link href="/exempt">Exempt</Link>
            <Link href="/about">About</Link>
        </nav>
    )
}