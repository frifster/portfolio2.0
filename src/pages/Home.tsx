import {Canvas, Vector3} from "@react-three/fiber";
import {Suspense} from "react";
import Loader from "../components/Loader.tsx";
import Island from "../models/Island.tsx";

const HomePage = () => {
    const adjustIslandForScreenSize = () => {
        const screenPosition: Vector3 = [0, -6.5, -43];
        const screenScale: Vector3 = window.innerWidth < 768 ? [0.9, 0.9, 0.9] : [1, 1, 1];
        return {
            screenScale,
            screenPosition
        }
    }

    const {screenScale, screenPosition} = adjustIslandForScreenSize();

    return (
        <section className="w-full h-screen relative">
            <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                Pop UP
            </div>
            <Canvas
                className="w-full h-screen bg-transparent"
                camera={{
                    near: 0.1,
                    far: 1000,
                }}
            >
                <Suspense fallback={<Loader/>}>
                    <ambientLight/>
                    <Island
                        position={screenPosition}
                        scale={screenScale}
                    />
                </Suspense>
            </Canvas>
        </section>
    )
}

export default HomePage;