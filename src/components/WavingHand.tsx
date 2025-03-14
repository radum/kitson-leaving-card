import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Cylinder, Box } from "@react-three/drei";

export const WavingHand: React.FC = () => {
	const position = [0, 0, 0];
	const handGroup = useRef();
	const fingerGroup = useRef();

	// Animation for waving
	useFrame(({ clock }) => {
		if (handGroup.current) {
			handGroup.current.rotation.z =
				Math.sin(clock.getElapsedTime() * 2) * 0.2;
		}
		if (fingerGroup.current) {
			fingerGroup.current.rotation.z =
				Math.sin(clock.getElapsedTime() * 3) * 0.1;
		}
	});

	return (
		<group position={position}>
			{/* Wrist/palm */}
			<mesh ref={handGroup} position={[0, 0, 0]}>
				<boxGeometry args={[1.2, 1.5, 0.5]} />
				<meshStandardMaterial color="#ffdbac" />

				{/* Thumb */}
				<group position={[-0.7, 0.2, 0]}>
					<mesh rotation={[0, 0, Math.PI / 4]}>
						<boxGeometry args={[0.3, 0.8, 0.4]} />
						<meshStandardMaterial color="#ffdbac" />
					</mesh>
				</group>

				{/* Fingers */}
				<group ref={fingerGroup} position={[0, 0.9, 0]}>
					{/* Index finger */}
					<mesh position={[-0.5, 0.4, 0]}>
						<boxGeometry args={[0.25, 0.8, 0.4]} />
						<meshStandardMaterial color="#ffdbac" />
					</mesh>

					{/* Middle finger */}
					<mesh position={[-0.15, 0.5, 0]}>
						<boxGeometry args={[0.25, 0.9, 0.4]} />
						<meshStandardMaterial color="#ffdbac" />
					</mesh>

					{/* Ring finger */}
					<mesh position={[0.2, 0.45, 0]}>
						<boxGeometry args={[0.25, 0.85, 0.4]} />
						<meshStandardMaterial color="#ffdbac" />
					</mesh>

					{/* Pinky finger */}
					<mesh position={[0.5, 0.3, 0]}>
						<boxGeometry args={[0.2, 0.7, 0.4]} />
						<meshStandardMaterial color="#ffdbac" />
					</mesh>
				</group>

				{/* Sleeve */}
				<mesh position={[0, -1, 0]}>
					<cylinderGeometry args={[0.8, 1, 1, 16]} />
					<meshStandardMaterial color="#4a6fa5" />
				</mesh>
			</mesh>

			{/* Sad face emoji floating next to hand */}
			<group position={[2, 0, 0]}>
				{/* Face */}
				<mesh>
					<sphereGeometry args={[1, 32, 32]} />
					<meshStandardMaterial color="#ffde34" />
				</mesh>

				{/* Left eye */}
				<mesh position={[-0.3, 0.3, 0.85]}>
					<sphereGeometry args={[0.15, 16, 16]} />
					<meshStandardMaterial color="#000000" />
				</mesh>

				{/* Right eye */}
				<mesh position={[0.3, 0.3, 0.85]}>
					<sphereGeometry args={[0.15, 16, 16]} />
					<meshStandardMaterial color="#000000" />
				</mesh>

				{/* Sad mouth */}
				<mesh position={[0, -0.3, 0.85]} rotation={[0, 0, Math.PI]}>
					<torusGeometry args={[0.4, 0.1, 16, 16, Math.PI]} />
					<meshStandardMaterial color="#000000" />
				</mesh>

				{/* Tear drop */}
				<mesh position={[-0.5, 0, 0.9]}>
					<sphereGeometry args={[0.1, 16, 16]} />
					<meshStandardMaterial
						color="#5bc0de"
						transparent
						opacity={0.8}
					/>
				</mesh>
			</group>
		</group>
	);
};
