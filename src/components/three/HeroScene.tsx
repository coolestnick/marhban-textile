import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * A single sheet of silk, gently rippling — like fabric catching a slow breeze.
 * Minimal and matte rather than glossy/abstract, so it reads as textile and
 * sits quietly behind the headline.
 */
function SilkSheet({
  color,
  opacity,
  z,
  amplitude,
  speed,
  rotation,
}: {
  color: string;
  opacity: number;
  z: number;
  amplitude: number;
  speed: number;
  rotation: [number, number, number];
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(
    () => new THREE.PlaneGeometry(18, 10, 64, 36),
    []
  );
  // Snapshot of the flat positions to displace from each frame.
  const base = useMemo(
    () => Float32Array.from(geometry.attributes.position.array),
    [geometry]
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    const pos = geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = base[i * 3];
      const y = base[i * 3 + 1];
      // Layered sine waves → soft, cloth-like folds
      const wave =
        Math.sin(x * 0.5 + t) * amplitude +
        Math.cos(y * 0.6 + t * 0.8) * amplitude * 0.6 +
        Math.sin((x + y) * 0.3 + t * 0.5) * amplitude * 0.4;
      pos.setZ(i, wave);
    }
    pos.needsUpdate = true;
    geometry.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, 0, z]} rotation={rotation}>
      <meshStandardMaterial
        color={color}
        roughness={0.85}
        metalness={0.1}
        transparent
        opacity={opacity}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function Scene() {
  // Site is locked to light mode.
  const dark = false;

  const gold = "#f0b429";
  const royal = dark ? "#1f47a3" : "#4a78db";

  return (
    <>
      <ambientLight intensity={dark ? 0.55 : 0.9} />
      <directionalLight position={[4, 6, 8]} intensity={1.1} color="#ffffff" />
      <directionalLight position={[-6, -3, 2]} intensity={0.5} color={gold} />

      {/* Back layer — royal, slower and broader */}
      <SilkSheet
        color={royal}
        opacity={dark ? 0.5 : 0.35}
        z={-3}
        amplitude={0.7}
        speed={0.25}
        rotation={[-0.5, 0.35, 0.25]}
      />
      {/* Front layer — gold silk */}
      <SilkSheet
        color={gold}
        opacity={dark ? 0.45 : 0.4}
        z={-1}
        amplitude={0.55}
        speed={0.35}
        rotation={[-0.35, -0.25, -0.18]}
      />
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
