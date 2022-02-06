import Modal from './modal';
import './gameover-modal.css';

export default () => {
  const modal = Modal();
  modal.container.classList.add('gameover-modal-content');

  modal.setTitle('Game Over!');

  const eMsg = document.createElement('p');
  const playAgainBtn = document.createElement('button');
  playAgainBtn.textContent = 'Play Again';

  modal.content.appendChild(eMsg);
  modal.content.appendChild(playAgainBtn);

  return { ...modal, playAgainBtn, eMsg };
};
