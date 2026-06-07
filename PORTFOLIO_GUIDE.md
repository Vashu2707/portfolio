# PlayStation 4 Inspired Portfolio

A stunning, interactive portfolio website inspired by the PlayStation 4 home screen. Built with Next.js, Three.js, TypeScript, and modern web technologies.

## 🎮 Features Implemented

### Phase 1-4: Foundation ✅
- ✅ Next.js 15 with TypeScript and TailwindCSS
- ✅ All dependencies installed (Three.js, Framer Motion, GSAP, Zustand, etc.)
- ✅ Organized folder structure
- ✅ Global state management with Zustand

### Phase 5-8: 3D Background Environment ✅
- ✅ React Three Fiber Canvas setup with proper config
- ✅ Aurora shader background (PS4-style animated blue gradient)
- ✅ Particle system with InstancedMesh for performance
- ✅ Floating 3D symbols with parallax effects

### Phase 9-15: Dashboard & UI ✅
- ✅ Responsive tile navigation system (6 tiles)
- ✅ Project showcase section
- ✅ Skills galaxy visualization
- ✅ Trophy room with achievement system
- ✅ Resume section
- ✅ Contact information card
- ✅ Framer Motion animations throughout
- ✅ Keyboard navigation (Arrow keys)
- ✅ Mouse/touch support

### Phase 16: Sound Effects 🔄
- Audio system ready with Howler library installed
- Sound effects can be added for:
  - Tile hover/focus
  - Tile selection
  - Trophy unlock
  - Background ambience

### Phase 17: Responsive Design 🔄
- Responsive grid layout (1 col mobile, 2 col tablet, 3-6 cols desktop)
- Mobile-optimized navigation
- Reduced particle count on lower-end devices

### Phase 18-20: Performance & SEO ⏳
- Metadata configured
- Code splitting with dynamic imports
- Image optimization ready

### Phase 21: Deployment 📦
- Ready to deploy to Vercel

## 🛠️ Tech Stack

```
Frontend:
- Next.js 15.3.8
- React 19
- TypeScript 5
- TailwindCSS 4

3D & Graphics:
- Three.js
- React Three Fiber
- Drei

State Management:
- Zustand

Animations:
- Framer Motion
- GSAP

Audio:
- Howler.js

UI Components:
- Lucide React (icons)

Development:
- ESLint
- Node 18+
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with 3D canvas
│   ├── page.tsx                # Home page with navigation
│   ├── components/             # Page-specific components
│   │   ├── Profile.tsx
│   │   ├── ProjectsView.tsx
│   │   ├── SkillsView.tsx
│   │   ├── TrophiesView.tsx
│   │   ├── ResumeView.tsx
│   │   └── ContactView.tsx
│   ├── globals.css
│   └── [other routes]/
│
├── components/
│   ├── dashboard/              # Dashboard system
│   │   ├── Dashboard.tsx
│   │   ├── Navigation.tsx
│   │   └── DashboardTile.tsx
│   ├── three/                  # 3D components
│   │   ├── Scene.tsx
│   │   ├── SceneWrapper.tsx
│   │   ├── Aurora.tsx
│   │   ├── Particles.tsx
│   │   └── FloatingSymbols.tsx
│   ├── animations/             # Animation components
│   └── ui/                     # Reusable UI components
│
├── data/
│   ├── projects.ts             # Project data
│   ├── skills.ts               # Skills data
│   └── trophies.ts             # Trophy data
│
├── store/
│   └── dashboardStore.ts       # Zustand state management
│
├── hooks/                      # Custom React hooks
├── lib/                        # Utility functions
└── public/                     # Static assets
```

## 🚀 Getting Started

### Installation

```bash
# Navigate to project directory
cd portfolio

# Install dependencies (already done)
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see your portfolio!

## 🎯 Navigation

- **Keyboard**: Use arrow keys (← →) to navigate tiles
- **Mouse**: Click on tiles to select
- **Touch**: Tap tiles on mobile devices

## 🎨 Customization

### Update Portfolio Data

Edit these files to personalize your portfolio:

- `src/data/projects.ts` - Add/modify your projects
- `src/data/skills.ts` - Update your skills
- `src/data/trophies.ts` - Add achievements/trophies

### Modify Colors & Styling

- Tile gradients in `src/components/dashboard/Navigation.tsx`
- 3D scene in `src/components/three/Scene.tsx`
- Global styles in `src/app/globals.css`

### Add More Tiles

1. Add tile data to the TILES array in `Navigation.tsx`
2. Create corresponding view component in `src/app/components/`
3. Add routing logic in `Dashboard.tsx`

## 🎬 Animation System

### Framer Motion
- Tile scale/opacity animations
- Page entrance/exit animations
- Smooth transitions between states

### GSAP (Ready for advanced animations)
- Camera movements
- Complex timelines
- Intro sequences

### Three.js
- Aurora shader effects
- Particle animation
- Symbol rotation and parallax

## 🔊 Sound Effects (Ready to Implement)

Audio files can be added to `public/sounds/`:
- `tick.wav` - Tile hover
- `whoosh.wav` - Tile selection
- `achievement.wav` - Trophy unlock
- `ambient-loop.wav` - Background music

Add to components using Howler:
```typescript
import { Howl } from 'howler';

const sound = new Howl({ src: ['/sounds/tick.wav'] });
sound.play();
```

## 📊 State Management

Using Zustand store (`src/store/dashboardStore.ts`):

```typescript
// In any component
import { useDashboardStore } from '@/store/dashboardStore';

const { activeTile, setActiveTile, currentPage, setCurrentPage } = useDashboardStore();
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (1 column, vertical carousel)
- **Tablet**: 640px - 1024px (2-3 columns)
- **Desktop**: > 1024px (6 columns, horizontal scroll)

## ♿ Accessibility

- ✅ Keyboard navigation support
- ✅ Focus indicators on tiles
- ✅ Semantic HTML
- ✅ ARIA labels ready
- ✅ Reduced motion support in Zustand store

## 🚀 Deployment to Vercel

```bash
# Push to GitHub
git add .
git commit -m "Initial PS4 portfolio commit"
git push origin main

# Deploy via Vercel Dashboard
# Or use Vercel CLI
vercel deploy
```

## 📈 Performance Optimization

### Implemented
- ✅ Dynamic imports for 3D scenes
- ✅ InstancedMesh for particles
- ✅ Device-based particle count adjustment
- ✅ Lazy loading of components

### Next Steps
- Image optimization with next/image
- GLTF model compression
- WebP/AVIF image formats
- Code splitting optimization

## 🎮 Future Enhancements

- AI Portfolio Assistant
- Voice navigation
- WebGPU effects
- Multiplayer visitor presence
- Custom theme selector
- Project filtering
- Skills galaxy 3D visualization
- Achievement unlock animations

## 📝 Development Guide

### Adding a New Feature

1. **Create the component** in appropriate folder
2. **Add state** to Zustand if needed
3. **Add animations** with Framer Motion
4. **Test responsiveness** across breakpoints
5. **Optimize performance** if needed

### Code Style

- Use TypeScript for type safety
- Follow React hooks best practices
- Use 'use client' directive for client components
- Keep components modular and reusable

## 🐛 Troubleshooting

### Three.js Canvas Not Rendering
- Ensure `Scene` is wrapped in `SceneWrapper` (client component)
- Check browser console for WebGL errors
- Verify hardware acceleration is enabled

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npm run build`

### Performance Issues
- Reduce particle count in `Particles.tsx`
- Disable Aurora animations on mobile
- Profile using Chrome DevTools

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Three.js Docs](https://threejs.org/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Framer Motion](https://www.framer.com/motion/)
- [TailwindCSS](https://tailwindcss.com)
- [Zustand](https://github.com/pmndrs/zustand)

## 📄 License

Your portfolio, your license!

---

**Status**: ✅ Foundation Complete - Ready for customization and deployment

**Last Updated**: June 7, 2026

**Next Steps**:
1. Customize portfolio data in `/src/data/`
2. Add personal projects and achievements
3. Add sound effects (optional)
4. Deploy to Vercel
