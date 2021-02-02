

const THREE = require('three');
const AA = require('../artastra')(THREE);

test('Should output something for stars', () => {
    
    const stars = AA.CreateRandomStars();
    expect.anything(stars);

});

test('Should output something for sun', () => {
    
    const sun = AA.CreateSun();
    expect.anything(sun);

});

test('Should output something for Mercury', () => {
    
    const p = AA.CreateMercury();
    expect.anything(p);

});


test('Should output something for Venus', () => {
    
    const p = AA.CreateVenus();
    expect.anything(p);

});

test('Should output something for Earth', () => {
    
    const p = AA.CreateEarth();
    expect.anything(p);

});

test('Should output something for Moon', () => {
    
    const p = AA.CreateMoon();
    expect.anything(p);

});

test('Should output something for Mars', () => {
    
    const p = AA.CreateMars();
    expect.anything(p);

});

test('Should output something for Jupiter', () => {
    
    const p = AA.CreateJupiter();
    expect.anything(p);

});

test('Should output something for Saturn', () => {
    
    const p = AA.CreateSaturn();
    expect.anything(p);

});

test('Should output something for Uranus', () => {
    
    const p = AA.CreateUranus();
    expect.anything(p);

});

test('Should output something for Neptune', () => {
    
    const p = AA.CreateNeptune();
    expect.anything(p);

});

test('Should output something for Pluto', () => {
    
    const p = AA.CreatePluto();
    expect.anything(p);

});



