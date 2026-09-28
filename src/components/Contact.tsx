export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-gray-600 mb-6">
        Want to work together? Reach out below.
      </p>
      <a
        href="mailto:you@example.com"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Email Me
      </a>
    </section>
  );
}
