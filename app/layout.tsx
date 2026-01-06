import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/app/context/ThemeContext";
import { Navigation } from "@/app/components/Navigation";

/**
 * Metadata for the page
 */
export const metadata: Metadata = {
  title: "AgentKit - Next Generation AI Assistant",
  description: "Experience the future of blockchain AI agents powered by Coinbase AgentKit",
};

/**
 * Root layout for the page
 *
 * @param {object} props - The props for the root layout
 * @param {React.ReactNode} props.children - The children for the root layout
 * @returns {React.ReactNode} The root layout
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <ThemeProvider>
          {/* Animated Background Elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 -right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          {/* Navigation */}
          <Navigation />

          {/* Main Content */}
          <main className="relative z-10 flex-grow flex items-center justify-center px-4 py-8">
            {children}
          </main>

          {/* Footer */}
          <footer className="relative z-10 glass-dark border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand */}
                <div>
                  <h3 className="text-lg font-bold text-gradient mb-2" style={{fontFamily: 'var(--font-display)'}}>AgentKit</h3>
                  <p className="text-sm text-gray-400">Next-generation blockchain AI agents powered by Coinbase Developer Platform</p>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Resources</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="https://docs.cdp.coinbase.com/agentkit/docs/welcome" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/coinbase/agentkit" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                        GitHub Repository
                      </a>
                    </li>
                    <li>
                      <a href="https://docs.cdp.coinbase.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                        Coinbase Developer Platform
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Community */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Community</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="https://discord.gg/CDP" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                        Discord Community
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-white/10 mt-8 pt-6 text-center">
                <p className="text-xs text-gray-500">© {new Date().getFullYear()} Coinbase, Inc. All rights reserved.</p>
              </div>
            </div>
          </footer>

          <style jsx global>{`
            @keyframes blob {
              0%, 100% {
                transform: translate(0, 0) scale(1);
              }
              25% {
                transform: translate(20px, -50px) scale(1.1);
              }
              50% {
                transform: translate(-20px, 20px) scale(0.9);
              }
              75% {
                transform: translate(50px, 50px) scale(1.05);
              }
            }

            .animate-blob {
              animation: blob 20s infinite;
            }

            .animation-delay-2000 {
              animation-delay: 2s;
            }

            .animation-delay-4000 {
              animation-delay: 4s;
            }
          `}</style>
        </ThemeProvider>
      </body>
    </html>
  );
}
