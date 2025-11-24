import React, { useState, useRef, useEffect } from 'react';
import { askRheologist } from '../services/geminiService';
import { Send, Bot, User, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
}

export const AiRheologist: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'ai', text: 'Hello! I am Dr. Rheo. Ask me anything about the physics of glue stringing, nozzle mechanics, or polymer behavior.' }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const answer = await askRheologist(input);
    
    setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), sender: 'ai', text: answer }]);
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-200 max-w-2xl mx-auto h-[600px] flex flex-col">
      {/* Header */}
      <div className="bg-stone-900 p-4 flex items-center">
        <div className="w-10 h-10 bg-glue-500 rounded-full flex items-center justify-center mr-3">
          <Bot className="text-white w-6 h-6" />
        </div>
        <div>
            <h3 className="text-white font-bold">Dr. Rheo</h3>
            <p className="text-glue-200 text-xs">AI Research Assistant (Gemini 2.5 Flash)</p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-grow p-4 overflow-y-auto bg-stone-50" ref={scrollRef}>
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[80%] p-4 rounded-2xl ${
                  msg.sender === 'user' 
                    ? 'bg-glue-600 text-white rounded-br-none' 
                    : 'bg-white border border-stone-200 text-stone-800 rounded-bl-none shadow-sm'
                }`}
              >
                <div className="flex items-start gap-2">
                    {msg.sender === 'ai' && <Bot className="w-4 h-4 mt-1 flex-shrink-0 opacity-50" />}
                    {msg.sender === 'user' && <User className="w-4 h-4 mt-1 flex-shrink-0 opacity-50" />}
                    <div className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</div>
                </div>
              </div>
            </div>
          ))}
          {loading && (
             <div className="flex justify-start">
               <div className="bg-white border border-stone-200 p-4 rounded-2xl rounded-bl-none shadow-sm flex items-center space-x-2">
                 <Loader2 className="w-4 h-4 animate-spin text-glue-600" />
                 <span className="text-sm text-stone-500">Analyzing viscosity data...</span>
               </div>
             </div>
          )}
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-stone-200">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about 'shear thinning' or 'temperature'..."
            className="flex-grow px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-glue-500 focus:border-transparent transition-all"
            disabled={loading}
          />
          <button 
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="p-3 bg-glue-600 text-white rounded-xl hover:bg-glue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};