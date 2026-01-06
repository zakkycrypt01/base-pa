'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button, Input, Alert } from '@/app/components';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validation
    const newErrors: typeof errors = {};
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Handle login
    }, 1500);
  };

  return (
    <div className="w-full flex items-center justify-center min-h-screen py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-block relative mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-50"></div>
            <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-bold" style={{fontFamily: 'var(--font-display)'}}>
            <span className="text-gradient">AgentKit</span>
          </h1>
          <p className="text-gray-400 mt-2">Sign in to your account</p>
        </div>

        {/* Form Card */}
        <div className="glass border border-white/10 rounded-2xl p-8 mb-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              error={errors.email}
            />

            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              error={errors.password}
            />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 rounded" />
                <span className="text-gray-400">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-blue-400 hover:text-blue-300 transition-colors">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" size="lg" isLoading={isLoading} className="w-full">
              Sign In
            </Button>
          </form>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-gray-400">
            Don't have an account?{' '}
            <Link href="/signup" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
              Sign up
            </Link>
          </p>
        </div>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="text-gray-500 text-sm">or continue with</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        {/* OAuth Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="secondary" className="w-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 1.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            <span>GitHub</span>
          </Button>
          <Button variant="secondary" className="w-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M15.545 6.558a9.42 9.42 0 01.139 1.626c0 2.889-2.126 5.413-5.033 5.769v-4.894h1.694v-1.812h-1.694V8.4c0-.439.223-.856.587-1.06v-1.783c-.305-.049-.618-.078-.936-.078-1.666 0-3.194.944-3.973 2.458-.779 1.514-.779 3.287 0 4.801.779 1.514 2.307 2.458 3.973 2.458.335 0 .648-.029.953-.078v1.783c-.305.049-.618.078-.936.078C7.126 15.682 4 13.558 4 10.184c0-.544.058-1.08.16-1.595h2.385c.061.628.207 1.239.437 1.817H6.547V8.4c.364.204.584.621.584 1.06v1.812H4.857v1.812h2.274v4.894C3.882 16.395 2 13.871 2 10.768a9.042 9.042 0 01.139-1.626h2.406z" />
            </svg>
            <span>Google</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
