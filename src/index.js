import avatar from './avatar.png';
import './index.scss';

var img = new Image();
img.classList.add('avatar');
img.onload = () => {
  const root = document.getElementById('root');
  root.append(img);
};
img.src = avatar;
