export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        <span className="font-bold text-lg">Lutfil Hadi</span>
        <div className="hidden sm:flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="#projects" className="hover:text-blue-600 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
