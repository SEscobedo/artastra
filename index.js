import * as THREE from 'three';
import { Lensflare, LensflareElement } from 'three/examples/jsm/objects/Lensflare.js';

const AU = 23454.8;

export function CreateSolarSystem(scene, EarthRadius = 1){

    scene.add(CreateRandomStars());
    scene.add(CreateSun(EarthRadius));
    scene.add(CreateMercury(EarthRadius));
    scene.add(CreateVenus(EarthRadius));
    scene.add(CreateEarth(EarthRadius));
    scene.add(CreateMoon(EarthRadius));
    scene.add(CreateMars(EarthRadius));
    scene.add(CreateSaturn(EarthRadius));
    scene.add(CreateJupiter(EarthRadius));
    scene.add(CreateSaturn(EarthRadius));
    scene.add(CreateUranus(EarthRadius));
    scene.add(CreateNeptune(EarthRadius));
    scene.add(CreatePluto(EarthRadius));

}

export function CreateSun(EarthRadius, position = new THREE.Vector3(0, 0, 0.39 * AU), color = 0xFFFFFF){

    const geometrySun = new THREE.SphereBufferGeometry( 109.076 * EarthRadius, 70, 70 );
    const geometryCrown = new THREE.PlaneBufferGeometry( 180 * 109.076 * EarthRadius, 180 * 109.076 * EarthRadius );
    //const textureSun = new THREE.TextureLoader().load('textures/heliographic_negative_bw2.jpg');
    const textureCrown = new THREE.TextureLoader().load('./../textures/lensflare/star_flare.png');
    //const materialSun = new THREE.MeshStandardMaterial({emissiveMap : textureSun,emissive: 0xFFFFFF,emissiveIntensity:1});
    const materialSun = new THREE.MeshStandardMaterial({ color : color, emissive: color,emissiveIntensity:1});
    const materialCrown = new THREE.MeshStandardMaterial({emissiveMap : textureCrown, alphaMap:textureCrown, emissive: 0xFFFFFF,emissiveIntensity:1,transparent:true,opacity:1});
    const sun = new THREE.Mesh(geometrySun, materialSun);
    const crown = new THREE.Mesh(geometryCrown, materialCrown);
    sun.name = 'Sun';
    sun.UserData = {Radius : 109.076 * EarthRadius};
    crown.name = 'crown';
    sun.position = position;
    sun.add(crown); 

     //Sunligth
     const sunlight = new THREE.PointLight( {color: color, decay: 2, intensity: 1} );
     sunlight.castShadow = true;
     //Set up shadow properties for the light
     sunlight.shadow.mapSize.width = 5;  // default
     sunlight.shadow.mapSize.height = 5; // default
     sunlight.shadow.camera.near = 0.5;       // default
     sunlight.shadow.camera.far = 1000 * EarthRadius ; // default
     sunlight.name = 'sunligth';
     sun.add( sunlight );

     // lensflares
     const textureLoader = new THREE.TextureLoader();

     //const textureFlare0 = textureLoader.load( 'textures/lensflare/lensflare0.png' );
     const textureFlare3 = textureLoader.load( './../textures/lensflare/lensflare3.png' );


     const lensflare = new Lensflare();
                 //lensflare.addElement( new LensflareElement( textureFlare0, 700, 0, light.color ) );
                 lensflare.addElement( new LensflareElement( textureFlare3, 60, 0.6 ) );
                 lensflare.addElement( new LensflareElement( textureFlare3, 70, 0.7 ) );
                 lensflare.addElement( new LensflareElement( textureFlare3, 120, 0.9 ) );
                 lensflare.addElement( new LensflareElement( textureFlare3, 70, 1 ) );
                 lensflare.name = 'LensFlare'
                 lensflare.visible = false; //Default mode
                 sunlight.add( lensflare );
    scene.add(sun);
}

export function CreateRandomStars(radius = 30 * AU){
    
    
    // stars
    var i, r = radius, starsGeometry = [ new THREE.BufferGeometry(), new THREE.BufferGeometry() ];
    
    var vertices1 = [];
    var vertices2 = [];
    
    var vertex = new THREE.Vector3();
    
    for ( i = 0; i < 250; i ++ ) {
    
        vertex.x = Math.random() * 2 - 1;
        vertex.y = Math.random() * 2 - 1;
        vertex.z = Math.random() * 2 - 1;
        vertex.multiplyScalar( r );
    
        vertices1.push( vertex.x, vertex.y, vertex.z );
    
    }
    
    for ( i = 0; i < 1500; i ++ ) {
    
        vertex.x = Math.random() * 2 - 1;
        vertex.y = Math.random() * 2 - 1;
        vertex.z = Math.random() * 2 - 1;
        vertex.multiplyScalar( r );
    
        vertices2.push( vertex.x, vertex.y, vertex.z );
    
    }
    
    starsGeometry[ 0 ].setAttribute( 'position', new THREE.Float32BufferAttribute( vertices1, 3 ) );
    starsGeometry[ 1 ].setAttribute( 'position', new THREE.Float32BufferAttribute( vertices2, 3 ) );
    
    var stars;
    var starsMaterials = [
        new THREE.PointsMaterial( { color: 0x555555, size: 2, sizeAttenuation: false } ),
        new THREE.PointsMaterial( { color: 0x555555, size: 1, sizeAttenuation: false } ),
        new THREE.PointsMaterial( { color: 0x333333, size: 2, sizeAttenuation: false } ),
        new THREE.PointsMaterial( { color: 0x3a3a3a, size: 1, sizeAttenuation: false } ),
        new THREE.PointsMaterial( { color: 0x1a1a1a, size: 2, sizeAttenuation: false } ),
        new THREE.PointsMaterial( { color: 0x1a1a1a, size: 1, sizeAttenuation: false } )
    ];
    
    for ( i = 10; i < 30; i ++ ) {
    
        stars = new THREE.Points( starsGeometry[ i % 2 ], starsMaterials[ i % 6 ] );
    
        stars.rotation.x = Math.random() * 6;
        stars.rotation.y = Math.random() * 6;
        stars.rotation.z = Math.random() * 6;
        stars.scale.setScalar( i * 10 );
    
        stars.matrixAutoUpdate = false;
        stars.updateMatrix();
    
        scene.add( stars );
    
    }

}


export function CreateMercury(earthRadius,position = new THREE.Vector3(0, 0, 0.39 * AU)){
    const geometryMercury = new THREE.SphereBufferGeometry( 0.39 * earthRadius, 50, 50 );
    const textureMercury = new THREE.TextureLoader().load('textures/8k_mercury.jpg');
    const materialMercury = new THREE.MeshStandardMaterial({map : textureMercury});
    const mercury = new THREE.Mesh(geometryMercury, materialMercury);
    mercury.position = position;
    mercury.name = 'Mercury';
    return mercury;
}

export function CreateVenus(earthRadius,position = new THREE.Vector3(0, 0, 0.72 * AU)){
    const geometryVenus = new THREE.SphereBufferGeometry( 0.95 * earthRadius, 90, 90 );
    const textureVenus = new THREE.TextureLoader().load('textures/4k_venus_atmosphere.jpg');
    const materialVenus = new THREE.MeshStandardMaterial({map : textureVenus});
    const venus = new THREE.Mesh(geometryVenus, materialVenus);
    venus.position = position;
    venus.name = 'Venus';
    return venus;
}
export function CreateEarth(earthRadius,position = new THREE.Vector3(0,0,AU)){
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
     earth.position = position;
     earth.name = 'Earth';
     earth.add(earthAtmos);
     return earth;
}

export function CreateMoon(earthRadius, position = new THREE.Vector3(0.002569 * AU, 0,AU)){
    const geometryMoon = new THREE.SphereBufferGeometry( 0.2727 * earthRadius, 100, 100 );
    const textureMoon =  new THREE.TextureLoader().load('textures/moon.jpg');
    const textureMoonNormal =  new THREE.TextureLoader().load('textures/moon_normal.jpg');
    const materialMoon = new THREE.MeshStandardMaterial({map : textureMoon,
        normalMap:textureMoonNormal,
        normalScale: new THREE.Vector2(0.05,0.05)});
      const moon = new THREE.Mesh(geometryMoon, materialMoon);
        moon.position = position;
        moon.rotation.y = Math.PI/2;
        moon.name = 'Moon';
    return moon;
}

export function CreateMars(earthRadius, position = new THREE.Vector3(0,0,1.52 * AU)){
const geometryMars = new THREE.SphereBufferGeometry( 0.53 * earthRadius , 95, 95 );
const geometryMarsAtmosphere = new THREE.SphereBufferGeometry( 0.53 * earthRadius + 0.001, 95, 95 );
const textureMars = new THREE.TextureLoader().load('textures/mars.jpg');
 //const normalMapMars = new THREE.TextureLoader().load('textures/8k_earth_normal_map.tif');
 //const specularMapMars = new THREE.TextureLoader().load('textures/earth_specular_2048_g.jpg');
 const materialMars = new THREE.MeshStandardMaterial({map : textureMars});
 const materialMarsAtmos = new THREE.MeshStandardMaterial({ color: 0xF6723C , opacity: 0.3,
    transparent: true});
 const mars = new THREE.Mesh(geometryMars, materialMars);
 const marsAtmos = new THREE.Mesh(geometryMarsAtmosphere, materialMarsAtmos);
    mars.position = position;
    mars.add(marsAtmos);
    mars.name = 'Mars';
    return mars;
}

export function CreateJupiter(earthRadius,position = new THREE.Vector3(0,0,5.20 * AU)){
    const geometryJupiter = new THREE.SphereBufferGeometry(11.2 * earthRadius, 300, 300);
    const textureJupiter = new THREE.TextureLoader().load('textures/jupiter.jpg');
    const materialJupiter = new THREE.MeshStandardMaterial({map : textureJupiter});
    const jupiter = new THREE.Mesh(geometryJupiter, materialJupiter);
    jupiter.position = position;
    jupiter.name = 'Jupiter';
    return jupiter;
}
export function CreateSaturn(earthRadius, position =  new THREE.Vector3(0,0, 9.54 * AU)){
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
    saturn.position = position;
    saturn.name = 'Saturn';
    saturn.add(ring);
    return saturn;
}
export function CreateUranus(earthRadius, position =  new THREE.Vector3(0,0, 19.19 * AU)){
    const geometryUranus = new THREE.SphereBufferGeometry(3.98 * earthRadius, 100, 100);
    const textureUranus = new THREE.TextureLoader().load('textures/2k_uranus.jpg');
    const materialUranus = new THREE.MeshStandardMaterial({map : textureUranus});
    const uranus = new THREE.Mesh(geometryUranus, materialUranus);
    uranus.position = position;
    uranus.name = 'Uranus';
    return uranus;
}
export function CreateNeptune(earthRadius, position =  new THREE.Vector3(0,0, 30.06 * AU)){
    const geometryNeptune = new THREE.SphereBufferGeometry(3.81 * earthRadius, 100, 100);
    const textureNeptune = new THREE.TextureLoader().load('textures/2k_neptune.jpg');
    const materialNeptune = new THREE.MeshStandardMaterial({map : textureNeptune});
    const neptune = new THREE.Mesh(geometryNeptune, materialNeptune);
    neptune.position = position;
    Neptune.name = 'Neptune';
    return neptune;
}
export function CreatePluto(earthRadius, position  =  new THREE.Vector3(0,0, 40 * AU)){
    const geometryPluto = new THREE.SphereBufferGeometry(0.186 * earthRadius, 50, 50);
    const texturePluto = new THREE.TextureLoader().load('textures/pluto.jpg');
    const materialPluto = new THREE.MeshStandardMaterial({map : textureNeptune});
    const Pluto = new THREE.Mesh(geometryNeptune, materialNeptune);
    Pluto.position = position;
    Pluto.name = 'Pluto';
    return Pluto;
}


