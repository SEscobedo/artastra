# ArtAstra.js

This is a library for easily generating artistic representation of planets and other celestial objects. It works over three.js.

# Installation
`npm i artastra`

# Usage

```
import * as THREE from 'three.min';
import * as AA from 'artastra';

var scene = new THREE.Scene();

const EarthRadius = 1 //Set scale of the models
const position = new THREE.Vector3(150,0,0); //Where you want your planet
const jupiter =  CreateJupiter(EarthRadius, position);

scene.add(jupiter);

```
