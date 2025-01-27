import { useState, FormEvent, useEffect } from 'react';
import emailjs from '@emailjs/browser';

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        
        if (success) {
            timeoutId = setTimeout(() => {
                setSuccess(false);
            }, 3000); // Message disappears after 3 seconds
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [success]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: 'Andres',
                    reply_to: formData.email
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setSuccess(true);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error(error);
            setError('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-gray-200">
                        Get In Touch
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Have a question or want to work together?
                    </p>
                </div>

                <form 
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-white/50 dark:bg-gray-800/50 
                             backdrop-blur-sm p-8 rounded-xl border 
                             border-gray-200/20 dark:border-gray-700/20 
                             shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 
                                         dark:border-gray-600 bg-white/50 dark:bg-gray-900/50 
                                         focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                         dark:text-gray-200 transition-all duration-300"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 
                                         dark:border-gray-600 bg-white/50 dark:bg-gray-900/50 
                                         focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                         dark:text-gray-200 transition-all duration-300"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Message
                        </label>
                        <textarea
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            required
                            rows={5}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 
                                     dark:border-gray-600 bg-white/50 dark:bg-gray-900/50 
                                     focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                     dark:text-gray-200 transition-all duration-300 resize-none"
                            placeholder="Your message here..."
                        />
                    </div>

                    {error && (
                        <div className="text-red-500 text-sm bg-red-50 dark:bg-red-900/10 
                                      p-3 rounded-lg">{error}</div>
                    )}

                    {success && (
                        <div className="text-green-500 text-sm bg-green-50 dark:bg-green-900/10 
                                      p-3 rounded-lg">Message sent successfully!</div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg
                                 hover:bg-blue-700 focus:outline-none focus:ring-2 
                                 focus:ring-blue-500 focus:ring-offset-2 transition-all
                                 duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                                </svg>
                                Sending...
                            </span>
                        ) : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
}