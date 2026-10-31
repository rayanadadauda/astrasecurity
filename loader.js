// AstraSec Loader
// Shows "Loading..." and handles cheat execution

console.log("AstraSec Loader initializing...");

// Main loading sequence
setTimeout(() => {
  console.log("Loading...");
  console.log("Cheat loaded successfully into memory.");
  console.log("AstraSec is now running your cheat.");
  
  // Update online user counter
  if (window.parent && window.parent.updateOnline) {
    window.parent.updateOnline();
  }
  
}, 1000);

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { name: 'AstraSec Loader', version: '2.0', simulateLoad: () => console.log('Load simulated') };
}