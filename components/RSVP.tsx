import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export const RSVP: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'yes',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="rsvp" className="py-20 md:py-32 bg-white px-4 relative overflow-hidden border-t border-red-50">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-white rounded-[2.5rem] md:rounded-[4rem] p-6 md:p-20 shadow-[0_30px_60px_-15px_rgba(153,27,27,0.1)] border border-red-50 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-center mb-8 md:mb-16">
                  <h2 className="font-serif text-3xl md:text-5xl text-black mb-4 md:mb-6">Vince & Casian</h2>
                  <p className="text-red-400 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[8px] md:text-[10px] font-bold">Please RSVP by July 11, 2026</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="space-y-1 md:space-y-2">
                      <label className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">Guest Name</label>
                      <input 
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Full Name"
                        className="w-full px-6 py-4 md:py-5 bg-gray-50 border border-red-50 rounded-2xl md:rounded-3xl focus:border-red-600 focus:ring-0 focus:bg-white transition-all outline-none text-gray-800 text-sm md:text-base"
                      />
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <label className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">RSVP Status</label>
                      <select 
                        value={formData.attendance}
                        onChange={(e) => setFormData({...formData, attendance: e.target.value})}
                        className="w-full px-6 py-4 md:py-5 bg-gray-50 border border-red-50 rounded-2xl md:rounded-3xl focus:border-red-600 focus:bg-white transition-all outline-none appearance-none cursor-pointer text-sm md:text-base"
                      >
                        <option value="yes">Attending with Joy</option>
                        <option value="no">Declining with Regret</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1 md:space-y-2">
                    <label className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">Special Wishes</label>
                    <textarea 
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Message for Vince & Casian..."
                      className="w-full px-6 py-4 md:py-5 bg-gray-50 border border-red-50 rounded-2xl md:rounded-3xl focus:border-red-600 focus:bg-white transition-all outline-none resize-none text-sm md:text-base"
                    ></textarea>
                  </div>

                  <motion.button
                    disabled={isLoading}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full py-4 md:py-6 bg-red-700 text-white rounded-2xl md:rounded-3xl font-bold tracking-[0.2em] text-[10px] md:text-[11px] uppercase shadow-lg shadow-red-200 flex items-center justify-center gap-3 md:gap-4 transition-all hover:bg-red-800 disabled:opacity-70 mt-4"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Send My Response <Send size={14} />
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 md:py-16"
              >
                <div className="w-16 h-16 md:w-24 md:h-24 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 md:mb-10 shadow-xl shadow-red-200">
                  <CheckCircle size={32} />
                </div>
                <h3 className="font-serif text-3xl md:text-5xl text-black mb-4 md:mb-6">See You Soon!</h3>
                <p className="text-gray-500 italic text-base md:text-xl mb-8 md:mb-12">"Your presence is the greatest gift of all."</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-2 md:px-10 md:py-3 border border-red-600 text-red-600 rounded-full font-bold text-[9px] md:text-[10px] uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all"
                >
                  Update Response
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
