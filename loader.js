// AstraSec Loader - shows "Loading..." and executes cheat

console.log("AstraSec Loader starting...");

// Show loading in console after 1 second
setTimeout(() => {
  console.log("Loading...");
}, 1000);

// Simulate cheat execution after 2 seconds
setTimeout(() => {
  console.log("Cheat loaded successfully!");
  console.log("AstraSec is running your cheat.");
}, 2000);

// Update online counter from parent window if exists
if (window.parent && window.parent.updateOnline) {
  setInterval(() => {
    window.parent.updateOnline();
  }, 30000);
}