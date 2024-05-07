/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import PLANE_SCENE from "../assets/3d/plane.glb";
import {useAnimations, useGLTF} from "@react-three/drei";
import {Vector3} from "@react-three/fiber";
import {useEffect, useRef} from "react";

type PlaneProps = JSX.IntrinsicElements['group'] & {
    planePosition?: Vector3
    planeScale?: Vector3
    isRotating?: boolean
}

const Plane = (props: PlaneProps) => {
    const ref = useRef();
    const plane = useGLTF(PLANE_SCENE);
    const {planePosition, planeScale} = props;
    const {actions} = useAnimations(plane.animations, ref);

    useEffect(() => {
        actions && actions["Take 001"]?.play();
    }, [actions, props.isRotating]);

    return (
        // @ts-ignore
        <mesh scale={planeScale} position={planePosition} rotation={[0, 20, 0]} ref={ref}>
            <primitive object={plane.scene}/>
        </mesh>
    )
}

export default Plane;