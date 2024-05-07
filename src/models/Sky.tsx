// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import SKY_SCENE from "../assets/3d/sky.glb";
import {useGLTF} from "@react-three/drei";

const Sky = () => {
    const sky = useGLTF(SKY_SCENE);

    return (
        <mesh>
            <primitive object={sky.scene}/>
        </mesh>
    )
}

export default Sky;