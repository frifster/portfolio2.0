// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import BIRD_SCENE from "../assets/3d/bird.glb";
import {useGLTF} from "@react-three/drei";

const Bird = () => {
    const bird = useGLTF(BIRD_SCENE);

    return (
        <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
            <primitive object={bird.scene}/>
        </mesh>
    )
}

export default Bird;