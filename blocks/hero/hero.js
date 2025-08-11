export default function decorate(block) {
  block.style.backgroundColor = '#f0f0f0';
  block.style.padding = '20px';
  const title = block.querySelector('h1');
  if (title) {
    title.style.color = '#ff6600';
  }
}
