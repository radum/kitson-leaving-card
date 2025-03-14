export interface Message {
	id: number;
	author: string;
	content: string;
}

export interface PageProps {
	messages: Message[];
	pageNumber: number;
	totalPages: number;
}
