// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import PLANE_SCENE from "../assets/3d/plane.glb";
import {useGLTF} from "@react-three/drei";
import {Vector3} from "@react-three/fiber";

type PlaneProps = JSX.IntrinsicElements['group'] & {
    planePosition?: Vector3
    planeScale?: Vector3
}

const Plane = (props: PlaneProps) => {
    const plane = useGLTF(PLANE_SCENE);
    const {planePosition, planeScale} = props;

    return (
        <mesh scale={planeScale} position={planePosition} rotation={[0, 20, 0]}>
            <primitive object={plane.scene}/>
        </mesh>
    )
}

export default Plane;