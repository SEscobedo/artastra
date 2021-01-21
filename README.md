# ArtAstra.js

This is a library for easily generating artistic representation of planets and other celestial objects. It works over three.js.

# Installation
`npm i artastra`

# Usage

Call _Create_ functions to make any planet:

```
import * as THREE from 'three';
import * as AA from 'artastra';

var scene = new THREE.Scene();

const EarthRadius = 1 //Set scale of the models
const position = new THREE.Vector3(150,0,0); //Where you want your planet
const jupiter =  AA.CreateJupiter(EarthRadius, position);

scene.add(jupiter);

```

And add threejs code to render scene as usual.

Available objects: Sun, Mercury, Venus, Earth, Moon, Mars, Jupiter, Saturn, Uranus, Neptune and Pluto.
You cand also create Random Stars with the method `CreateRandomStars()`. Textures can be dowloaded from the repo.
