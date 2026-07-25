---
name: threejs
description: Comprehensive Three.js skill covering 3D scene setup, cameras, renderers, geometries, materials, textures, lighting, animation, interaction, asset loading (GLTF/HDR), custom GLSL shaders, and post-processing visual effects.
---

# Three.js Skill

Consolidated skill for building 3D web applications with Three.js. Use the reference map and decision guide below to locate detailed code patterns and technical specifications.

## Quick Start Template

A complete, production-ready Three.js boilerplate including scene, camera, renderer, lighting, mesh, and responsive resize handler:

```javascript
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// 1. Scene & Camera
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 2, 5);

// 2. Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

// 3. Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// 4. Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
dirLight.position.set(5, 10, 5);
dirLight.castShadow = true;
scene.add(dirLight);

// 5. Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x6366f1, roughness: 0.3 });
const mesh = new THREE.Mesh(geometry, material);
mesh.castShadow = true;
scene.add(mesh);

// 6. Animation Loop
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();
  
  mesh.rotation.y += delta * 0.5;
  controls.update();
  
  renderer.render(scene, camera);
}

animate();

// 7. Responsive Resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
```

---

## Detailed Topic References

For deep code patterns, API details, and specialized features, refer to the individual reference guides:

| Category | Reference Guide | Description |
| --- | --- | --- |
| **Fundamentals** | [`references/fundamentals.md`](references/fundamentals.md) | Scene setup, cameras (Perspective/Orthographic), WebGLRenderer, Object3D transformation hierarchy, vector math. |
| **Geometry** | [`references/geometry.md`](references/geometry.md) | Standard primitives, BufferGeometry creation, custom vertex attributes, indexing, instanced rendering (`InstancedMesh`). |
| **Materials** | [`references/materials.md`](references/materials.md) | PBR materials (`MeshStandardMaterial`, `MeshPhysicalMaterial`), basic/phong/lambert materials, transparency, blending modes. |
| **Textures** | [`references/textures.md`](references/textures.md) | Map types (color, normal, roughness, metalness, displacement), UV coordinates, cube maps, environment maps (HDR/EXR). |
| **Lighting** | [`references/lighting.md`](references/lighting.md) | Ambient, Directional, Point, Spot, and Hemisphere lights, shadow map configuration and optimization, Image-Based Lighting (IBL). |
| **Animation** | [`references/animation.md`](references/animation.md) | Keyframe animation (`AnimationMixer`, `AnimationClip`), skeletal meshes, morph targets, procedural physics and delta updates. |
| **Interaction** | [`references/interaction.md`](references/interaction.md) | Raycasting (`Raycaster`), mouse/touch object selection, drag controls, `OrbitControls`, event handling in 3D canvas space. |
| **Loaders** | [`references/loaders.md`](references/loaders.md) | Loading 3D assets via `GLTFLoader`, `DRACOLoader`, `RGBELoader`, handling model hierarchy, textures, and `LoadingManager`. |
| **Shaders** | [`references/shaders.md`](references/shaders.md) | Custom GLSL shaders, `ShaderMaterial`, `RawShaderMaterial`, uniforms, attributes, vertex/fragment shaders, material extensions. |
| **Post-Processing**| [`references/postprocessing.md`](references/postprocessing.md) | `EffectComposer`, `RenderPass`, bloom (`UnrealBloomPass`), depth of field, SMAA/FXAA antialiasing, custom screen-space shaders. |

---

## Technical Guide & Decision Matrix

### Material Selection Strategy
- **Realistic PBR Objects**: Use `MeshStandardMaterial` for general PBR or `MeshPhysicalMaterial` for advanced surface effects (clearcoat, transmission/glass, iridescence, sheen).
- **Stylized / Low Performance**: Use `MeshPhongMaterial` or `MeshLambertMaterial` for non-PBR lighting without expensive roughness/metalness calculations.
- **Unlit / UI / Overlay**: Use `MeshBasicMaterial` for items unaffected by scene lighting.
- **Custom Shaders**: Use `ShaderMaterial` for custom vertex distortion or procedural pixel effects.

### Performance Optimization Checklist
1. **Instancing**: Use `InstancedMesh` when rendering hundreds or thousands of identical geometries with distinct transforms or colors.
2. **Dispose Resources**: Always call `.dispose()` on geometries, materials, and textures when removing objects from the scene to prevent WebGL memory leaks.
3. **Texture Sizing**: Use power-of-two texture dimensions (e.g. 512x512, 1024x1024, 2048x2048) and compressed texture formats (Basis / KTX2) for complex scenes.
4. **Shadow Maps**: Limit shadow casting lights (`castShadow = true`). Use `PCFSoftShadowMap` or static shadow baking for best visual-to-performance ratio.
5. **Pixel Ratio**: Clamp `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))` to avoid rendering ultra-high resolutions on high-DPI displays.
