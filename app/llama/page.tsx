'use client';

import { useState } from 'react';

export default function LlamaPage() {
  const [inputText, setInputText] = useState<string>('');
  const [responseText, setResponseText] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/llama', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: inputText }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch response');
      }

      const data = await response.json();
      setResponseText(data.responseText);
      setError(null);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter your prompt"
        />
        <button type="submit">Send to Llama</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {responseText && (
        <div>
          <h3>Response from Llama:</h3>
          <p className='text-black'>{responseText}</p>
        </div>
      )}
    </div>
  );
}

