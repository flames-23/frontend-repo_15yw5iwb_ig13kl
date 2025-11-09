export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-10 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="h-9 w-9 rounded-md bg-gradient-to-tr from-sky-500 to-indigo-600 mb-3" />
          <p className="text-neutral-600 dark:text-neutral-400">
            Building safer, smoother roads with transparent collaboration.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-2">About</h4>
          <ul className="space-y-1 text-neutral-600 dark:text-neutral-400">
            <li><a href="#mission" className="hover:text-neutral-900 dark:hover:text-white">Mission</a></li>
            <li><a href="#gallery" className="hover:text-neutral-900 dark:hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-neutral-900 dark:hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Follow</h4>
          <ul className="space-y-1 text-neutral-600 dark:text-neutral-400">
            <li><a href="#" className="hover:text-neutral-900 dark:hover:text-white">Twitter</a></li>
            <li><a href="#" className="hover:text-neutral-900 dark:hover:text-white">LinkedIn</a></li>
            <li><a href="#" className="hover:text-neutral-900 dark:hover:text-white">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-neutral-500 mt-6">© {new Date().getFullYear()} Citizen Road. All rights reserved.</div>
    </footer>
  );
}
