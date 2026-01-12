function Contact() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div className="space-y-6 text-white">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            CONTACT{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              ME
            </span>
          </h2>

          <p className="text-gray-400 max-w-md">
            Open to new opportunities, collaborations, and ambitious projects.
          </p>

          <div className="space-y-3 text-gray-300">
            <p>📧 ouidadmohamed2002@gmail.com</p>
            <p>📞 +212 6 40 62 72 85</p>
            <p>📍 Agadir </p>
            <p>📍 Morocco </p>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white 
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white 
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white 
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white 
                       bg-gradient-to-r from-purple-500 to-pink-500 
                       hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;
