import { Dialog } from '@headlessui/react';
import { useState } from 'react';

interface AIDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onGenerate: (text: string) => void;
}

export const AIDialog: React.FC<AIDialogProps> = ({ isOpen, onClose, onGenerate }) => {
  const [text, setText] = useState('');

  const handleGenerate = () => {
    onGenerate(text);
    setText('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-6">
          <Dialog.Title className="text-lg font-medium mb-4">Generate with AI</Dialog.Title>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-32 p-2 border rounded-lg mb-4 resize-none"
            placeholder="Enter your prompt here..."
          />

          <div className="flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              onClick={handleGenerate}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Gen this
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
