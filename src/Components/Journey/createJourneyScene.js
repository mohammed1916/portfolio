import * as THREE from 'three';
import { clamp } from './journeyData';

// All models are authored here from geometry; no external models or textures.
export function createJourneyScene(host, onUnavailable) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  host.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog('#e7ebd8', 42, 85);
  const camera = new THREE.OrthographicCamera(-18, 18, 10, -10, .1, 150);
  camera.position.set(5, 9, 25);
  camera.lookAt(0, 1.5, 0);
  const hemisphere = new THREE.HemisphereLight('#fff7dc', '#6d8067', 2.0);
  scene.add(hemisphere);
  const sun = new THREE.DirectionalLight('#fff5d8', 2.3);
  sun.position.set(-12, 20, 14);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  Object.assign(sun.shadow.camera, { left: -24, right: 24, top: 16, bottom: -16, far: 70 });
  sun.shadow.normalBias = .04;
  scene.add(sun);
  const geometries = new Set();
  const materials = new Map();
  const textures = new Set();
  const material = color => {
    if (!materials.has(color)) materials.set(color, new THREE.MeshStandardMaterial({ color, roughness: .82 }));
    return materials.get(color);
  };
  const boxGeometry = new THREE.BoxGeometry(1,1,1); geometries.add(boxGeometry);
  const sphereGeometry = new THREE.IcosahedronGeometry(1,1); geometries.add(sphereGeometry);
  function mesh(parent, geometry, color, position, scale = [1,1,1]) {
    geometries.add(geometry);
    const object = new THREE.Mesh(geometry, material(color));
    object.position.set(...position); object.scale.set(...scale);
    object.castShadow = true; object.receiveShadow = true; parent.add(object); return object;
  }
  const box = (parent, color, p, s) => mesh(parent, boxGeometry, color, p, s);
  const ball = (parent, color, p, s) => mesh(parent, sphereGeometry, color, p, s);
  const cylinderGeometry = new THREE.CylinderGeometry(1,1,1,12); geometries.add(cylinderGeometry);
  function cylinder(parent, color, p, radius, height) { return mesh(parent, cylinderGeometry, color, p, [radius,height,radius]); }
  function label(parent, text, p, width = 4.5, bg = '#f5edcf', ink = '#3b4f43') {
    const canvas = document.createElement('canvas'); canvas.width = 768; canvas.height = 128;
    const context = canvas.getContext('2d');
    context.fillStyle = bg; context.fillRect(0,0,768,128);
    context.fillStyle = ink; context.font = 'bold 42px sans-serif'; context.textAlign = 'center'; context.textBaseline = 'middle'; context.fillText(text,384,66,710);
    const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace; textures.add(texture);
    const mat = new THREE.MeshBasicMaterial({ map: texture }); materials.set(text, mat);
    const geometry = new THREE.PlaneGeometry(width, width / 6); geometries.add(geometry);
    const sign = new THREE.Mesh(geometry, mat); sign.position.set(...p); parent.add(sign); return sign;
  }
  const world = new THREE.Group(); scene.add(world);
  box(world, '#a8b986', [52,-.48,-7], [185,.75,30]);
  box(world, '#617367', [52,-.16,3.8], [185,.24,5.5]);
  box(world, '#dfd5b7', [52,-.05,.8], [185,.34,.65]);
  box(world, '#dfd5b7', [52,-.05,6.8], [185,.34,.65]);
  box(world, '#b5c396', [52,-.28,11], [185,.4,8]);
  for (let x = -30; x < 144; x += 4) box(world, '#f3e5b6', [x,-.025,4.1], [1.9,.025,.1]);
  for (let x = -30; x < 144; x += 2) box(world, x % 4 === 0 ? '#f0e7ce' : '#778473', [x,.13,.8], [1,.3,.67]);

  function tree(parent, x, z, size = 1, palm = false) {
    const group = new THREE.Group(); group.position.set(x,0,z); group.scale.setScalar(size); parent.add(group);
    cylinder(group, '#80634b', [0,1.2,0], .12, 2.4);
    if (palm) {
      for (let i=0;i<7;i++) { const angle=i*Math.PI*2/7; const leaf=ball(group,'#607d4e',[Math.cos(angle)*.6,2.55,Math.sin(angle)*.6],[1.1,.16,.34]); leaf.rotation.y=-angle; leaf.rotation.z=.2; }
    } else {
      ball(group, '#78975e', [0,2.25,0], [.95,1.15,.85]);
      ball(group, '#8ea968', [-.5,2,.1], [.6,.7,.7]);
      ball(group, '#678653', [.45,2.25,.1], [.65,.8,.7]);
    }
  }
  function lamp(x) {
    cylinder(world, '#536758', [x,1.55,.2], .055, 3.1);
    box(world, '#536758', [x+.25,3.1,.2], [.6,.09,.1]);
    box(world, '#fff2bf', [x+.48,3.05,.2], [.28,.1,.25]);
  }
  for(let i=0;i<24;i++) {tree(world,-15+i*6,-2-(i%3)*2, .8+(i%3)*.18, i%4===0); if(i%2===0) lamp(-10+i*6);}
  for(let i=0;i<18;i++) {const x=-12+i*8; ball(world,'#7d985a',[x,.2,8.1],[.8,.45,.6]);}

  function building(index, color, text, university = false, office = false) {
    const group = new THREE.Group(); group.position.set(index*26,0,-5); world.add(group);
    const width = office ? 8 : 9;
    box(group, color, [0,2.1,0], [width,4.2,3.4]);
    box(group, '#f0dfbd', [0,.18,2.1], [width+1,.36,1]);
    box(group, '#e3d4b7', [0,.4,1.9], [width+.5,.2,.6]);
    box(group, office ? '#334b4c' : '#86624d', [0,4.25,0], [width+.6,.22,3.8]);
    box(group, '#e6d9b9', [0,2.1,1.77], [width+.15,.15,.12]);
    for(let floor=0;floor<2;floor++) for(let col=0;col<6;col++) {
      const x=-3.65+col*1.45;
      box(group,'#f3e8d1',[x,1.05+floor*2,1.76],[.93,1.3,.12]);
      box(group,office ? '#668e91' : '#4f716c',[x,1.05+floor*2,1.84],[.72,1.1,.04]);
      box(group,'#ddd4b9',[x,1.05+floor*2,1.87],[.05,1.1,.03]);
    }
    box(group,'#3c5650',[0,.9,1.91],[1.15,1.8,.15]);
    if (office) label(group,text,[0,4.63,1.8],6);
    if (university) {
      box(group,color,[0,4.1,.1],[2.3,4,3.8]);
      box(group,'#f0dfbd',[0,6.15,.1],[2.6,.25,4.1]);
      const roof=mesh(group,new THREE.ConeGeometry(1.8,1.7,4),'#724e42',[0,7.1,.1]); roof.rotation.y=Math.PI/4;
      const clock=cylinder(group,'#eee6ca',[0,5.2,2.06],.54,.07); clock.rotation.x=Math.PI/2;
      box(group,'#4c5846',[0,5.34,2.12],[.045,.32,.04]);
      box(group,'#4c5846',[.12,5.2,2.12],[.28,.045,.04]);
      label(group,text,[0,3.25,2.09],5.5);
      for(const x of [-3.7,-2.3,2.3,3.7]) cylinder(group,'#e7d3b6',[x,1,2.1],.17,2);
    }
    if (office) {
      box(group,'#526f70',[2.2,5,-.5],[3.5,2,2.5]);
      for(let i=0;i<4;i++) box(group,'#9cbbbb',[1+i*.8,5, .8],[.5,1.45,.06]);
      label(group,'AI / SYSTEMS / RESEARCH',[0,2.25,1.95],5,'#344b47','#e1e9cf');
      for(let i=0;i<3;i++) {box(group,'#2f4944',[-2.7+i*.65,.85,2.8],[.4,1.3,.35]);for(let j=0;j<3;j++)box(group,'#c4f564',[-2.7+i*.65,.5+j*.25,3],[.24,.03,.03]);}
    }
    if (!university && !office) {
      const roofShape = new THREE.Shape();
      roofShape.moveTo(-5,0); roofShape.lineTo(0,1.35); roofShape.lineTo(5,0); roofShape.closePath();
      const roofGeometry = new THREE.ExtrudeGeometry(roofShape, { depth: 3.9, bevelEnabled: false });
      mesh(group,roofGeometry,'#a97658',[0,4.25,-1.95]);
      label(group,text,[0,3.95,1.99],6.7);
    }
    // Campus gate, path, bicycle parking and a bench create a distinct place.
    box(group,'#dccdae',[0,.03,3.3],[2,.08,3]);
    for(const x of [-5.5,5.5]) { box(group,color,[x,1,2.5],[.45,2,.5]); tree(group,x*1.25,-.8,1.1,index>=2); }
    box(group,'#87664b',[-5, .65,4],[1.7,.12,.5]);
    for(const x of [-5.6,-4.4]) box(group,'#445d4b',[x,.35,4],[.1,.6,.45]);
    box(group,'#87664b',[-5,.95,3.8],[1.7,.5,.08]);
    return group;
  }
  building(0,'#e0cda3','UNITY PUBLIC SCHOOL');
  building(1,'#d8bd8b','HIGHER SECONDARY');
  building(2,'#c8d1b8','PANIMALAR ENGINEERING');
  building(3,'#b97e64','ANNA UNIVERSITY / CEG',true);
  building(4,'#b8c7bb','BBBS / AI ENGINEERING',false,true);

  // Background layers advance more slowly than the road.
  const distant = new THREE.Group(); scene.add(distant);
  for(let i=0;i<18;i++) {
    const hill=ball(distant,i%2 ? '#b9c9a1' : '#cbd4b6',[-45+i*8,-.3,-23-(i%3)*4],[9,4+i%3,5]); hill.castShadow=false;
  }
  const skyline = new THREE.Group(); scene.add(skyline);
  for(let i=0;i<28;i++) {const height=2+(i*7%5);const b=box(skyline,'#c4ceb6',[-38+i*5,height/2,-18-(i%3)*3],[2.4,height,2]);b.castShadow=false;}
  const clouds = new THREE.Group(); scene.add(clouds);
  for(let i=0;i<12;i++) for(let j=0;j<3;j++){const c=ball(clouds,'#f5f2df',[-28+i*9+j*.65,10+i%3,-28],[1.4,.55,.65]);c.castShadow=false;}

  const bus = new THREE.Group(); bus.position.set(-4,.12,4); scene.add(bus);
  box(bus,'#eeb943',[0,1.1,0],[4.5,1.55,1.65]);
  box(bus,'#f6cb60',[-.2,1.95,0],[3.95,.28,1.75]);
  box(bus,'#e8a43c',[2.15,.98,0],[.85,1.12,1.63]);
  box(bus,'#334c4c',[1.6,1.7,0],[.05,.75,1.52]);
  for(let i=0;i<5;i++) for(const z of [-.84,.84]) {
    box(bus,'#486966',[-1.65+i*.65,1.58,z],[.52,.66,.04]);
    box(bus,'#a5c3b4',[-1.78+i*.65,1.62,z*1.01],[.045,.5,.02]);
  }
  for(const z of [-.84,.84]) {
    box(bus,'#775b34',[-.2,.85,z],[3.95,.08,.035]);
    box(bus,'#775b34',[-.2,.65,z],[3.95,.06,.035]);
  }
  label(bus,'SCHOOL BUS',[-.4,1,.873],1.6,'#eeb943','#4b513b');
  box(bus,'#394e49',[2.61,.59,0],[.12,.18,1.77]);
  for(const z of [-.56,.56]) box(bus,'#fff0bc',[2.6,1.05,z],[.06,.23,.28]);
  box(bus,'#efc557',[1.95,1.8,.91],[.08,.18,.24]);
  const wheels=[];
  function wheel(parent, x, z, radius) {
    const group=new THREE.Group();group.position.set(x,radius,z);parent.add(group);
    const tire=cylinder(group,'#2d3d35',[0,0,0],radius,.23);tire.rotation.x=Math.PI/2;
    const hub=cylinder(group,'#d6d7c2',[0,0,z>0?.13:-.13],radius*.48,.03);hub.rotation.x=Math.PI/2;
    box(group,'#667566',[0,0,z>0?.155:-.155],[radius*.65,.065,.02]);
    wheels.push(group);
  }
  for(const x of [-1.45,1.65])for(const z of [-.82,.82])wheel(bus,x,z,.47);
  const scooter = new THREE.Group();scene.add(scooter);scooter.position.set(-4,.1,4);
  for(const x of [-.9,1.05])wheel(scooter,x,.05,.39);
  box(scooter,'#448f83',[-.65,.65,0],[.95,.65,.55]);
  box(scooter,'#4da99a',[.18,.35,0],[1.7,.13,.5]);
  const front=box(scooter,'#58a696',[.84,1,0],[.3,1.35,.5]);front.rotation.z=-.16;
  box(scooter,'#30483f',[-.7,1.04,0],[1.07,.16,.64]);
  box(scooter,'#354d43',[.92,1.65,0],[.25,.1,.85]);
  const headlight=ball(scooter,'#fff1c0',[1.04,1.48,.05],[.14,.2,.23]);
  headlight.castShadow=false;
  // Helmet, jacket, backpack, hands and bent legs make the rider legible.
  ball(scooter,'#deb086',[-.32,2.13,0],[.25,.3,.25]);
  ball(scooter,'#eac260',[-.35,2.28,0],[.31,.26,.31]);
  box(scooter,'#384f48',[-.09,2.23,.09],[.06,.15,.34]);
  const torso=box(scooter,'#eee3c7',[-.5,1.59,0],[.45,.72,.45]);torso.rotation.z=.15;
  box(scooter,'#b77753',[-.81,1.6,-.02],[.25,.53,.47]);
  for(const z of [-.24,.24]) {
    const arm=box(scooter,'#e8dabc',[.1,1.6,z],[.9,.14,.14]);arm.rotation.z=.06;
    ball(scooter,'#d6a37d',[.6,1.6,z],[.11,.1,.1]);
    box(scooter,'#344f4b',[-.2,.99,z],[.7,.23,.2]);
    box(scooter,'#344f4b',[.1,.68,z],[.2,.54,.2]);
    box(scooter,'#e4ddc7',[.22,.42,z],[.38,.14,.23]);
  }

  let progress=0, disposed=false, visible=true, frame=0;
  const smooth = value => {const t=clamp(value);return t*t*(3-2*t);};
  function render() {
    frame=0;
    if(disposed || !visible || document.hidden) return;
    world.position.x=-progress*104;
    distant.position.x=-progress*19;
    skyline.position.x=-progress*32;
    clouds.position.x=-progress*11;
    const swap=smooth((progress-.34)/.12);
    bus.visible=swap<1;
    bus.position.x=-4+swap*27;
    scooter.visible=swap>0;
    scooter.position.x=-4-(1-swap)*20;
    bus.position.y=.12+Math.sin(progress*700)*.018;
    scooter.position.y=.1+Math.sin(progress*700)*.012;
    wheels.forEach(w=>w.rotation.z=-progress*210);
    renderer.render(scene,camera);
  }
  function request(){if(!frame && !disposed)frame=requestAnimationFrame(render);}
  const resize = () => {
    const width=host.clientWidth, height=host.clientHeight;
    if(!width || !height) return;
    renderer.setSize(width,height,false);
    const aspect=width/height;
    // Mobile uses a tighter view, retaining the vehicle and campus together.
    const viewHeight=aspect<.9?17:15;
    camera.left=-viewHeight*aspect/2;camera.right=viewHeight*aspect/2;
    camera.top=viewHeight/2;camera.bottom=-viewHeight/2;
    const centerX=aspect<.9?-1.8:0;
    camera.position.set(centerX+4,9,25);camera.lookAt(centerX,2.1,0);
    camera.updateProjectionMatrix();request();
  };
  const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(host);
  const intersectionObserver=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)request();});intersectionObserver.observe(host);
  const visibility=()=>{if(!document.hidden)request();};document.addEventListener('visibilitychange',visibility);
  const contextLost=event=>{event.preventDefault();onUnavailable();};renderer.domElement.addEventListener('webglcontextlost',contextLost);
  resize();
  return {
    update(value){const next=clamp(value);if(next!==progress){progress=next;request();}},
    dispose(){
      disposed=true;cancelAnimationFrame(frame);resizeObserver.disconnect();intersectionObserver.disconnect();document.removeEventListener('visibilitychange',visibility);
      renderer.domElement.removeEventListener('webglcontextlost',contextLost);
      geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());renderer.dispose();renderer.forceContextLoss();renderer.domElement.remove();
    }
  };
}
