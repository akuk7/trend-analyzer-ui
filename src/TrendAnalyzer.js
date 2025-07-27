import React, { useState, useRef } from 'react';
import { marked } from 'marked';

const TOPICS = [
  { name: 'AI & Machine Learning', emoji: '🤖' },
  { name: 'Business', emoji: '💼' },
  { name: 'Cinema', emoji: '🎬' },
  { name: 'Music', emoji: '🎵' },
  { name: 'Gaming', emoji: '🎮' },
  { name: 'Sports', emoji: '⚽' },
  { name: 'Technology & Gadgets', emoji: '💻' },
  { name: 'Politics & World Events', emoji: '🌍' },
  { name: 'Health & Wellness', emoji: '🌿' },
  { name: 'Space Exploration', emoji: '🚀' },
];

const LOADING_STAGES = [
  'Searching the web and sources…',
  'Summarizing results…',
  'Analyzing trends…',
  'Finalizing report…',
];

export default function TrendAnalyzer() {
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState(0);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [pendingTopic, setPendingTopic] = useState(null);
  const intervalRef = useRef(null);

  const startLoadingStages = () => {
    setStage(0);
    intervalRef.current = setInterval(() => {
      setStage((prev) => (prev + 1) % LOADING_STAGES.length);
    }, 2000);
  };

  const stopLoadingStages = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setStage(0);
  };

  const handleTopicSelect = (topic) => {
    setPendingTopic(topic);
    setShowConfirm(true);
  };

  const handleConfirm = async () => {
    setShowConfirm(false);
    setSelectedTopic(pendingTopic);
    setLoading(true);
    setResult('');
    setError('');
    startLoadingStages();
    try {
      const response = await fetch('https://trend-analyzer-agent-production.up.railway.app/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: pendingTopic }),
      });
      if (!response.ok) throw new Error('API error');
      const data = await response.json();
      setResult(data.result);
    } catch (err) {
      setError('Failed to fetch analysis. Please try again.');
    } finally {
      setLoading(false);
      stopLoadingStages();
    }
  };

  const handleCancel = () => {
    setShowConfirm(false);
    setPendingTopic(null);
  };

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', padding: 32, background: '#fff', borderRadius: 12, boxShadow: '0 2px 16px #e0e7ef' }}>
      <h1 style={{ textAlign: 'center', fontSize: 36, marginBottom: 8, letterSpacing: 1 }}>Get the Latest News on These Hot Topics!</h1>
      <div style={{ textAlign: 'center', color: '#666', fontSize: 18, marginBottom: 32 }}>
        Choose a topic to see the freshest trends, news, and analysis from top sources.
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: 16,
        marginBottom: 32,
      }}>
        {TOPICS.map((t) => (
          <button
            key={t.name}
            onClick={() => handleTopicSelect(t.name)}
            disabled={loading}
            style={{
              padding: '20px 8px',
              borderRadius: 8,
              border: selectedTopic === t.name ? '2px solid #007bff' : '1px solid #e0e7ef',
              background: selectedTopic === t.name ? '#f0f7ff' : '#f9fafd',
              color: '#222',
              fontSize: 18,
              fontWeight: 500,
              boxShadow: selectedTopic === t.name ? '0 2px 8px #d0e7ff' : '0 1px 4px #f0f4fa',
              cursor: loading ? 'not-allowed' : 'pointer',
              outline: 'none',
              transition: 'all 0.2s',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 32 }}>{t.emoji}</span>
            <span style={{ marginTop: 4, fontSize: 14 }}>{t.name}</span>
          </button>
        ))}
      </div>
      {loading && (
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div className="spinner" style={{ margin: '0 auto 16px', width: 48, height: 48, border: '5px solid #eee', borderTop: '5px solid #007bff', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
          <div style={{ fontSize: 20, color: '#555' }}>{LOADING_STAGES[stage]}</div>
        </div>
      )}
      {error && <div style={{ color: 'red', marginBottom: 16, textAlign: 'center' }}>{error}</div>}
      {result && (
        <div style={{ marginTop: 32 }}>
          <h2 style={{ textAlign: 'center', fontSize: 26, marginBottom: 18 }}>{selectedTopic} Insights</h2>
          <div
            style={{ background: '#f9f9f9', padding: 20, borderRadius: 8, fontSize: 17 }}
            dangerouslySetInnerHTML={{ __html: marked.parse(result) }}
          />
        </div>
      )}
      {showConfirm && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}>
          <div style={{
            background: '#fff',
            padding: 24,
            borderRadius: 12,
            maxWidth: 400,
            margin: 20,
            textAlign: 'center',
          }}>
            <h3 style={{ marginBottom: 16, fontSize: 20 }}>Confirm Analysis</h3>
            <p style={{ marginBottom: 24, color: '#666' }}>
              Are you sure you want to analyze trends for <strong>{pendingTopic}</strong>?
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button
                onClick={handleCancel}
                style={{
                  padding: '10px 20px',
                  borderRadius: 6,
                  border: '1px solid #ddd',
                  background: '#f5f5f5',
                  cursor: 'pointer',
                  fontSize: 16,
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                style={{
                  padding: '10px 20px',
                  borderRadius: 6,
                  border: 'none',
                  background: '#007bff',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: 16,
                }}
              >
                Analyze
              </button>
            </div>
          </div>
        </div>
      )}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        button:focus {
          outline: 2px solid #007bff;
        }
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
} 