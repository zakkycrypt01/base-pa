'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardBody, Button, Input, Alert } from '@/app/components';
import { useTheme } from '@/app/context/ThemeContext';

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  const [email, setEmail] = useState('user@example.com');
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    updates: true,
  });
  const [saved, setSaved] = useState(false);

  const handleSaveSettings = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const settingSections = [
    {
      title: 'Account Settings',
      description: 'Manage your account information and preferences',
      icon: '👤',
    },
    {
      title: 'Notifications',
      description: 'Control how you receive updates and alerts',
      icon: '🔔',
    },
    {
      title: 'Privacy & Security',
      description: 'Manage your privacy settings and security options',
      icon: '🔒',
    },
    {
      title: 'API & Integrations',
      description: 'Manage API keys and third-party integrations',
      icon: '🔌',
    },
  ];

  return (
    <div className="w-full py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{fontFamily: 'var(--font-display)'}}>
            <span className="text-gradient">Settings</span>
          </h1>
          <p className="text-gray-400">Customize your AgentKit experience</p>
        </div>

        {/* Saved Alert */}
        {saved && (
          <Alert variant="success" title="Changes saved" className="mb-6">
            Your settings have been saved successfully
          </Alert>
        )}

        {/* Theme Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-white mb-1">Dark Mode</h4>
                  <p className="text-sm text-gray-400">Currently: {theme === 'dark' ? 'Dark' : 'Light'}</p>
                </div>
                <button
                  onClick={toggleTheme}
                  className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                    theme === 'dark' ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                      theme === 'dark' ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Account Settings */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              <Input
                label="Email Address"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Input
                label="Full Name"
                type="text"
                placeholder="Your full name"
                defaultValue="John Doe"
              />
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Account Type
                </label>
                <div className="glass border border-white/10 rounded-xl px-4 py-2.5 text-gray-400">
                  Free Tier
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Notifications */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              {[
                { key: 'email', label: 'Email Notifications', description: 'Receive email updates about your account' },
                { key: 'push', label: 'Push Notifications', description: 'Receive push notifications in the browser' },
                { key: 'updates', label: 'Product Updates', description: 'Get notified about new features and updates' },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.label}</h4>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                  <button
                    onClick={() =>
                      setNotifications(prev => ({
                        ...prev,
                        [item.key]: !prev[item.key as keyof typeof notifications],
                      }))
                    }
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                      notifications[item.key as keyof typeof notifications] ? 'bg-blue-600' : 'bg-gray-600'
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                        notifications[item.key as keyof typeof notifications] ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* API Keys */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>API Keys</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              <Alert variant="info">
                API keys allow you to access AgentKit via API. Keep your keys secret and never share them in public code.
              </Alert>
              <div className="space-y-3">
                {[
                  { name: 'Production Key', key: 'sk-prod-...****.example' },
                  { name: 'Development Key', key: 'sk-dev-...****.example' },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between p-4 glass border border-white/10 rounded-lg">
                    <div>
                      <h5 className="font-medium text-white">{item.name}</h5>
                      <p className="text-sm text-gray-400 font-mono">{item.key}</p>
                    </div>
                    <div className="space-x-2">
                      <Button size="sm" variant="secondary">
                        Copy
                      </Button>
                      <Button size="sm" variant="danger">
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="secondary" className="w-full">
                Generate New Key
              </Button>
            </div>
          </CardBody>
        </Card>

        {/* Danger Zone */}
        <Card className="border-red-500/20 bg-red-500/5 mb-8">
          <CardHeader>
            <CardTitle>Danger Zone</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="space-y-3">
              <div className="p-4 glass border border-red-500/20 rounded-lg">
                <h5 className="font-medium text-red-400 mb-2">Delete Account</h5>
                <p className="text-sm text-gray-400 mb-4">
                  Permanently delete your account and all associated data. This action cannot be undone.
                </p>
                <Button variant="danger">
                  Delete Account
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Save Button */}
        <div className="flex gap-3">
          <Button size="lg" onClick={handleSaveSettings}>
            Save Changes
          </Button>
          <Button size="lg" variant="secondary">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
