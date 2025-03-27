# Fullstack ELD App - Frontend

This is the frontend of the Fullstack ELD (Electronic Logging Device) application, built with **React**, **TypeScript**, and **Vite**. It includes modern tools and libraries such as **Tailwind CSS**, **Axios**, and **React Router** for a seamless development experience.

## Features

- **React**: Component-based UI development.
- **TypeScript**: Strongly typed JavaScript for better code quality.
- **Vite**: Fast build tool with hot module replacement (HMR).
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: Simplified HTTP requests to the backend.
- **React Router**: Declarative routing for React applications.
- **Zustand**: State management for React.

## Project Structure

The project is organized as follows:

```
frontend/
├── src/
│   ├── api/                # API calls (e.g., auth, logs, trips)
│   ├── components/         # Reusable React components
│   │   ├── molecules/      # Smaller reusable components
│   │   ├── pages/          # Page-level components
│   │   ├── templates/      # Layout components
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions (e.g., helpers)
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   ├── index.css           # Global CSS styles
├── public/                 # Static assets
├── .env                    # Environment variables
├── vite.config.ts          # Vite configuration
├── package.json            # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (v16 or higher recommended).
- **npm**: Comes with Node.js or use `yarn` if preferred.

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-repo/fullstack-eld-app.git
   cd frontend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root of the `frontend` directory and add the following:

   ```env
   VITE_BASE_URL=http://localhost:8000
   ```

### Running the Development Server

Start the development server:

```sh
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173).

### Building for Production

To build the application for production:

```sh
npm run build
```

The production-ready files will be in the `dist/` directory.

### Linting

To lint the codebase:

```sh
npm run lint
```

## Key Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code quality issues.

## Tools and Libraries

- **React**: Component-based UI library.
- **TypeScript**: Typed JavaScript for better code quality.
- **Vite**: Fast build tool with HMR.
- **Tailwind CSS**: Utility-first CSS framework.
- **Axios**: HTTP client for API requests.
- **React Router**: Declarative routing for React applications.
- **Zustand**: Lightweight state management.

## Environment Variables

The following environment variables are used in the project:

- `VITE_BASE_URL`: The base URL for API requests (e.g., `http://localhost:8000`).

## Folder Details

### `src/api/`

Contains API calls for interacting with the backend. Example:

- `auth.ts`: Handles authentication-related API calls.
- `logs.ts`: Handles log-related API calls.
- `trips.ts`: Handles trip-related API calls.

### `src/components/`

Contains reusable React components:

- `molecules/`: Smaller reusable components (e.g., `AuthForm`).
- `pages/`: Page-level components (e.g., `Login`, `Home`).
- `templates/`: Layout components (e.g., `MainLayout`).

### `src/utils/`

Contains utility functions such as `helpers.tsx` for formatting dates or capitalizing text.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your branch.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
