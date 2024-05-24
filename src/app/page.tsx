"use client";
import Contact from "@/src/components/contact/page";
import Extension from "@/src/components/extension/page";
import Customize from "@/src/components/customize/page";
import Devices from "@/src/components/devices/page";
import Sponsors from "@/src/components/sponsors/page";

export default function Home() {
    return (
        <main>
            <Contact/>
            <Extension/>
            <Customize/>
            <Devices/>
            <Sponsors/>
        </main>
    );
}
