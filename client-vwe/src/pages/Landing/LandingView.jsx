import React from "react";
import LandingBackground from "../../components/LandingBackground";
import Navbar from "../../components/Navbar";
import "../../styles/LandingStyles.css"

function LandingView() {
  return (
    <div className="relative min-h-screen">
      <LandingBackground />
      <div className="absolute z-10 h-screen w-screen overflow-y-scroll">
        {/* <div>
          <h2 className="ml-10 mt-5 text-2xl font-bold font-stretch-75%">Visual Web Editor</h2>
          <div className="fixed right-10 top-5">
            <Navbar />
            <div className="hero">
            </div>
          </div>
        </div> */}
        <header class="bg-white/500 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
        <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" class="text-2xl font-bold text-gray-800">
                <i class="fas fa-magic-wand-sparkles text-indigo-600"></i>
                Visual Weaver
            </a>
            <div class="hidden md:flex items-center space-x-6">
                <a href="#features" class="text-gray-600 hover:text-indigo-600 transition">Features</a>
                <a href="#how-it-works" class="text-gray-600 hover:text-indigo-600 transition">How It Works</a>
                <a href="#cta" class="bg-indigo-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-indigo-700 transition">Launch Editor</a>
            </div>
            <button class="md:hidden text-gray-700">
                <i class="fas fa-bars text-2xl"></i>
            </button>
        </nav>
    </header>

    <main class="hero-gradient">
        <section class="container mx-auto px-6 py-20 md:py-32 text-center">
            <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                Build Beautiful Web Pages, <br class="hidden md:inline"/> Visually. No Code Required. 
            </h1>
            <p class="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Visual Weaver is a live template editor that lets you manage, edit, and preview HTML templates with an intuitive WYSIWYG interface. Customize content, styles, and layouts in real-time.
            </p>
            <div class="mt-10 flex justify-center items-center space-x-4">
                <a href="#cta" class="cta-gradient text-white font-bold py-3 px-8 rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    Get Started for Free
                </a>
                <a href="#how-it-works" class="bg-white text-gray-700 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition">
                    See How It Works
                </a>
            </div>
            <div class="mt-16 mx-auto max-w-5xl">
                <img src="https://placehold.co/1200x600/e2e8f0/4a5568?text=Editor+Screenshot" alt="Visual Weaver Editor Screenshot" class="rounded-xl shadow-2xl border-4 border-white"/>
            </div>
        </section>
    </main>

    <section id="features" class="py-20 bg-slate-800/50 mx-10 rounded-4xl">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Everything You Need to Create</h2>
                <p class="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Powerful features that give you full control over your web templates.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div class="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition">
                    <div class="feature-icon text-white w-16 h-16 rounded-full inline-flex items-center justify-center mb-5 text-2xl">
                        <i class="fas fa-eye"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Visual WYSIWYG Editor</h3>
                    <p class="text-gray-600">Click on any element to edit it. What you see is exactly what you get, making web design intuitive and fast.</p>
                </div>
                <div class="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition">
                    <div class="feature-icon text-white w-16 h-16 rounded-full inline-flex items-center justify-center mb-5 text-2xl">
                        <i class="fas fa-palette"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Live Style Customization</h3>
                    <p class="text-gray-600">A floating toolbar gives you instant access to styling options like fonts, colors, and spacing.</p>
                </div>
                <div class="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition">
                    <div class="feature-icon text-white w-16 h-16 rounded-full inline-flex items-center justify-center mb-5 text-2xl">
                        <i class="fas fa-pen-to-square"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Direct Text Editing</h3>
                    <p class="text-gray-600">Simply click and type to change any text content on your template, from headings to button labels.</p>
                </div>
                <div class="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition">
                    <div class="feature-icon text-white w-16 h-16 rounded-full inline-flex items-center justify-center mb-5 text-2xl">
                        <i class="fas fa-arrows-up-down-left-right"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Drag & Drop Reordering</h3>
                    <p class="text-gray-600">Easily rearrange sections and elements within your template to get the perfect layout.</p>
                </div>
                <div class="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition">
                    <div class="feature-icon text-white w-16 h-16 rounded-full inline-flex items-center justify-center mb-5 text-2xl">
                        <i class="fas fa-layer-group"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Template Library</h3>
                    <p class="text-gray-600">Manage all your templates in one place. Preview, edit, or create new versions with ease.</p>
                </div>
                <div class="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition">
                    <div class="feature-icon text-white w-16 h-16 rounded-full inline-flex items-center justify-center mb-5 text-2xl">
                        <i class="fas fa-save"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Save & Preview</h3>
                    <p class="text-gray-600">Your changes are saved securely. Preview your final design in a full-screen mode before publishing.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="how-it-works" class="py-20 bg-transparent">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Get Started in 3 Simple Steps</h2>
                <p class="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Creating stunning pages has never been easier.</p>
            </div>
            <div class="relative">
                <div class="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-gray-300 border-t-2 border-dashed border-gray-400 -translate-y-1/2"></div>
                
                <div class="relative grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div class="text-center">
                        <div class="bg-white w-24 h-24 rounded-full inline-flex items-center justify-center mb-5 border-4 border-indigo-200 shadow-lg">
                            <span class="text-3xl font-bold text-indigo-600">1</span>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Select a Template</h3>
                        <p class="text-gray-600">Choose from a library of pre-built templates or start with your own HTML.</p>
                    </div>
                    <div class="text-center">
                        <div class="bg-white w-24 h-24 rounded-full inline-flex items-center justify-center mb-5 border-4 border-indigo-200 shadow-lg">
                            <span class="text-3xl font-bold text-indigo-600">2</span>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Edit Visually</h3>
                        <p class="text-gray-600">Use the intuitive editor to customize content, colors, fonts, and layouts in real-time.</p>
                    </div>
                    <div class="text-center">
                        <div class="bg-white w-24 h-24 rounded-full inline-flex items-center justify-center mb-5 border-4 border-indigo-200 shadow-lg">
                            <span class="text-3xl font-bold text-indigo-600">3</span>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Save & Publish</h3>
                        <p class="text-gray-600">Save your masterpiece and preview the final result. Your template is ready to go live!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="cta" class="cta-gradient">
        <div class="container mx-auto px-6 py-20 text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-white">Ready to Weave Some Magic?</h2>
            <p class="mt-4 text-lg text-indigo-200 max-w-2xl mx-auto">
                Stop wrestling with code and start creating visually. Launch the editor and bring your ideas to life in minutes.
            </p>
            <div class="mt-8">
                <a href="#" class="bg-white text-indigo-600 font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
                    Launch the Editor Now
                </a>
            </div>
        </div>
    </section>

    <footer class="bg-gray-800 text-white">
        <div class="container mx-auto px-6 py-10">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <h3 class="text-xl font-bold mb-4">Visual Weaver</h3>
                    <p class="text-gray-400">The future of web template editing.</p>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4">Links</h3>
                    <ul class="space-y-2">
                        <li><a href="#features" class="text-gray-400 hover:text-white">Features</a></li>
                        <li><a href="#how-it-works" class="text-gray-400 hover:text-white">How It Works</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
                    <div class="flex justify-center md:justify-start space-x-4 text-2xl">
                        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-github"></i></a>
                        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
            <div class="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
                <p>&copy; 2025 Visual Weaver. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
      </div>
    </div>
  );
}

export default LandingView;
