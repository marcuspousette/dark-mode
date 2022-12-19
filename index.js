window.onload = () => {
  document.querySelector('#toggle-button').addEventListener('click', toggle);

  const body = document.querySelector('body');
  const gradient = document.querySelector('.background-gradient');
  const logo = document.querySelector('.logo');
  const portrait = document.querySelector('.portrait');
  const textDay = document.querySelector('.dark-mode-day');
  const textNight = document.querySelector('.dark-mode-night');
  const headline = document.querySelector('#headline');

  function toggle(event) {
    if (event.target.checked) {
      goDark();
    } else {
      goLight();
    }
  }

  function goDark() {
    body.style.backgroundImage =
      'linear-gradient(180deg,#10091D 0%,#28193D 100%)';
    body.style.color = 'white';
    gradient.setAttribute('src', '/images/dark-bg.png');
    logo.setAttribute('src', '/images/logo-light.png');
    portrait.style.filter = 'brightness(0.7) grayscale(1)';
    textDay.style.color = '#ffffff4d';
    textNight.style.color = 'white';
    headline.innerText = 'Dark';
  }

  function goLight() {
    body.style.backgroundImage =
      'linear-gradient(180deg,#E7F0F8 0%,#ffffff 100%)';
    body.style.color = '#262626';
    gradient.setAttribute('src', '/images/light-bg.png');
    logo.setAttribute('src', '/images/logo-dark.png');
    portrait.style.filter = 'unset';
    textDay.style.color = '#262626';
    textNight.style.color = '#2626268d';
    headline.innerText = 'Light';
  }
};
