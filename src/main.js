//Import global style in the entire application
import '/css/style.css'
// Import the main App component (Svelte's default export from App.svelte)
// @ts-ignore is used here to bypass TypeScript errors if not using TypeScript
import App from './App.svelte'
 
// Initialize the Svelte app by creating a new instance of the App component
// and targeting the HTML element with the ID 'app' (usually found in index.html)
 const app = new App({
  target: document.getElementById('app'),
})
// Export the app instance
// This export is not typically required but can be useful for testing or debugging purposes
 
export default app;
