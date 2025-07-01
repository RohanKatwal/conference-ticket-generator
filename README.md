# Conference Ticket Generator

A modern, responsive conference ticket generator built with React that allows users to create personalized conference tickets with form validation, file upload, and drag-and-drop functionality.


## 🚀 Live Demo

- **Live Site**: [View Demo]()
- **Portfolio**: [rohankatwal.com.np](https://www.rohankatwal.com.np/)

## 📋 Overview

This project is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). It demonstrates modern React development practices with a focus on user experience, accessibility, and responsive design.

### ✨ Key Features

Users can:
- ✅ Complete a multi-step form with their personal details
- ✅ Upload avatar images via drag-and-drop or file selection
- ✅ Receive real-time form validation with helpful error messages
- ✅ See file size and format validation for image uploads
- ✅ Navigate the entire form using only keyboard controls
- ✅ Experience full screen reader accessibility
- ✅ Generate a personalized conference ticket upon successful submission
- ✅ View optimal layouts across all device sizes
- ✅ Interact with hover and focus states for all elements

### 🎯 Form Validation Features

- **Required field validation** for all form inputs
- **Email format validation** with regex pattern matching
- **Avatar upload validation**:
  - File type restrictions (JPG/PNG only)
  - File size limits (500KB maximum)
  - Real-time preview functionality
- **Accessibility-focused error messaging** with icons and clear descriptions

## 🛠️ Built With

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **JavaScript ES6+** - Modern JavaScript features
- **HTML5 Semantic Markup** - Accessible and semantic structure
- **CSS Grid & Flexbox** - Modern layout techniques
- **Mobile-First Design** - Responsive across all devices

## 🎨 Key Components

### TicketForm Component
- **State Management**: Uses React hooks for form data, validation, and UI states
- **File Upload**: Drag-and-drop functionality with file validation
- **Form Validation**: Real-time validation with user-friendly error messages
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

### TicketCard Component
- **Dynamic Content**: Displays personalized ticket with user data
- **Responsive Design**: Adapts beautifully across device sizes
- **Visual Polish**: Professional ticket design with proper spacing and typography

## 🔧 Technical Highlights

### Form Validation Logic
```javascript
const validateForm = () => {
  const newErrors = {}
  if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.'
  if (!formData.email.trim()) {
    newErrors.email = 'Email address is required.'
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = 'Please enter a valid email address.'
  }
  if (!formData.githubUsername.trim()) newErrors.githubUsername = 'GitHub username is required.'
  if (!avatar) newErrors.avatar = 'Please upload your photo.'
  
  setErrors(newErrors)
  return Object.keys(newErrors).length === 0
}
```

### File Upload with Validation
```javascript
const handleFileUpload = (file) => {
  if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
    if (file.size > 500_000) {
      setErrors((prev) => ({ ...prev, avatar: 'File too large (must be under 500KB).' }))
      return
    }
    const reader = new FileReader()
    reader.onload = (e) => {
      setAvatar(e.target.result)
      setErrors((prev) => ({ ...prev, avatar: '' }))
    }
    reader.readAsDataURL(file)
  } else {
    setErrors((prev) => ({ ...prev, avatar: 'Please upload a valid JPG or PNG file.' }))
  }
}
```

## 📱 Responsive Design

The application is built with a mobile-first approach:
- **Mobile**: Optimized for touch interactions and small screens
- **Tablet**: Balanced layout with improved spacing
- **Desktop**: Full-featured experience with hover states

## ♿ Accessibility Features

- **Semantic HTML** structure for screen readers
- **ARIA labels** and descriptions for form elements
- **Keyboard navigation** support throughout the application
- **Focus indicators** for all interactive elements
- **Error message announcements** for screen readers
- **High contrast** color schemes for better visibility

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/RohanKatwal/conference-ticket-generator.git
cd conference-ticket-generator
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
npm run dev
#or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## 🎯 Future Enhancements

- [ ] Add ticket download as PDF functionality
- [ ] Implement social sharing features
- [ ] Add multiple conference template options
- [ ] Integrate with real backend API
- [ ] Add ticket QR code generation
- [ ] Implement user account system
- [ ] Add email confirmation system

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/RohanKatwal/conference-ticket-generator/issues).


## 👨‍💻 Author

**Rohan Katwal**
- Portfolio: [rohankatwal.com.np](https://www.rohankatwal.com.np/)
- GitHub: [@Rohankatwal](https://github.com/RohanKatwal)

## 🙏 Acknowledgments

- [Frontend Mentor](https://www.frontendmentor.io) for providing the design challenge
- The React community for excellent documentation and resources
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [Lucide React](https://lucide.dev) for the beautiful icon set

---

⭐ Star this repository if you found it helpful!