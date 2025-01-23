import { features } from "../constants";

const FeatureSection = () => {
    return (
        <div className="relativa mt-20 border-b border-neutral-800 min-h-[800px] px-18 sm:px-36 lg:px-60">
            <div className="text-center">
                <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                    feature
                </span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking wide">
                    Easily build
                    <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                        {" "}your code
                    </span>
                </h2>
            </div>
            <div className="flex flex-wrap justify-center mt-10 lg:mt-20">
                {features.map((feature, index) =>
                    <div key={index} className="w-full sm:1/2 lg:w-1/3 px-4 mb-10">
                        <div className="flex item-start">
                            <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange700 justify-center items-center rounded-full">
                                {feature.icon}
                            </div>
                            <div className="ml-4">
                                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                                <p className="text-md p-2 mb-20 text-neutral-500">{feature.description}</p>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

export default FeatureSection