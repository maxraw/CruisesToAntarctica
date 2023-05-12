import {PIN_LOCATION} from './map-initials';
const mapImage = document.querySelector('.contact__map-image');

mapImage.classList.remove('no-js');

let apiLoaded = false;

const createMap = ({id, initials, placemark}) => {
  const map = new window.ymaps.Map(id, initials);
  map.geoObjects.add(new window.ymaps.Placemark(PIN_LOCATION, ...placemark));
  // map.behaviors.disable('scrollZoom');
};

const initMap = (mapData) => {
  if (apiLoaded) {
    createMap(mapData);
    return;
  }

  const scriptElement = document.createElement('script');
  scriptElement.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
  scriptElement.setAttribute('async', '');
  scriptElement.addEventListener('load', () => {
    window.ymaps.ready(() => {
      createMap(mapData);
      apiLoaded = true;
    });
  });
  document.body.append(scriptElement);
};

export {initMap};
