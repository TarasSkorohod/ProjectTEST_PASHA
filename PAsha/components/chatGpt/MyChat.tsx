"use client";
import { ButtonUpScroll } from "@/components/buttonUpScroll/ButtonUpScroll";

const MyChat = () => {
    return (
        <div className="z-20 fixed justify-between mb-20 bottom-10 right-4">
            <div className="flex items-center justify-between">
                <ButtonUpScroll />
            </div>
        </div>
    );
};

export default MyChat;
