import React, { useEffect, useCallback } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Progress from "./Progress";
import { CurrentSlideData, DataSlider } from "@/data/dataSliderHome/DataTepe";

type Props = {
    currentSlideData: CurrentSlideData;
    sliderData: DataSlider[];
    data: DataSlider[];
    transitionData: DataSlider;
    handleData: React.Dispatch<React.SetStateAction<DataSlider[]>>;
    handleTransitionData: React.Dispatch<React.SetStateAction<DataSlider>>;
    handleCurrentSlideData: React.Dispatch<
        React.SetStateAction<CurrentSlideData>
    >;
    initData: DataSlider;
};

function Controls({
                      sliderData,
                      data,
                      transitionData,
                      currentSlideData,
                      handleData,
                      handleTransitionData,
                      handleCurrentSlideData,
                      initData,
                  }: Props) {
    const handlePrev = () => {
        handleData((prevData) => [
            transitionData ? transitionData : initData,
            ...prevData.slice(0, prevData.length - 1),
        ]);
        handleCurrentSlideData({
            data: transitionData ? transitionData : sliderData[0],
            index: sliderData.findIndex(
                (ele) => ele.img === data[data.length - 1].img
            ),
        });
        handleTransitionData(data[data.length - 1]);
    };

    const handleNext = useCallback(() => {
        handleData((prev) => prev.slice(1));
        handleCurrentSlideData({
            data: transitionData ? transitionData : initData,
            index: sliderData.findIndex((ele) => ele.img === data[0].img),
        });
        handleTransitionData(data[0]);
        setTimeout(() => {
            handleData((newData) => [
                ...newData,
                transitionData ? transitionData : initData,
            ]);
        }, 100);
    }, [handleData, handleCurrentSlideData, handleTransitionData, initData, transitionData, sliderData, data]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(intervalId);
    }, [handleNext]);

    return (
        <div className="flex items-center gap-3 px-0 py-3 md:px-1 md:py-5" style={{bottom: 0}}>
            <SliderButton handleClick={handlePrev}>
                <IoIosArrowBack className=" text-xl"/>
            </SliderButton>
            <SliderButton handleClick={handleNext}>
                <IoIosArrowForward className=" text-xl"/>
            </SliderButton>
            <Progress curIndex={currentSlideData.index} length={sliderData.length}/>
        </div>
    );
}

export default Controls;

const SliderButton = ({children, handleClick}: {
    children: React.ReactNode;
    handleClick: () => void;
}) => {
    return (
        <button
            className="flex h-14 w-14 items-center justify-center rounded-full border-[1px] border-[#fdfdfd5f] transition duration-300
ease-in-out hover:bg-white hover:text-black"
            onClick={handleClick}
        >
            {children}
        </button>
    );
};
