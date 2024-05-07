// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import PLANE_SCENE from "../assets/3d/plane.glb";
import {useGLTF} from "@react-three/drei";

const Plane = () => {
    const plane = useGLTF(PLANE_SCENE);

    return (
        <mesh>
            <primitive object={plane.scene}/>
        </mesh>
    )
}

export default Plane;