
function Contact() {
  return (
    <div className="animate-fadeSlideDownSimple">
    <div className="bg-white/80 flex flex-col items-center justify-start min-h-screen pt-30 px-4">
      <h1 className="text-4xl font-mono font-extrabold text-gray-900 mb-8">
        CONTACT
      </h1>
      <div className = "w-full max-w-lg">
      <p className="text-lg text-gray-700 mb-8 text-justify pt-5">
        For inquiries, booking information, or just to say hi, please use the form below or reach out directly.
      </p>
      </div>
      <div className="w-full max-w-lg bg-white rounded-lg p-6 shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-800 font-medium mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-800 font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your email"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-800 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Your message"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <button className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300">
          Send Message
        </button>
      </div>
      <div className="mt-10 text-center">
        <p className="font-bold text-gray-800">Or reach us directly:</p>
        <p className="text-gray-700">Email: bobfranklemoncurds@mgmt.com</p>
      </div>
    </div>
    </div>
  );
}

export default Contact;