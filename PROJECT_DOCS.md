# AgentKit - Next Generation AI Assistant Platform

A modern, fully-featured web application for building and deploying intelligent blockchain AI agents powered by Coinbase's AgentKit.

## 🎨 Complete Redesign Overview

This project has received a comprehensive full redesign including modern UI components, multiple pages, authentication system, and advanced features.

### ✨ What's New

#### 1. **Modern Design System**
- Beautiful dark theme with animated gradients
- Glassmorphism effects throughout
- Smooth animations and transitions
- Professional typography with Space Grotesk & Inter fonts
- Custom color palette with blue/cyan gradients

#### 2. **Component Library** (`app/components/`)
- `Button` - Versatile button with multiple variants (primary, secondary, ghost, danger)
- `Card` - Flexible card component with header, title, and body sections
- `Badge` - Status indicators and labels
- `Input` & `Textarea` - Form inputs with error states
- `Modal` - Customizable modal dialogs
- `Alert` - Success, warning, error, and info alerts
- `Loader` - Loading spinners
- `Pagination` - Smart pagination component
- `Tabs` - Tabbed content interface
- `Navigation` - Responsive header with theme toggle

#### 3. **Pages**

**Landing Page** (`app/page.tsx`)
- Stunning hero section with animated background
- Feature showcase grid
- Use cases section
- Statistics display
- Call-to-action sections
- Smooth scroll animations

**Chat Page** (`app/chat/page.tsx`)
- Interactive AI chat interface
- Message history with avatars
- Real-time thinking indicator
- Suggested prompts for easy interaction
- Responsive design

**Features Page** (`app/features/page.tsx`)
- Comprehensive feature showcase
- Capability cards with icons
- Comparison table vs competitors
- Detailed feature descriptions

**Dashboard** (`app/dashboard/page.tsx`)
- User statistics and metrics
- Conversation history
- Recent activity feed
- Pagination for conversations
- Overview cards

**Settings Page** (`app/settings/page.tsx`)
- Account settings
- Theme toggle (dark/light mode)
- Notification preferences
- API key management
- Danger zone for account deletion

**Authentication Pages**
- **Login** (`app/login/page.tsx`) - Sign in with email/password
- **Signup** (`app/signup/page.tsx`) - Create new account
- OAuth integration ready (GitHub, Google)

#### 4. **Theme System** (`app/context/ThemeContext.tsx`)
- Dark/Light mode toggle
- Persistent theme storage
- Context-based implementation
- Easy integration across components

#### 5. **Navigation** (`app/components/Navigation.tsx`)
- Responsive header navigation
- Mobile-friendly menu
- Active page indicators
- Theme toggle button
- Logo with gradient effects

#### 6. **Styling Enhancements** (`app/globals.css`)
- Custom animations (fadeInUp, slideIn, pulse, shimmer)
- Glass morphism classes
- Gradient text utilities
- Blob animations
- Custom color variables

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
app/
├── components/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Badge.tsx
│   ├── Input.tsx
│   ├── Modal.tsx
│   ├── Alert.tsx
│   ├── Loader.tsx
│   ├── Pagination.tsx
│   ├── Tabs.tsx
│   ├── Navigation.tsx
│   └── index.ts
├── context/
│   └── ThemeContext.tsx
├── hooks/
│   └── useAgent.ts
├── chat/
│   └── page.tsx
├── features/
│   └── page.tsx
├── dashboard/
│   └── page.tsx
├── settings/
│   └── page.tsx
├── login/
│   └── page.tsx
├── signup/
│   └── page.tsx
├── api/
│   └── agent/
├── globals.css
├── layout.tsx
└── page.tsx
```

## 🎯 Key Features

### Modern UI/UX
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth animations and transitions
- ✅ Dark/Light theme support
- ✅ Glassmorphism effects
- ✅ Gradient backgrounds
- ✅ Professional typography

### Pages & Routes
- ✅ Landing page with hero section
- ✅ Features showcase page
- ✅ Chat interface
- ✅ User dashboard
- ✅ Settings management
- ✅ Authentication pages (login/signup)

### Components
- ✅ Reusable component library
- ✅ Multiple button variants
- ✅ Form inputs with validation
- ✅ Modal dialogs
- ✅ Alert notifications
- ✅ Pagination
- ✅ Tabs interface

### State Management
- ✅ Theme context provider
- ✅ React hooks for state
- ✅ localStorage persistence

## 🎨 Customization

### Changing Colors
Edit `app/globals.css` to modify color variables:

```css
:root {
  --gradient-primary: linear-gradient(135deg, #0052ff 0%, #00d4ff 100%);
  /* ... other colors ... */
}
```

### Adding New Pages
1. Create a new folder in `app/`
2. Add `page.tsx` with your component
3. Navigation will auto-detect the route

### Creating New Components
1. Create file in `app/components/`
2. Export from `app/components/index.ts`
3. Use throughout the app

## 📦 Dependencies

- **Next.js 16** - React framework
- **React 19** - UI library
- **Tailwind CSS 4** - Styling
- **TypeScript** - Type safety
- **React Markdown** - Markdown rendering
- **AI SDK** - AI integration

## 🔐 Security

- Type-safe TypeScript throughout
- Input validation on forms
- Environment variables for secrets
- HTTPS ready
- XSS protection with React

## 📱 Responsive Design

All pages and components are fully responsive:
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Optimized images and assets

## 🚀 Performance

- Next.js optimizations
- CSS-in-JS for better performance
- Lazy loading ready
- Image optimization
- Code splitting

## 🔄 Future Enhancements

Planned features:
- [ ] User authentication backend
- [ ] Database integration
- [ ] Real-time notifications
- [ ] Advanced analytics
- [ ] Team collaboration
- [ ] Custom branding
- [ ] API documentation
- [ ] Webhooks support

## 📄 License

This project is part of the AgentKit ecosystem by Coinbase.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, please visit:
- [Documentation](https://docs.cdp.coinbase.com/agentkit/docs/welcome)
- [Discord Community](https://discord.gg/CDP)
- [GitHub Issues](https://github.com/coinbase/agentkit)

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
