import Lottie from "lottie-react";
import animationData from "../assets/animations/programming.json";

const MainContent = () => {
    return (
        <div style={{ width: 300, height: 300, margin: "0 auto" }}>
            <Lottie animationData={animationData} loop={true} />
        </div>
    );
};

export default MainContent;

