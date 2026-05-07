# AI Rules and Tech Stack

## Tech Stack (5‑10 bullet points)
- **React** with **TypeScript** for building the UI.
- **React Router** for client‑side routing (routes are defined in `src/App.tsx`).
- **Tailwind CSS** for styling – all layout, spacing, colors, etc. are expressed with Tailwind utility classes.
- **shadcn/ui** component library (pre‑built UI primitives, Radix UI under the hood).
- **lucide-react** for SVG icons.
- **Vite** (or the default bundler) for fast development builds.
- **ESLint + Prettier** for code quality and consistent formatting.
- **Jest / React Testing Library** (if tests are added) for unit testing.

## Library Usage Rules
1. **Component UI** – Use shadcn/ui components for all UI elements (buttons, dialogs, dropdowns, forms, etc.). Import directly from `@/components/ui/*` or the shadcn path; do **not** recreate these components.
2. **Icons** – Use the `lucide-react` package for icons. Import the needed icon component, e.g., `import { Search } from "lucide-react";`.
3. **Routing** – All routes must be declared in `src/App.tsx` using `react-router-dom`. Pages belong in `src/pages/` and are rendered via `<Route>`.
4. **Styling** – Apply Tailwind CSS classes directly in JSX. Do not write custom CSS files unless absolutely necessary for a third‑party library.
5. **State Management** – Prefer React's built‑in `useState`, `useReducer`, and context APIs. Do not add external state libraries unless the project explicitly requires them.
6. **Data Fetching** – Use the native `fetch` API or a lightweight wrapper like `axios` if already present. Keep data fetching logic close to the component that needs it or in a dedicated `hooks/` folder.
7. **Utility Functions** – Place reusable helpers in `src/lib/` or `src/utils/`. Keep them small and focused; avoid over‑engineering.
8. **Accessibility** – Leverage the accessibility features built into shadcn/ui and Radix UI components. Add `aria-` attributes only when necessary.
9. **Testing** – When tests are added, use Jest with React Testing Library. Follow the existing test conventions in the repo.
10. **Code Quality** – Follow the existing linting rules. Do not introduce new dependencies without a clear need and approval.

These rules ensure consistency, maintainability, and a smooth development experience across the application.