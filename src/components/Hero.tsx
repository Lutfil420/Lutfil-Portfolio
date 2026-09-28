export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <h1 className="text-4xl sm:text-6xl font-bold mb-4">
        Hi, I&apos;m Lutfil Hadi 👋
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 max-w-xl">
        I&apos;m a Computer Science graduate specializing in Cybersecurity. 
        Welcome to my portfolio.
      </p>
      <a
        href="#projects"
        className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        View My Work
      </a>
    </section>
  );
}
