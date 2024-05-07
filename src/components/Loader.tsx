import {Html} from "@react-three/drei";

const Loader = () => {
    return (
        <Html>
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-10 h-10 border-2 border-gray-300 rounded-full animate-spin"></div>
        </div>
        </Html>
    )
}

export default Loader