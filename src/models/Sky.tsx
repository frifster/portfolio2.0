/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import SKY_SCENE from "../assets/3d/sky.glb";
import {useGLTF} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import {useRef} from "react";

type SkyProps = JSX.IntrinsicElements['group'] & {
    isRotating?: boolean
}

const Sky = (props: SkyProps) => {
    const sky = useGLTF(SKY_SCENE);
    const skyRef = useRef();
    // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
    // It ensures smooth animations by making the rotation frame rate-independent.
    // 'delta' represents the time in seconds since the last frame.
    useFrame((_, delta) => {
        if (props.isRotating) {
            if (skyRef.current) {
                // @ts-ignore
                skyRef.current.rotation.y += 0.25 * delta; // Adjust the rotation speed as needed
            }
        }
    });

    return (
        // @ts-ignore
        <mesh ref={skyRef}>
            <primitive object={sky.scene}/>
        </mesh>
    )
}

export default Sky;