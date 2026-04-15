"use client";

import { Float, Line, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group, Mesh } from "three";
import { Color, MeshStandardMaterial, Vector3 } from "three";

type Point3 = [number, number, number];

type NodePoint = {
  id: string;
  index: number;
  layer: number;
  position: Point3;
};

type Connection = {
  from: NodePoint;
  to: NodePoint;
  seed: number;
};

const layerCounts = [5, 8, 7, 8, 4];
const layerX = [-9, -4.5, 0, 4.5, 9];

function buildNodes(): NodePoint[] {
  return layerCounts.flatMap((count, layer) => {
    const spread = 8.2;

    return Array.from({ length: count }, (_, index) => {
      const ratio = count === 1 ? 0.5 : index / (count - 1);
      const y = spread * 0.5 - ratio * spread;
      const z = (layer % 2 === 0 ? -1 : 1) * (0.3 + index * 0.16);

      return {
        id: `layer-${layer}-node-${index}`,
        index,
        layer,
        position: [layerX[layer], y, z],
      };
    });
  });
}

function buildConnections(nodes: NodePoint[]): Connection[] {
  const byLayer = Array.from({ length: layerCounts.length }, (_, layer) =>
    nodes.filter((node) => node.layer === layer),
  );

  return byLayer.flatMap((layerNodes, layer) => {
    const nextLayer = byLayer[layer + 1];

    if (!nextLayer) {
      return [];
    }

    return layerNodes.flatMap((node, nodeIndex) => {
      const start = Math.max(0, Math.min(nextLayer.length - 3, nodeIndex - 1));
      const end = Math.min(nextLayer.length, start + 4);

      return nextLayer.slice(start, end).map((target, targetIndex) => ({
        from: node,
        to: target,
        seed: layer + nodeIndex * 0.37 + targetIndex * 0.18,
      }));
    });
  });
}

function NeuralNode({
  position,
  tint,
  seed,
}: {
  position: Point3;
  tint: string;
  seed: number;
}) {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) {
      return;
    }

    const pulse = 1 + Math.sin(clock.elapsedTime * 1.8 + seed) * 0.12;
    meshRef.current.scale.setScalar(pulse);

    const material = meshRef.current.material as MeshStandardMaterial;
    material.emissiveIntensity = 1.25 + Math.sin(clock.elapsedTime * 2.1 + seed) * 0.55;
  });

  return (
    <mesh
      position={position}
      ref={meshRef}
    >
      <sphereGeometry args={[0.22, 24, 24]} />
      <meshStandardMaterial
        color={tint}
        emissive={new Color(tint)}
        emissiveIntensity={1.4}
        roughness={0.18}
        metalness={0.08}
      />
    </mesh>
  );
}

function NeuralConnection({ connection }: { connection: Connection }) {
  const lineRef = useRef<any>(null);

  useFrame(({ clock }) => {
    if (!lineRef.current?.material) {
      return;
    }

    const modulation = 0.22 + Math.sin(clock.elapsedTime * 1.4 + connection.seed) * 0.14;
    lineRef.current.material.opacity = 0.12 + modulation;
    lineRef.current.material.color.setHSL(0.53 + modulation * 0.05, 0.92, 0.65);
  });

  return (
    <Line
      ref={lineRef}
      transparent
      color="#6ae7ff"
      lineWidth={1.5}
      opacity={0.18}
      points={[connection.from.position, connection.to.position]}
    />
  );
}

function SignalPulse({
  from,
  to,
  offset,
}: {
  from: Point3;
  to: Point3;
  offset: number;
}) {
  const meshRef = useRef<Mesh>(null);
  const start = useMemo(() => new Vector3(...from), [from]);
  const end = useMemo(() => new Vector3(...to), [to]);

  useFrame(({ clock }) => {
    if (!meshRef.current) {
      return;
    }

    const t = (clock.elapsedTime * 0.28 + offset) % 1;
    meshRef.current.position.lerpVectors(start, end, t);
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.12, 16, 16]} />
      <meshBasicMaterial color="#7dffcc" />
    </mesh>
  );
}

function CameraRig() {
  useFrame(({ camera, clock }) => {
    camera.position.x = Math.sin(clock.elapsedTime * 0.14) * 0.3;
    camera.position.y = Math.cos(clock.elapsedTime * 0.16) * 0.22;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function NeuralCluster() {
  const clusterRef = useRef<Group>(null);
  const nodes = useMemo(() => buildNodes(), []);
  const connections = useMemo(() => buildConnections(nodes), [nodes]);
  const pulseConnections = useMemo(
    () => connections.filter((_, index) => index % 4 === 0).slice(0, 18),
    [connections],
  );

  useFrame(({ clock }) => {
    if (!clusterRef.current) {
      return;
    }

    clusterRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.15) * 0.22;
    clusterRef.current.rotation.x = Math.cos(clock.elapsedTime * 0.12) * 0.08;
    clusterRef.current.position.y = -0.15 + Math.sin(clock.elapsedTime * 0.18) * 0.06;
  });

  return (
    <Float
      floatIntensity={0.18}
      rotationIntensity={0.08}
      speed={0.42}
    >
      <group
        ref={clusterRef}
        scale={[1.15, 1.2, 1.05]}
      >
        {connections.map((connection) => (
          <NeuralConnection
            key={`${connection.from.id}-${connection.to.id}`}
            connection={connection}
          />
        ))}
        {nodes.map((node) => (
          <NeuralNode
            key={node.id}
            position={node.position}
            tint={node.layer % 2 === 0 ? "#6ae7ff" : "#7dffcc"}
            seed={node.index + node.layer * 0.4}
          />
        ))}
        {pulseConnections.map((connection, index) => (
          <SignalPulse
            key={`pulse-${connection.from.id}-${connection.to.id}`}
            from={connection.from.position}
            to={connection.to.position}
            offset={index * 0.13}
          />
        ))}
      </group>
    </Float>
  );
}

export default function NeuralNetworkScene() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(55,216,255,0.16),rgba(6,16,29,0.14)_34%,rgba(6,16,29,0.96)_72%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(55,216,255,0.08),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(28,255,162,0.06),transparent_24%)]" />
      <Canvas
        camera={{ position: [0, 0, 14], fov: 46 }}
        dpr={[1, 1.75]}
      >
        <color
          attach="background"
          args={["#06101d"]}
        />
        <ambientLight intensity={0.55} />
        <pointLight
          color="#6ae7ff"
          intensity={13}
          position={[-4, 4, 5]}
        />
        <pointLight
          color="#7dffcc"
          intensity={11}
          position={[4, -3, 4]}
        />
        <Sparkles
          color="#6ae7ff"
          count={80}
          opacity={0.55}
          scale={[26, 16, 10]}
          size={2.4}
          speed={0.18}
        />
        <CameraRig />
        <NeuralCluster />
      </Canvas>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,9,18,0.24),transparent_18%,transparent_78%,rgba(3,9,18,0.4))]" />

      <div className="pointer-events-none absolute inset-x-0 top-24 flex items-start justify-between gap-6 px-6 sm:top-28 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-accent/80">
            Phase 02
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
            Hidden representation forms in motion.
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            The neural phase now takes the full viewport so the graph reads like
            a real scene transition instead of a panel dropped into the middle
            of the intro.
          </p>
        </div>
        <div className="hidden rounded-full border border-white/10 bg-black/20 px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground sm:block">
          neural.hidden_state
        </div>
      </div>
    </div>
  );
}
