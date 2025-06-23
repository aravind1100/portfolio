import { useState } from 'react';

const Contact = () => {
  const [subject, setSubject] = useState('Message from Portfolio');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Encode subject and message for URL
    const encodedSubject = encodeURIComponent(subject);
    const encodedMessage = encodeURIComponent(message);
    
    // Create mailto link with prefilled subject and body
    const mailtoLink = `mailto:aravindavd1999@gmail.com?subject=${encodedSubject}&body=${encodedMessage}`;
    
    // Open user's email client
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-6xl mx-auto">
           <h2 className="logoText text-3xl font-bold text-blue-500 pt-5 mb-10 border-b-2 border-blue-300 inline-block">
        Contact Me
         </h2>
          <div className="px-2 max-w-3xl mx-auto">
      <p className="text-gray-700 mb-8">
        Send me a message directly from here. The subject is pre-filled but you can customize it.
      </p>
      
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="subject" className="block text-green-700 font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-green-700 font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              className=" bg-blue-300  px-4 py-2 rounded-full font-semibold shadow-md text-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-300 group transform hover:-translate-y-1"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      
      <div className="mt-10 text-center">
        <p className="text-gray-700">
          This will open your default email app with your message prefilled.
        </p>
      </div>
    </div>
    </section>
    
  );
};

export default Contact;