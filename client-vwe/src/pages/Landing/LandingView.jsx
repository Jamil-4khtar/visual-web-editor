import React, { useState } from "react";
import LandingBackground from "../../components/LandingBackground";
import Navbar from "../../components/Navbar";
import "../../styles/LandingStyles.css";
import { Link } from "react-router-dom";
import MagicWandSparkles from "../../assets/icons/MagicWandSparkles";
import Eye from "../../assets/icons/Eye";
import Palette from "../../assets/icons/Palette";
import PenToSquare from "../../assets/icons/PenToSquare";
import ArrowsUpDownLeftRight from "../../assets/icons/ArrowsUpDownLeftRight";
import LayerGroup from "../../assets/icons/LayerGroup";
import Save from "../../assets/icons/Save";
import Linkedin from "../../assets/icons/Linkedin";
import Github from "../../assets/icons/Github";
import Twitter from "../../assets/icons/Twitter";

function LandingView() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div className="fixed inset-0 -z-10">
        <LandingBackground />
      </div>
      <div className="z-10 h-[200px]">
        <header className="bg-transparent backdrop-blur-lg sticky top-0 z-50 shadow-sm ">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#hero" className="text-2xl font-bold text-gray-400">
              <MagicWandSparkles />
              Visual Weaver
            </a>
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#features"
                className="text-gray-600 hover:text-indigo-600 transition"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-indigo-600 transition"
              >
                How It Works
              </a>
              <a
                href="#cta"
                className="bg-indigo-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-indigo-700 transition"
              >
                Launch Editor
              </a>
            </div>
            {/* <button
              className="md:hidden text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              <i className="fas fa-bars text-2xl"></i>
            </button> */}

            {/* Mobile Dropdown */}
            {/* {isOpen && (
              <div className="flex flex-col items-start space-y-4 mt-4 md:hidden">
                <a
                  href="#features"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  How It Works
                </a>
                <a
                  href="#cta"
                  className="bg-indigo-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-indigo-700 transition"
                >
                  Launch Editor
                </a>
              </div>
            )} */}
          </nav>
        </header>

        <main className="hero-gradient">
          <section
            id="hero"
            className="container mx-auto px-6 py-20 md:py-32 text-center"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-400 leading-tight">
              Build Beautiful Web Pages, <br className="hidden md:inline" />{" "}
              Visually. No Code Required.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Visual Weaver is a live template editor that lets you manage,
              edit, and preview HTML templates with an intuitive WYSIWYG
              interface. Customize content, styles, and layouts in real-time.
            </p>
            <div className="mt-10 flex flex-col gap-5 md:flex-row lg:flex-row justify-center items-center">
              <a
                href="#cta"
                className="cta-gradient text-white font-bold w-60 py-3 px-8 rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Started for Free
              </a>

              <Link
                to={"/library"}
                className="bg-gray-200 text-gray-700 font-semibold w-60 py-3 px-8 rounded-full shadow-md hover:bg-gray-400 transition"
              >
                View Template Library
              </Link>
            </div>
            <div className="mt-16 mx-auto max-w-5xl">
              <picture>
                <source srcset="visual-ss.webp" type="image/webp" />
                <img
                  src="visual-ss.png"
                  alt="Visual Weaver Editor Screenshot"
                  className="rounded-xl shadow-2xl border-4 border-gray-400"
                  loading="lazy"
                />
              </picture>
            </div>
          </section>
        </main>

        <section
          id="features"
          className="py-20 bg-slate-800/50 backdrop-blur-md mx-10 rounded-4xl"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-400">
                Everything You Need to Create
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                Powerful features that give you full control over your web
                templates.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="text-center p-6 bg-gray-400 rounded-xl shadow-sm hover:shadow-lg transition">
                <div className="feature-icon text-white w-16 h-16 rounded-full inline-flex items-center justify-center mb-5 text-2xl">
                  <Eye />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Visual WYSIWYG Editor
                </h3>
                <p className="text-gray-600">
                  Click on any element to edit it. What you see is exactly what
                  you get, making web design intuitive and fast.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-400 rounded-xl shadow-sm hover:shadow-lg transition">
                <div className="feature-icon text-white w-16 h-16 rounded-full inline-flex items-center justify-center mb-5 text-2xl">
                  <Palette />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Live Style Customization
                </h3>
                <p className="text-gray-600">
                  A floating toolbar gives you instant access to styling options
                  like fonts, colors, and spacing.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-400 rounded-xl shadow-sm hover:shadow-lg transition">
                <div className="feature-icon text-white w-16 h-16 rounded-full inline-flex items-center justify-center mb-5 text-2xl">
                  <PenToSquare />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Direct Text Editing
                </h3>
                <p className="text-gray-600">
                  Simply click and type to change any text content on your
                  template, from headings to button labels.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-400 rounded-xl shadow-sm hover:shadow-lg transition">
                <div className="feature-icon text-white w-16 h-16 rounded-full inline-flex items-center justify-center mb-5 text-2xl">
                  <ArrowsUpDownLeftRight />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Drag & Drop Reordering
                </h3>
                <p className="text-gray-600">
                  Easily rearrange sections and elements within your template to
                  get the perfect layout.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-400 rounded-xl shadow-sm hover:shadow-lg transition">
                <div className="feature-icon text-white w-16 h-16 rounded-full inline-flex items-center justify-center mb-5 text-2xl">
                  <LayerGroup />
                </div>
                <h3 className="text-xl font-semibold mb-2">Template Library</h3>
                <p className="text-gray-600">
                  Manage all your templates in one place. Preview, edit, or
                  create new versions with ease.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-400 rounded-xl shadow-sm hover:shadow-lg transition">
                <div className="feature-icon text-white w-16 h-16 rounded-full inline-flex items-center justify-center mb-5 text-2xl">
                  <Save />
                </div>
                <h3 className="text-xl font-semibold mb-2">Save & Preview</h3>
                <p className="text-gray-600">
                  Your changes are saved securely. Preview your final design in
                  a full-screen mode before publishing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-400">
                Get Started in 3 Simple Steps
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                Creating stunning pages has never been easier.
              </p>
            </div>
            <div className="relative ">
              <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-gray-300 border-t-2 border-dashed border-gray-400 -translate-y-1/2"></div>

              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="bg-white w-24 h-24 rounded-full inline-flex items-center justify-center mb-5 border-4 border-indigo-200 shadow-lg">
                    <span className="text-3xl font-bold text-indigo-600">
                      1
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-400">
                    Select a Template
                  </h3>
                  <p className="text-gray-600">
                    Choose from a library of pre-built templates or start with
                    your own HTML.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white w-24 h-24 rounded-full inline-flex items-center justify-center mb-5 border-4 border-indigo-200 shadow-lg">
                    <span className="text-3xl font-bold text-indigo-600">
                      2
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-400">
                    Edit Visually
                  </h3>
                  <p className="text-gray-600">
                    Use the intuitive editor to customize content, colors,
                    fonts, and layouts in real-time.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white w-24 h-24 rounded-full inline-flex items-center justify-center mb-5 border-4 border-indigo-200 shadow-lg">
                    <span className="text-3xl font-bold text-indigo-600">
                      3
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-400">
                    Save & Publish
                  </h3>
                  <p className="text-gray-600">
                    Save your masterpiece and preview the final result. Your
                    template is ready to go live!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="h-screen">
          <section id="cta" className="cta-gradient md:h-[50%]">
            <div className="container mx-auto px-6 py-20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Weave Some Magic?
              </h2>
              <p className="mt-4 text-lg text-indigo-200 max-w-2xl mx-auto">
                Stop wrestling with code and start creating visually. Launch the
                editor and bring your ideas to life in minutes.
              </p>
              <div className="mt-8">
                <Link
                  to="/editor"
                  className="bg-white text-indigo-600 font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  Launch the Editor Now
                </Link>
              </div>
            </div>
          </section>

          <footer className="bg-gray-800/90 md:h-[50%]  text-white">
            <div className="container mx-auto px-6 py-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                  <h3 className="text-xl font-bold mb-4">Visual Weaver</h3>
                  <p className="text-gray-400">
                    The future of web template editing.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#features"
                        className="text-gray-400 hover:text-white"
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        href="#how-it-works"
                        className="text-gray-400 hover:text-white"
                      >
                        How It Works
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                  <div className="flex justify-center md:justify-start space-x-4 text-2xl">
                    <Link
                      to={"https://www.linkedin.com/in/jamil-4khtar/"}
                      className="text-gray-400 hover:text-white"
                    >
                      <Linkedin />
                    </Link>
                    <Link
                      to={"/https://github.com/Jamil-4khtar"}
                      className="text-gray-400 hover:text-white"
                    >
                      <Github />
                    </Link>
                    <a href="#" className="text-gray-400 hover:text-white">
                      <Twitter />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
                <p>&copy; 2025 Visual Weaver. All Rights Reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default LandingView;
