import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface RSVPProps {
  qrCodeUrl?: string;
  qrTitle?: string;
  qrDescription?: string;
  onQrClick: () => void;
}

export const RSVP: React.FC<RSVPProps> = ({ qrCodeUrl, qrTitle, qrDescription, onQrClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'yes',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // IMPORTANT: Replace with your own Formspree endpoint URL
    const formspreeEndpoint = 'https://formspree.io/f/maqyppbv';

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('There was an error submitting your RSVP. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your RSVP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const QRSection = () => (
    qrCodeUrl && (
      <div className="mt-8 md:mt-12 pt-8 md:pt-10 border-t border-red-50 flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-6 md:gap-8">
        <div className="shrink-0">
          <button
            type="button"
            onClick={onQrClick}
            className="cursor-pointer transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-lg"
            aria-label="Enlarge QR code"
          >
            <img 
              src={qrCodeUrl} 
              alt="Gift information QR Code" 
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover border-2 p-1 border-red-50 bg-white"
            />
          </button>
        </div>
        <div>
          {qrTitle && <h4 className="font-serif text-lg sm:text-xl md:text-2xl text-gray-800 mb-2">{qrTitle}</h4>}
          {qrDescription && <p className="text-[11px] sm:text-xs md:text-sm text-gray-500 leading-snug sm:leading-relaxed max-w-sm">{qrDescription}</p>}
        </div>
      </div>
    )
  );
  
  return (
    <section id="rsvp" className="py-20 md:py-32 bg-white px-4 relative overflow-hidden border-t border-red-50">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-white rounded-none p-6 md:p-20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] border border-red-50 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-center mb-8 md:mb-16">
                  <h2 className="font-serif text-3xl md:text-5xl text-gray-900 mb-4 md:mb-6">Vince & Casian</h2>
                  <p className="text-red-400 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[8px] md:text-[10px] font-bold">Please RSVP before the 1st week of May</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="space-y-1 md:space-y-2">
                      <label className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">Guest Name</label>
                      <input 
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Full Name"
                        className="w-full px-6 py-4 md:py-5 bg-gray-50 border border-red-50 rounded-none focus:border-red-600 focus:ring-0 focus:bg-white transition-all outline-none text-gray-800 text-sm md:text-base"
                      />
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <label className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">RSVP Status</label>
                      <select 
                        required
                        name="attendance"
                        value={formData.attendance}
                        onChange={(e) => setFormData({...formData, attendance: e.target.value})}
                        className="w-full px-6 py-4 md:py-5 bg-gray-50 border border-red-50 rounded-none focus:border-red-600 focus:bg-white transition-all outline-none appearance-none cursor-pointer text-sm md:text-base"
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
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Message for Vince & Casian..."
                      className="w-full px-6 py-4 md:py-5 bg-gray-50 border border-red-50 rounded-none focus:border-red-600 focus:bg-white transition-all outline-none resize-none text-sm md:text-base"
                    ></textarea>
                  </div>

                  <QRSection />

                  <motion.button
                    disabled={isLoading}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-8 py-5 bg-red-700 text-white rounded-none text-xs font-bold uppercase tracking-widest hover:bg-red-800 transition-all shadow-lg hover:shadow-xl disabled:bg-red-400 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      'Send RSVP'
                    )}
                  </motion.button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center py-16 md:py-24"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                >
                  <CheckCircle className="w-16 h-16 md:w-20 md:h-20 text-red-700 mx-auto" />
                </motion.div>
                <h3 className="font-serif text-2xl md:text-4xl text-gray-900 mt-8 mb-4">Thank You!</h3>
                <p className="text-gray-500 text-sm md:text-base max-w-sm mx-auto">Your response has been received. We can't wait to celebrate with you!</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
