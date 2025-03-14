import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Waves as Wave } from "lucide-react";
import { messages } from "./data/messages.ts";
import { Page } from './components/Page.tsx';
import { WavingHand } from "./components/WavingHand";

const MESSAGES_PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(messages.length / MESSAGES_PER_PAGE);

function App() {
	const [currentPage, setCurrentPage] = useState(0);

	const getCurrentPageMessages = () => {
		const start = currentPage * MESSAGES_PER_PAGE;
		return messages.slice(start, start + MESSAGES_PER_PAGE);
	};

	const handleNextPage = () => {
		setCurrentPage((prev) => (prev + 1) % TOTAL_PAGES);
	};

	const handlePrevPage = () => {
		setCurrentPage((prev) => (prev - 1 + TOTAL_PAGES) % TOTAL_PAGES);
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-indigo-100 to-purple-100">
			<div className="container mx-auto px-4 py-8">
				<div className="text-center mb-8">
					<div className="flex items-center justify-center gap-3 mb-4">
						<Wave className="w-8 h-8 text-indigo-600 animate-bounce" />
						<h1 className="text-4xl font-bold text-indigo-600">
							Farewell, Kitson!
						</h1>
						<Wave className="w-8 h-8 text-indigo-600 animate-bounce" />
					</div>
					<p className="text-gray-600 text-lg">You will be missed!</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-8">
					{/* 3D Canvas */}
					<div className="h-[600px] bg-gray-300 rounded-xl overflow-hidden shadow-xl">
						<Canvas>
							<PerspectiveCamera
								makeDefault
								position={[0, 0, 10]}
							/>
							<ambientLight intensity={1.5} />
							<spotLight
								position={[10, 10, 10]}
								angle={0.15}
								penumbra={1}
							/>
							<pointLight position={[10, 10, 10]} />
							<Suspense fallback={null}>
								<WavingHand />
							</Suspense>
							<OrbitControls enableZoom={false} />
						</Canvas>
					</div>

					{/* Messages Section */}
					<div className="relative h-[600px] bg-white rounded-xl shadow-xl overflow-hidden">
						<Page
							messages={getCurrentPageMessages()}
							pageNumber={currentPage + 1}
							totalPages={TOTAL_PAGES}
						/>

						<div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between bg-gradient-to-t from-white">
							<button
								onClick={handlePrevPage}
								className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
							>
								Previous
							</button>
							<button
								onClick={handleNextPage}
								className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
							>
								Next
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
