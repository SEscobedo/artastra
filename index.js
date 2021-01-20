import * as THREE from 'three';


export function CreateMercury(earthRadius,position){
    const geometryMercury = new THREE.SphereBufferGeometry( 0.39 * earthRadius, 50, 50 );
    const textureMercury = new THREE.TextureLoader().load('textures/8k_mercury.jpg');
    const materialMercury = new THREE.MeshStandardMaterial({map : textureMercury});
   const mercury = new THREE.Mesh(geometryMercury, materialMercury);
   mercury.position = position;//.set(0, 0, 0.39 * UA);
    return mercury;
}

export function CreateVenus(earthRadius,position){
    const geometryVenus = new THREE.SphereBufferGeometry( 0.95 * earthRadius, 90, 90 );
    const textureVenus = new THREE.TextureLoader().load('textures/4k_venus_atmosphere.jpg');
    const materialVenus = new THREE.MeshStandardMaterial({map : textureVenus});
    const venus = new THREE.Mesh(geometryVenus, materialVenus);
    venus.position.set(0,0,0.72*UA);
    return venus;
}
export function CreateEarth(earthRadius,position){
    const geometryEarth = new THREE.SphereBufferGeometry( earthRadius, 100, 100 );
    const geometryEarthAtmos = new THREE.SphereBufferGeometry( earthRadius + 0.001 * earthRadius, 100, 100 );
    const textureEarth = new THREE.TextureLoader().load('textures/earth_blue_NASA_2.jpg');
    const textureEarthSpec = new THREE.TextureLoader().load('textures/earth_specular_2048_g.jpg');
    const textureEarthNormal = new THREE.TextureLoader().load('textures/earth_normal_2048.jpg');
    const textureEarthAtmos = new THREE.TextureLoader().load('textures/8k_earth_clouds.jpg');
    const materialEarth = new THREE.MeshStandardMaterial({map : textureEarth,
        normalMap:textureEarthNormal,
        normalScale: new THREE.Vector2(0.05,0),
        roughnessMap:textureEarthSpec,
        roughness:0.5});
     const materialEarthAtmos = new THREE.MeshStandardMaterial({color:0xFFFFFF, alphaMap : textureEarthAtmos,opacity: 1,transparent: true});
     const earth = new THREE.Mesh(geometryEarth, materialEarth);
     const earthAtmos = new THREE.Mesh(geometryEarthAtmos, materialEarthAtmos);
     earth.position.set(UA,0,0);
     earth.add(earthAtmos);
     return earth;
}

export function CreateMoon(earthRadius,position){
    const geometryMoon = new THREE.SphereBufferGeometry( 0.2727 * earthRadius, 100, 100 );
    const textureMoon =  new THREE.TextureLoader().load('textures/moon.jpg');
    const textureMoonNormal =  new THREE.TextureLoader().load('textures/moon_normal.jpg');
    const materialMoon = new THREE.MeshStandardMaterial({map : textureMoon,
        normalMap:textureMoonNormal,
        normalScale: new THREE.Vector2(0.05,0.05)});
      const moon = new THREE.Mesh(geometryMoon, materialMoon);
        moon.position.set(UA, 0, 0.002569 * UA);
        moon.rotation.y = Math.PI/2;
    return moon;
}
export function CreateMars(earthRadius,position){
const geometryMars = new THREE.SphereBufferGeometry( 0.53 * earthRadius , 95, 95 );
const geometryMarsAtmosphere = new THREE.SphereBufferGeometry( 0.53 * earthRadius + 0.05, 95, 95 );
const textureMars = new THREE.TextureLoader().load('textures/mars.jpg');
 //const normalMapMars = new THREE.TextureLoader().load('textures/8k_earth_normal_map.tif');
 //const specularMapMars = new THREE.TextureLoader().load('textures/earth_specular_2048_g.jpg');
 const materialMars = new THREE.MeshStandardMaterial({map : textureMars});
 const materialMarsAtmos = new THREE.MeshStandardMaterial({ color: 0xF6723C , opacity: 0.3,
    transparent: true});
 const mars = new THREE.Mesh(geometryMars, materialMars);
 const marsAtmos = new THREE.Mesh(geometryMarsAtmosphere, materialMarsAtmos);
    mars.position.set(0,0,1.52 * UA);
    mars.add(marsAtmos);
    //marsAtmos.position.set(0,0,1.52 * UA)
    return mars;
}
export function CreateJupiter(earthRadius,position){
    const geometryJupiter = new THREE.SphereBufferGeometry(11.2 * earthRadius, 300, 300);
    const textureJupiter = new THREE.TextureLoader().load('textures/jupiter.jpg');
    const materialJupiter = new THREE.MeshStandardMaterial({map : textureJupiter});
    const jupiter = new THREE.Mesh(geometryJupiter, materialJupiter);
    jupiter.position.set(0,0,5.20 * UA);
    return jupiter;
}
export function CreateSaturn(earthRadius,position){
    const geometrySaturn = new THREE.SphereBufferGeometry(9.41 * earthRadius, 250, 250);
    const geometryRing = new THREE.CylinderBufferGeometry((2.326 * 9.41 * earthRadius),(2.326 * 9.41 * earthRadius),0.001,95);
    const textureSaturn = new THREE.TextureLoader().load('textures/8k_saturn.jpg');
    const textureRing = new THREE.TextureLoader().load('textures/saturn_rings_black2.png');
    //const textureRingAlpha = new THREE.TextureLoader().load('textures/saturn_rings_alpha.png');
    //textureRing.encoding = THREE.sRGBEncoding;
    textureRing.anisotropy = 16;
    const materialSaturn = new THREE.MeshStandardMaterial({map : textureSaturn});
    const materialRing = new THREE.MeshBasicMaterial({map : textureRing,transparent:true});
    const saturn = new THREE.Mesh(geometrySaturn, materialSaturn);
    const ring = new THREE.Mesh(geometryRing, materialRing);
    saturn.position.set(0,0,9.54 * UA);
    saturn.add(ring);
    return saturn;
}
export function CreateUranus(earthRadius,position){
    const geometryUranus = new THREE.SphereBufferGeometry(3.98 * earthRadius, 250, 250);
    const textureUranus = new THREE.TextureLoader().load('textures/2k_uranus.jpg');
    const materialUranus = new THREE.MeshStandardMaterial({map : textureUranus});
    const uranus = new THREE.Mesh(geometryUranus, materialUranus);
    uranus.position.set(0,0,19.19 * UA);
    return uranus;
}
export function CreateNeptune(earthRadius,position){
    const geometryNeptune = new THREE.SphereBufferGeometry(3.81 * earthRadius, 250, 250);
    const textureNeptune = new THREE.TextureLoader().load('textures/2k_neptune.jpg');
    const materialNeptune = new THREE.MeshStandardMaterial({map : textureNeptune});
    const neptune = new THREE.Mesh(geometryNeptune, materialNeptune);
    neptune.position.set(0,0,30.06 * UA);
    return neptune;
}
export function CreatePluto(earthRadius, position){

}


