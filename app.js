document.getElementById('btn').addEventListener('click', () => {
  const el = document.getElementById('status');
  el.textContent = 'You clicked! CI will redeploy on your next commit.';
});
