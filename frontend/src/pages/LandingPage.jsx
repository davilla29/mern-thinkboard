import { BrainIcon, CloudIcon } from "lucide-react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="text-white bg-gradient-to-r from-indigo-500 to-purple-600">
        <div className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Capture your ideas with NoteFlow
              </h1>
              <p className="mb-8 text-lg text-indigo-100 md:text-xl">
                Simple, fast, and secure note-taking app that helps you organize
                your thoughts and boost your productivity.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                {/* {isAuthenticated ? (
                  <Link to="/dashboard">
                    <Button className="px-8 py-3 text-lg">
                      Go to Dashboard
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link to="/signup">
                      <Button className="px-8 py-3 text-lg">
                        Get Started Free
                      </Button>
                    </Link>
                    <Link to="/login">
                      <Button
                        variant="outline"
                        className="px-8 py-3 text-lg text-white bg-white border-white bg-opacity-10 hover:bg-opacity-20"
                      >
                        Login
                      </Button>
                    </Link>
                  </>
                )} */}
                <Link to="/dashboard">
                  <Button className="px-8 py-3 text-lg">Go to Dashboard</Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Note-taking illustration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Why Choose NoteFlow?
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Our simple yet powerful features help you stay organized and
              productive.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:gap-12">
            <div className="p-8 bg-white shadow-md rounded-xl">
              <div className="inline-block p-4 mb-4 bg-indigo-100 rounded-lg">
                <div size={32} className="text-indigo-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Simple & Intuitive
              </h3>
              <p className="text-gray-600">
                Clean interface designed for distraction-free note taking. Focus
                on your thoughts, not the tool.
              </p>
            </div>
            <div className="p-8 bg-white shadow-md rounded-xl">
              <div className="inline-block p-4 mb-4 bg-indigo-100 rounded-lg">
                <BrainIcon size={32} className="text-indigo-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Organize Your Ideas
              </h3>
              <p className="text-gray-600">
                Create, edit, and organize your notes easily. Find what you need
                when you need it.
              </p>
            </div>
            <div className="p-8 bg-white shadow-md rounded-xl">
              <div className="inline-block p-4 mb-4 bg-indigo-100 rounded-lg">
                <CloudIcon size={32} className="text-indigo-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Access Anywhere
              </h3>
              <p className="text-gray-600">
                Your notes are securely stored and available on any device,
                whenever inspiration strikes.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            Ready to get started?
          </h2>
          <p className="max-w-3xl mx-auto mb-8 text-xl text-gray-600">
            Join thousands of users who organize their thoughts with NoteFlow.
          </p>
          {/* {isAuthenticated ? (
            <Link to="/dashboard">
              <Button className="px-8 py-3 text-lg">Go to Dashboard</Button>
            </Link>
          ) : (
            <Link to="/signup">
              <Button className="px-8 py-3 text-lg">Create Free Account</Button>
            </Link>
          )} */}
          <Link to="/dashboard">
            <Button className="px-8 py-3 text-lg">Go to Dashboard</Button>
          </Link>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 mt-auto bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-sm text-center text-gray-500">
            <p>© {new Date().getFullYear()} NoteFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
