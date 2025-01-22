if (SERVE_ORIGIN && typeof SERVE_ORIGIN === 'string') {
  new EventSource(`${SERVE_ORIGIN}/esbuild`).addEventListener('change', () => location.reload());
}
