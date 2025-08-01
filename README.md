# Trend Analyzer UI

A React application for analyzing trends across various topics using AI-powered insights.

## Environment Setup

Before running the application, you need to set up your backend URL:

1. Create a `.env.local` file in the root directory
2. Add your backend URL:
   ```
   REACT_APP_BACKEND_URL=https://your-backend-domain.com
   ```
3. Replace `https://your-backend-domain.com` with your actual hosted backend URL

For local development, you can use:
```
REACT_APP_BACKEND_URL=http://127.0.0.1:8000
```

## Deployment to GitHub Pages

### Prerequisites
- Your code must be pushed to a GitHub repository
- The repository must be public (or you need GitHub Pro for private repos)

### Setup Steps

1. **Update the homepage URL** in `package.json`:
   Replace `your-username` with your actual GitHub username:
   ```json
   "homepage": "https://your-username.github.io/trend-analyzer-ui"
   ```

2. **Set up environment variables for production**:
   Create a `.env.production` file with your production backend URL:
   ```
   REACT_APP_BACKEND_URL=https://your-production-backend.com
   ```

3. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

4. **Configure GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Set Source to "Deploy from a branch"
   - Select the `gh-pages` branch
   - Save the settings

Your app will be available at: `https://your-username.github.io/trend-analyzer-ui`

### Important Notes
- The first deployment may take a few minutes to become available
- Make sure your backend CORS settings allow requests from your GitHub Pages domain
- Update your backend URL in the production environment variable

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
