'use client';

import { useState, useEffect, useRef } from 'react';
import { useAgent } from '@/app/hooks/useAgent';
import ReactMarkdown from 'react-markdown';

export default function ChatPage() {
  const [input, setInput] = useState('');
  const { messages, sendMessage, isThinking } = useAgent();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const onSendMessage = async () => {
    if (!input.trim() || isThinking) return;
    const message = input;
    setInput('');
    await sendMessage(message);
  };

  const suggestedPrompts = [
    'What can you help me with?',
    'Explain blockchain technology',
    'How do I get started?',
    'Tell me about CDP',
  ];

  return (
    <div className="w-full py-8">
      <div className="w-full max-w-5xl mx-auto flex flex-col h-[calc(100vh-300px)]">
        {/* Hero Section - Only shown when no messages */}
        {messages.length === 0 && (
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{fontFamily: 'var(--font-display)'}}>
              <span className="text-gradient">Welcome to AgentKit</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Your intelligent blockchain assistant powered by advanced AI
            </p>

            {/* Suggested Prompts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8">
              {suggestedPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => setInput(prompt)}
                  className="glass-dark p-3 rounded-xl text-sm text-gray-300 hover:bg-white/10 transition-all hover:scale-105 border border-white/10"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chat Container */}
        <div className="glass-dark rounded-2xl shadow-2xl flex flex-col flex-grow overflow-hidden border border-white/10">
          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <p className="text-gray-400">Start a conversation with your AI assistant</p>
                </div>
              </div>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 animate-slide-in ${
                    msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600'
                        : 'bg-gradient-to-r from-purple-600 to-pink-600'
                    }`}
                  >
                    {msg.sender === 'user' ? (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                  </div>

                  {/* Message Bubble */}
                  <div className="flex-1 max-w-[80%]">
                    <div
                      className={`rounded-2xl p-4 ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                          : 'glass border border-white/10 text-gray-200'
                      }`}
                    >
                      <ReactMarkdown
                        components={{
                          a: props => (
                            <a
                              {...props}
                              className={`underline hover:opacity-80 transition-opacity ${
                                msg.sender === 'user' ? 'text-blue-100' : 'text-blue-400'
                              }`}
                              target="_blank"
                              rel="noopener noreferrer"
                            />
                          ),
                          p: props => <p {...props} className="mb-2 last:mb-0" />,
                          ul: props => <ul {...props} className="list-disc list-inside mb-2 space-y-1" />,
                          ol: props => <ol {...props} className="list-decimal list-inside mb-2 space-y-1" />,
                          code: props => (
                            <code {...props} className="bg-black/20 px-1.5 py-0.5 rounded text-sm" />
                          ),
                        }}
                      >
                        {msg.text}
                      </ReactMarkdown>
                    </div>
                    <div className={`text-xs text-gray-500 mt-1 px-2 ${
                      msg.sender === 'user' ? 'text-right' : ''
                    }`}>
                      {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Thinking Indicator */}
            {isThinking && (
              <div className="flex items-start space-x-3 animate-slide-in">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="glass border border-white/10 rounded-2xl p-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                    </div>
                    <span className="text-sm text-gray-400">AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-white/10 p-4 bg-black/20">
            <div className="flex items-end space-x-3">
              <div className="flex-grow">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full glass border border-white/10 rounded-xl px-4 py-3 pr-12 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Type your message..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && !e.shiftKey && onSendMessage()}
                    disabled={isThinking}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs">
                    ⏎
                  </div>
                </div>
              </div>
              <button
                onClick={onSendMessage}
                className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center space-x-2 ${
                  isThinking || !input.trim()
                    ? 'bg-gray-700 cursor-not-allowed text-gray-500'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl hover:scale-105'
                }`}
                disabled={isThinking || !input.trim()}
              >
                <span>Send</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-2 text-center">
              AgentKit is powered by AI and may make mistakes. Verify important information.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
