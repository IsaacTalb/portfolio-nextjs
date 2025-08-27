export const Footer = () => (
  <footer className="border-t mt-24">
    <div className="container-tight py-10 text-sm text-neutral-500 flex flex-col md:flex-row justify-between items-center gap-4">
      <span>© {new Date().getFullYear()} Isaac Talb</span>
      <span>Full-Stack • Web & Hosting • Content • AI</span>
      <div className="flex gap-3">
        <a href="mailto:isaac@duckcloud.info" className="hover:text-black">Email</a>
        <a href="https://github.com/IsaacTalb" target="_blank" rel="noopener noreferrer" className="hover:text-black">GitHub</a>
      </div>
    </div>
  </footer>
);
