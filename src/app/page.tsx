'use client';

import React, { useState } from 'react';
import { marked } from 'marked';

export default function HomePage() {
  const [markdown, setMarkdown] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '50%', padding: '20px', boxSizing: 'border-box' }}>
        <textarea
          value={markdown}
          onChange={handleInputChange}
          style={{ width: '100%', height: '100%', resize: 'none', border: 'none', outline: 'none', fontFamily: 'monospace', fontSize: '16px' }}
          placeholder='Enter your Markdown here...'
        />
      </div>
      <div 
        style={{ width: '50%', padding: '20px', boxSizing: 'border-box', borderLeft: '1px solid #ccc' }}
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
}
