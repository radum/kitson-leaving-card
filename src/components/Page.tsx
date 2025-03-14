import React from "react";
import { PageProps } from "../types";
import clsx from 'clsx';

export const Page: React.FC<PageProps> = ({
	messages,
	pageNumber,
	totalPages,
}) => {
	return (
		<div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg overflow-auto mb-16">
			<div className="h-full flex flex-col">
				<div className="text-center mb-6">
					<h2 className="text-2xl font-bold text-gray-800">
						Page {pageNumber} of {totalPages}
					</h2>
				</div>

				<div className="flex-1 grid gap-6">
					{messages.map((message, index) => (
						<div
							key={message.id}
							className={clsx('bg-gray-50 p-6 rounded-lg', {'mb-8': index === messages.length - 1})}
						>
							<p className="text-gray-700 italic mb-4">
								"{message.content}"
							</p>
							<div className="flex justify-between items-center">
								<strong className="text-indigo-600">
									{message.author}
								</strong>
								{/* <span className="text-gray-500 text-sm">{message.role}</span> */}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
