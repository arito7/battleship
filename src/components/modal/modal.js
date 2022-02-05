import './modal.css';

export default () => {
  const container = document.createElement('div');
  container.classList.add('modal');

  const content = document.createElement('div');
  content.classList.add('modal-content', 'shadow');

  container.appendChild(content);

  function setTitle(title) {
    const mTitle = document.createElement('h2');
    mTitle.textContent = title;
    content.appendChild(mTitle);
  }

  function show() {
    container.style.display = 'grid';
  }

  function hide() {
    container.style.display = 'none';
  }

  return { container, content, setTitle, show, hide };
};
