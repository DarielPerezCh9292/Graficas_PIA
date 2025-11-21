    import * as THREE from "./three.module.js";
    import { OrbitControls } from "./OrbitControls.js";
    import { GLTFLoader } from "./GLTFLoader.js";


class Cuartos{
    constructor(positionX, positionY){

        this.positionX = positionX;
        this.positionY = positionY;

    }

    Construir_Cuarto(){
        const Wall1_Geometry = new THREE.BoxGeometry(2, 20, 50);
        const Wall1_Material = new THREE.MeshPhongMaterial({ color: "aqua" });
        const Wall1 = new THREE.Mesh(Wall1_Geometry, Wall1_Material);
        const Wall1_BoundBox = new THREE.Box3();
        //Wall1.position.set(24, 10, 0);
        Wall1.position.set(24, 30, 0);
        Wall1_BoundBox.setFromObject(Wall1);
        scene.add(Wall1);
    }

}




    const Wall1_Geometry = new THREE.BoxGeometry(2, 20, 50);
        const Wall1_Material = new THREE.MeshPhongMaterial({ color: "aqua" });
        const Wall1 = new THREE.Mesh(Wall1_Geometry, Wall1_Material);
        const Wall1_BoundBox = new THREE.Box3();
        Wall1.position.set(24, 10, 0);
        Wall1_BoundBox.setFromObject(Wall1);
        scene.add(Wall1);

        const Wall5_Geometry = new THREE.BoxGeometry(2, 20, 50);
        const Wall5_Material = new THREE.MeshPhongMaterial({ color: "aqua" });
        const Wall5 = new THREE.Mesh(Wall5_Geometry, Wall5_Material);
        const Wall5_BoundBox = new THREE.Box3();
        Wall5.position.set(-24, 10, 0);
        Wall5_BoundBox.setFromObject(Wall5);
        scene.add(Wall5);

        const Wall2_Geometry = new THREE.BoxGeometry(18, 20, 2);
        const Wall2_Material = new THREE.MeshPhongMaterial({ color: "red" });
        const Wall2 = new THREE.Mesh(Wall2_Geometry, Wall2_Material);
        const Wall2_BoundBox = new THREE.Box3();
        Wall2.position.set(14, 10, -24);
        Wall2_BoundBox.setFromObject(Wall2);
        scene.add(Wall2);

        const Wall4_Geometry = new THREE.BoxGeometry(18, 20, 2);
        const Wall4_Material = new THREE.MeshPhongMaterial({ color: "red" });
        const Wall4 = new THREE.Mesh(Wall4_Geometry, Wall4_Material);
        const Wall4_BoundBox = new THREE.Box3();
        Wall4.position.set(-14, 10, -24);
        Wall4_BoundBox.setFromObject(Wall4);
        scene.add(Wall4);

        const Wall8_Geometry = new THREE.BoxGeometry(18, 20, 2);
        const Wall8_Material = new THREE.MeshPhongMaterial({ color: "red" });
        const Wall8 = new THREE.Mesh(Wall8_Geometry, Wall8_Material);
        const Wall8_BoundBox = new THREE.Box3();
        Wall8.position.set(14, 10, 24);
        Wall8_BoundBox.setFromObject(Wall8);
        scene.add(Wall8);

        const Wall6_Geometry = new THREE.BoxGeometry(18, 20, 2);
        const Wall6_Material = new THREE.MeshPhongMaterial({ color: "red" });
        const Wall6 = new THREE.Mesh(Wall6_Geometry, Wall6_Material);
        const Wall6_BoundBox = new THREE.Box3();
        Wall6.position.set(-14, 10, 24);
        Wall6_BoundBox.setFromObject(Wall6);
        scene.add(Wall6);

        const Wall3_Puerta1_Geometry = new THREE.BoxGeometry(10, 20, 2);
        const Wall3_Puerta1_Material = new THREE.MeshPhongMaterial({ color: "white" });
        const Wall3_Puerta1 = new THREE.Mesh(Wall3_Puerta1_Geometry, Wall3_Puerta1_Material);
        const Wall3_Puerta1_BoundBox = new THREE.Box3();
        Wall3_Puerta1.position.set(0, 10, -24);
        Wall3_Puerta1_BoundBox.setFromObject(Wall3_Puerta1);
        scene.add(Wall3_Puerta1);

        const Wall7_Puerta2_Geometry = new THREE.BoxGeometry(10, 20, 2);
        const Wall7_Puerta2_Material = new THREE.MeshPhongMaterial({ color: "white" });
        const Wall7_Puerta2 = new THREE.Mesh(Wall7_Puerta2_Geometry, Wall7_Puerta2_Material);
        const Wall7_Puerta2_BoundBox = new THREE.Box3();
        Wall7_Puerta2.position.set(0, 10, 24);
        Wall7_Puerta2_BoundBox.setFromObject(Wall7_Puerta2);
        scene.add(Wall7_Puerta2);