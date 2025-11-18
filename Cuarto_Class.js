    import * as THREE from "./three.module.js";
    import { OrbitControls } from "./OrbitControls.js";
    import { GLTFLoader } from "./GLTFLoader.js";

    const Wall3_Puerta1_Geometry = new THREE.BoxGeometry(10, 20, 2);
        const Wall3_Puerta1_Material = new THREE.MeshPhongMaterial({ color: "red" });
        const Wall3_Puerta1 = new THREE.Mesh(Wall3_Puerta1_Geometry, Wall3_Puerta1_Material);
        const Wall3_Puerta1_BoundBox = new THREE.Box3();
        Wall3_Puerta1.position.set(0, 10, -24);
        Wall3_Puerta1_BoundBox.setFromObject(Wall3_Puerta1);
        scene.add(Wall3_Puerta1);