const projects = [
  {
    title: "Vulnerability Management and Network Defense (Lab)",
    desc: [
      <li>Performed vulnerability assessments with Nessus Tenable to identify security weaknesses and document associated risks.</li>,
      <li>Analyzed network traffic and packet captures in Wireshark to investigate suspicious activity and evaluate network security posture.</li>
    ],
  },
  {
    title: "Incident Response and Digital Forensics",
    desc: [
      <li>Investigated simulated incidents with Autopsy and FTK Imager, examining system artifacts to identify indicators of compromise (IoCs).</li>,
      <li>Applied OSINT research techniques to support findings and produced clear investigation documentation.</li>
    ],
  }
  /*{
    //title: "Project Three",
    //desc: "A short description of this project and what it does.",
  },*/
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="border rounded-xl p-6 hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-xl mb-2">{p.title}</h3>
            <p className="text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
