// Keep browser behavior
document.getElementById('btn').addEventListener('click', () => {
  const el = document.getElementById('status');
  el.textContent = 'You clicked! CI will redeploy on your next commit.';
});

// Import only when running in Node (Jest), ignored by browsers not using modules
// This pattern keeps things simple for the assignment.
