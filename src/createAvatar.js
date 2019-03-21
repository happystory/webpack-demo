import avatar from './avatar.png';
import style from './index.scss';

function createAvatar() {
  var img = new Image();
  img.classList.add(style.avatar);
  img.onload = () => {
    const root = document.getElementById('root');
    root.append(img);

    root.innerHTML = '<div class="gulu i-download"></div>'
  };
  img.src = avatar;
}

export default createAvatar;
