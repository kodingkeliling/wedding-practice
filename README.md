# Undangan Pernikahan Kalida & Jamjam

A beautiful, modern wedding invitation website built with Next.js 13, TypeScript, and Tailwind CSS. This project features a responsive design with smooth animations and integrates with Google Apps Script for data storage.

## 🎨 Features

- **Beautiful Design**: Elegant wedding theme with red, pink, black, and white color scheme
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **RSVP System**: Interactive form for guests to confirm attendance
- **Message Board**: Display comments and messages from guests
- **Google Apps Script Integration**: Backend data storage using Google Sheets
- **TypeScript**: Full type safety and better development experience
- **Vercel Ready**: Optimized for deployment on Vercel

## 🚀 Tech Stack

- **Frontend**: Next.js 13, React 18, TypeScript
- **Styling**: Tailwind CSS v3, Custom CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Next.js API Routes
- **Data Storage**: Google Apps Script + Google Sheets
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

- Node.js 16.20.2 or later
- npm or yarn package manager
- Google Apps Script setup (for data storage)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd undangan-pernikahan-kalida-jamjam
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Then edit `.env.local` and add your Google Apps Script URL:
   ```env
   NEXT_PUBLIC_SPREADSHEET_API_URL=
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Google Apps Script URL for wedding messages
NEXT_PUBLIC_SPREADSHEET_API_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

### Wedding Details
Edit the wedding information in `src/config/wedding.ts`:

```typescript
export const weddingDetails: WeddingDetails = {
  brideName: 'Kalida',
  groomName: 'Jamjam',
  weddingDate: 'Sabtu, 15 Februari 2025',
  weddingTime: '09:00 WIB',
  venue: 'Masjid Al-Hikmah',
  address: 'Jl. Raya Jakarta No. 123, Jakarta Selatan',
  description: 'Dengan sukacita kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami.',
  coverImage: '/images/wedding-cover.jpg',
};
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Hero.tsx          # Hero section
│   ├── WeddingDetails.tsx # Wedding information
│   ├── Messages.tsx       # Message board
│   ├── RSVP.tsx          # RSVP form
│   └── Footer.tsx         # Footer
├── config/               # Configuration files
│   └── wedding.ts        # Wedding details
├── lib/                  # Utility functions
│   └── api.ts           # API functions
└── types/               # TypeScript types
    └── index.ts         # Type definitions
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Add environment variables in Vercel dashboard:
     - `NEXT_PUBLIC_SPREADSHEET_API_URL`: Your Google Apps Script URL
   - Vercel will automatically detect Next.js and deploy
   - Your site will be available at `https://your-project.vercel.app`

### Environment Variables for Production
For production deployment, make sure to set these environment variables:

```env
NEXT_PUBLIC_SPREADSHEET_API_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

## 🔧 Customization

### Colors
Update the color scheme in `src/config/wedding.ts`:

```typescript
export const weddingColors = {
  primary: '#DC2626',    // Red
  secondary: '#EC4899',  // Pink
  accent: '#000000',     // Black
  background: '#FFFFFF', // White
  // ... more colors
};
```

### Fonts
The project uses Google Fonts. Update in `src/app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🔒 Security

- Input validation on all forms
- CORS protection for API routes
- TypeScript for type safety
- Environment variable protection

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library
- [Google Apps Script](https://developers.google.com/apps-script) - Backend integration

## 📞 Support

For support and questions, please contact:
- Email: kalida.jamjam@email.com
- Phone: +62 812-3456-7890

---

Made with ❤️ for Kalida & Jamjam's special day
