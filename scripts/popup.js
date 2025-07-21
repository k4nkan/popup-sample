// 開くボタンすべてにイベントをつける
document.querySelectorAll('.card').forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;
    const popup = document.getElementById(targetId);
    popup.classList.remove('hide');
  });
});

// 閉じるボタンすべてにイベントをつける
document.querySelectorAll('.close-button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const popup = btn.closest('.popup');
    popup.classList.add('hide');
  });
});
