import {Canvas, Vector3, Euler} from "@react-three/fiber";
import {Suspense} from "react";
import Loader from "../components/Loader.tsx";
import Island from "../models/Island.tsx";
import Sky from "../models/Sky.tsx";

const HomePage = () => {
    const adjustIslandForScreenSize = () => {
        const islandPosition: Vector3 = [0, -6.5, -43];
        const islandScale: Vector3 = window.innerWidth < 768 ? [0.9, 0.9, 0.9] : [1, 1, 1];
        const rotation: Euler = [0.1, 4.7, 0];
        return {
            islandScale,
            islandPosition,
            rotation
        }
    }

    const {islandScale, islandPosition, rotation} = adjustIslandForScreenSize();

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
                    <directionalLight position={[
                        1, 10, 10
                    ]} intensity={1.6}/>
                    <ambientLight intensity={0.2}/>
                    <hemisphereLight color="#b1e1ff" groundColor="#000000"/>
                    <Sky/>
                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotation={rotation}
                    />
                </Suspense>
            </Canvas>
        </section>
    )
}

export default HomePage;