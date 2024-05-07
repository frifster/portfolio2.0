import {Canvas, Vector3, Euler} from "@react-three/fiber";
import {Suspense, useState} from "react";
import Loader from "../components/Loader.tsx";
import Island from "../models/Island.tsx";
import Sky from "../models/Sky.tsx";
import Bird from "../models/Bird.tsx";
import Plane from "../models/Plane.tsx";

const HomePage = () => {
    const [isRotating, setIsRotating] = useState(false);

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

    const adjustPlaneForScreenSize = () => {
        const planePosition: Vector3 = window.innerWidth < 768 ? [0, -1.5, 0] : [0, -4, -4];
        const planeScale: Vector3 = window.innerWidth < 768 ? [0.9, 0.9, 0.9] : [3, 3, 3];
        return {
            planeScale,
            planePosition,
        }
    }

    const {islandScale, islandPosition, rotation} = adjustIslandForScreenSize();
    const {planeScale, planePosition} = adjustPlaneForScreenSize();

    return (
        <section className="w-full h-screen relative">
            <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                Pop UP
            </div>
            <Canvas
                className={`w-full h-full bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
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
                    <Bird/>
                    <Sky/>
                    <Plane
                        planePosition={planePosition}
                        planeScale={planeScale}
                    />
                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotation={rotation}
                        setIsRotating={setIsRotating}
                        isRotating={isRotating}
                    />
                </Suspense>
            </Canvas>
        </section>
    )
}

export default HomePage;