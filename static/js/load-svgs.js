document.addEventListener('DOMContentLoaded', function() {
  const svgContainers = document.querySelectorAll('.svg-container');

  svgContainers.forEach(container => {
    const iconPath = container.getAttribute('data-icon');
    fetch(iconPath)
      .then(response => response.text())
      .then(svg => {
        container.innerHTML = svg;
        const svgElement = container.querySelector('svg');
        if (svgElement) {
          svgElement.style.fill = 'var(--icon-color)';
        }
      })
      .catch(error => console.error('Error loading SVG:', error));
  });
});