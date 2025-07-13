# AI Mock Interview Application

An AI-powered mock interview platform built with React + TypeScript + Vite. Practice interviews with AI-generated questions and receive personalized feedback.

## 🚀 Features

- **AI-Powered Interviews**: Generate custom interview questions using Google's Gemini AI
- **Voice Recording**: Record and analyze your interview responses
- **Real-time Feedback**: Get instant feedback on your performance
- **User Authentication**: Secure login/signup with Clerk
- **Interview Management**: Create, edit, and manage multiple interviews
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** with TypeScript
- **Vite** for fast development and building

### UI & Styling
- **Tailwind CSS** for styling
- **shadcn/ui** for pre-built components
- **Radix UI** for accessible primitives
- **Lucide React** for icons

### Routing & State
- **React Router DOM** for navigation
- **React Hook Form** for form management
- **Zod** for form validation

### Authentication & Backend
- **Clerk** for user authentication
- **Firebase** for database and backend services

### AI Integration
- **Google Generative AI** (Gemini) for AI-powered features
- **Speech-to-text** for voice input

### Additional Features
- **React Webcam** for video recording
- **Sonner** for toast notifications
- **React Fast Marquee** for scrolling effects

## 📁 Project Structure

```
ai-mock-interview-react-vite-typescript-january-2025/
├── src/                    # Main source code
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # shadcn/ui components
│   │   │   ├── accordion.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── textarea.tsx
│   │   │   └── tooltip.tsx
│   │   ├── container.tsx
│   │   ├── custom-bread-crumb.tsx
│   │   ├── footer.tsx
│   │   ├── form-mock-interview.tsx
│   │   ├── generate.tsx
│   │   ├── header.tsx
│   │   ├── headings.tsx
│   │   ├── logo-container.tsx
│   │   ├── marquee-img.tsx
│   │   ├── modal.tsx
│   │   ├── navigation-routes.tsx
│   │   ├── pin.tsx
│   │   ├── profile-container.tsx
│   │   ├── question-section.tsx
│   │   ├── record-answer.tsx
│   │   ├── save-modal.tsx
│   │   ├── toggle-container.tsx
│   │   └── tooltip-button.tsx
│   ├── config/            # Configuration files
│   │   └── firebase.config.ts
│   ├── handlers/          # Event handlers
│   │   └── auth-handler.tsx
│   ├── layouts/           # Layout wrappers
│   │   ├── auth-layout.tsx
│   │   ├── main-layout.tsx
│   │   ├── protected-routes.tsx
│   │   └── public-layout.tsx
│   ├── lib/               # Utility functions
│   │   ├── helpers.ts
│   │   └── utils.ts
│   ├── provider/          # React context providers
│   │   └── toast-provider.tsx
│   ├── routes/            # Page components
│   │   ├── create-edit-page.tsx
│   │   ├── dashboard.tsx
│   │   ├── feedback.tsx
│   │   ├── home.tsx
│   │   ├── loader-page.tsx
│   │   ├── mock-interview-page.tsx
│   │   ├── mock-load-page.tsx
│   │   ├── sign-in.tsx
│   │   └── sign-up.tsx
│   ├── scripts/           # Utility scripts
│   │   └── index.ts
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts       #Scripts for AI integration
│   ├── App.tsx            # Main router configuration with three layout types:|Public routes (homepage), Authentication route(sign-in/sign-up,Protected routes (dashboard, interviews, etc.)
│   ├── main.tsx           # Application entry point
│   ├── index.css          # Global styles
│   └── vite-env.d.ts      # Vite environment types
├── public/                # Static assets
│   └── assets/
│       ├── img/
│       │   ├── bg.png
│       │   ├── hero.jpg
│       │   ├── office.jpg
│       │   └── logo/
│       │       ├── firebase.png
│       │       ├── meet.png
│       │       ├── microsoft.png
│       │       ├── react.png
│       │       ├── tailwindcss.png
│       │       └── zoom.png
│       └── svg/
│           ├── logo.svg
│           ├── not-found.svg
│           └── vite.svg
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── eslint.config.js       # ESLint configuration
├── components.json        # shadcn/ui configuration
├── firebase.json          # Firebase configuration
├── .firebaserc            # Firebase project settings
└── README.md              # This file
```

## 🏗️ Application Architecture

### **Core Application Files**
- **`main.tsx`** - Application entry point with providers
- **`App.tsx`** - Main router configuration with three layout types:
  - **Public routes** (homepage)
  - **Authentication routes** (sign-in/sign-up)
  - **Protected routes** (dashboard, interviews, etc.)

### **Layout System**
- **`PublicLayout`** - For public pages (homepage)
- **`AuthLayout`** - For authentication pages
- **`MainLayout`** - For protected pages with navigation
- **`ProtectedRoutes`** - Route protection wrapper

### **Component Organization**
- **`/components/ui/`** - Reusable shadcn/ui components
- **`/components/`** - Custom application components
- **`/routes/`** - Page-level components
- **`/layouts/`** - Layout wrapper components

## 🔄 Application Flow

1. **Public Access** → Homepage with app introduction
2. **Authentication** → Sign-in/Sign-up via Clerk
3. **Protected Dashboard** → User can create/manage interviews
4. **Mock Interview** → AI-generated questions with voice recording
5. **Feedback** → AI-powered interview feedback

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-mock-interview-react-vite-typescript-january-2025
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Firebase Configuration
   VITE_FIREBASE_API_KEY=your_firebase_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id

   # Gemini API
   VITE_GEMINI_API_KEY=your_gemini_api_key_here

   # Clerk Authentication
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📝 Available Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm run lint`** - Run ESLint
- **`npm run preview`** - Preview production build

## 🔧 Configuration

### Firebase Setup
1. Create a Firebase project
2. Enable Firestore database
3. Add your Firebase config to `.env.local`

### Clerk Setup
1. Create a Clerk application
2. Configure authentication providers
3. Add your Clerk publishable key to `.env.local`

### Gemini AI Setup
1. Get API key from Google AI Studio
2. Add your Gemini API key to `.env.local`

## 🎨 Design System

- **Modern UI**: Clean, professional interface
- **Responsive Design**: Works on all device sizes
- **Accessibility**: Built with Radix UI primitives
- **Theme Support**: Dark/light mode ready
- **Component Library**: Consistent design with shadcn/ui

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, please open an issue in the GitHub repository or contact the development team.


