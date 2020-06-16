<template>
  <div>
    <SystemInitControll :modelok="ok" :modelfail="fail" @start="animate" />
    <div class="canvas" ref="canvas"></div>
  </div>
</template>
<script>
import { PrimaryIonDrive } from "@/assets/cdns";
import * as THREE from "three";
import { OrbitControls } from "@/util/OrbitControls.js";
import { GLTFLoader } from "@/util/GLTFLoader.js";
import { EffectComposer } from "@/util/EffectComposer.js";
import { RenderPass } from "@/util/RenderPass.js";
import { UnrealBloomPass } from "@/util/UnrealBloomPass.js";
import SystemInitControll from "./bg_help/SystemInitControll.vue";

let clock;
let composer;
let renderer;
let scene;
let camera;
let pointLight;
let controls;
let mixer;

export default {
  name: "AboutPage",
  data() {
    return {
      ok: false,
      fail: false
    };
  },
  components: {
    SystemInitControll
  },
  async mounted() {
    await this.$nextTick();
    window.addEventListener("resize", this.resize);

    clock = new THREE.Clock();

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ReinhardToneMapping;
    //@ts-ignore
    this.$refs.canvas.appendChild(renderer.domElement);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      1,
      100
    );
    camera.position.set(-5, 2.5, -3.5);
    scene.add(camera);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.maxPolarAngle = Math.PI * 0.5;
    controls.minDistance = 1;
    controls.maxDistance = 10;

    scene.add(new THREE.AmbientLight(0x404040));

    pointLight = new THREE.PointLight(0xffffff, 1);
    camera.add(pointLight);

    let renderScene = new RenderPass(scene, camera);

    let bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
    bloomPass.threshold = 0;
    bloomPass.strength = 3;
    bloomPass.radius = 1;
    renderer.toneMappingExposure = Math.pow(1, 4.0);

    composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    //@ts-ignore
    new GLTFLoader().load(
      PrimaryIonDrive,
      gltf => {
        let model = gltf.scene;
        //@ts-ignore
        scene.add(model);
        mixer = new THREE.AnimationMixer(model);
        var clip = gltf.animations[0];
        mixer.clipAction(clip.optimize()).play();
        this.ok = true;
      },
      progress => {},
      error => {
        this.fail = true;
      }
    );
  },

  methods: {
    resize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
    },

    animate() {
      requestAnimationFrame(this.animate);
      const delta = clock.getDelta();
      mixer.update(delta);
      composer.render();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>