import React from "react";

const Hero = () => {
    return (
        <div className="w-[1280px] m-auto">
            <div className="px-[100px] py-[80px]">
                <p className="text-[#58FFDA] text-[18px]">Hi, my name is</p>
                <h1 className="text-[#CCD6F6] font-bold text-[64px]">
                    Niyazov Shohjahon
                </h1>
                <p className="text-[#8892B0] text-[64px] font-bold">
                    I build things for the web.
                </p>
                <p className="text-[#8892B0] text-[20px] mt-4">
                    A frontend developer with aim of adepting at contributing to{" "}
                    <br />a highly collaborative work environment, finding
                    solutions,
                    <br /> and determining customer satisfaction.
                </p>
            </div>
        </div>
    );
};

export default Hero;
