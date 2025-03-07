// File: app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-16 md:py-24 max-w-3xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Mohsen Bakhit</h1>
          <h2 className="text-xl md:text-2xl text-gray-500 mb-8">Software Engineer | CS @ <a href='https://ubc.ca'>University of British Columbia</a></h2>
          
          <div className="prose prose-lg text-gray-400">
            <p className="mb-6">
              Hi, I'm Mohsen (or Mason, if that's easier :). A student at <span className="font-semibold">UBC</span>, I have
              been learning and growing my skill set in designing backend systems and theoretical ML.
            </p>
            <p className="mb-6">
              Currently working as an SWE Intern at <span className="font-semibold">CIBC</span>, 
              where I aid the team in enhancement and migration of backend systems to more modern frameworks.
            </p>
            <p className="text-xl text-gray-300">
              I specialize in:<br/>
            </p>
            <div>
              <p className='p-0'>Languages:  C++, Go, Javascript and Python</p>
              <p>Frameworks/Libraries: gRPC, Numpy, Pandas, Pytorch, Next.js, React</p>
              <p>Developer Tools: Docker, AWS, Azure, Jenkins</p>
            </div>
          </div>
          
          <div className="mt-12 space-y-2">
            <div className="flex items-center space-x-4">
              <span className="font-semibold w-24">Email:</span>
              <a href="mailto:mattbak09@proton.me" className="text-blue-600 hover:underline">mattbak09@proton.me</a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-semibold w-24">GitHub:</span>
              <a href="https://github.com/mohsenbakhit" className="text-blue-600 hover:underline">github.com/mohsenbakhit</a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-semibold w-24">LinkedIn:</span>
              <a href="https://linkedin.com/in/mohsenbakhit" className="text-blue-600 hover:underline">linkedin.com/in/mohsenbakhit</a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6">Experience</h3>
          
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-xl font-semibold">Application Developer Co-op</h4>
                <span className="text-gray-600">September 2024 - Present</span>
              </div>
              <h5 className="text-gray-700 mb-3">CIBC</h5>
              <p className="text-gray-700">
                Part of Capital Markets Technology team, focusing on developing and maintaining the Dynamic Currency Conversion (DCC) product. 
                Collaborated with cross-functional teams to deliver high-quality software solutions.
              </p>
            </div>
            
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-xl font-semibold">Backend Developer Co-op</h4>
                <span className="text-gray-600">May 2024 - September 2024</span>
              </div>
              <h5 className="text-gray-700 mb-3">University of British Columbia</h5>
              <p className="text-gray-700">
                Developed responsive web applications that provide a simple interface and tools
                for queuing and running computational chemistry jobs on clusters for researchers.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16 mt-16">
          <h3 className="text-2xl font-bold mb-6">Selected Projects</h3>
          
          <div className="space-y-8">
            <div className="border-l-4 border-gray-300 pl-4">
              <h4 className="text-xl font-semibold mb-2">TaskFlow</h4>
              <p className="text-gray-700 mb-3">
                A productivity application with drag-and-drop task management, smart categorization, 
                and built-in time tracking.
              </p>
              <div className="flex space-x-4 text-sm">
                <span className="bg-gray-700 px-2 py-1 rounded">Next.js</span>
                <span className="bg-gray-700 px-2 py-1 rounded">TypeScript</span>
                <span className="bg-gray-700 px-2 py-1 rounded">Prisma</span>
              </div>
              <div className="flex items-center">
                <img src="react.png" alt="React" className="w-12 h-auto mr-2" />
                <span>React</span>
              </div>
            </div>
            
            <div className="border-l-4 border-gray-300 pl-4">
              <h4 className="text-xl font-semibold mb-2">DataViz Dashboard</h4>
              <p className="text-gray-700 mb-3">
                An analytics dashboard providing real-time data visualization and customizable reports
                for enterprise clients.
              </p>
              <div className="flex space-x-4 text-sm">
                <span className="bg-gray-700 px-2 py-1 rounded">React</span>
                <span className="bg-gray-700 px-2 py-1 rounded">D3.js</span>
                <span className="bg-gray-700 px-2 py-1 rounded">GraphQL</span>
              </div>
              <div className="mt-3">
                <a href="#" className="text-blue-600 hover:underline text-sm">View Project →</a>
              </div>
            </div>
          </div>
        </div>

      </main>
      
      <footer className="py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Mohsen Bakhit. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}