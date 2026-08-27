const infos = [
  {
    image: 'main-img/avatar-w.jpg',
    img: 'main-img/avatar.jpg',
    name: 'Avatar Aang',
    year: '2026',
    type: 'Action'
  },{
    image: 'main-img/desertwarrior-w.jpg',
    img: 'main-img/desertwarrior.jpg',
    name: 'Desert Warrior',
    year: '2026',
    type: 'Action'
  },{
    image: 'main-img/from-w.jpg',
    img: 'main-img/from.jpg',
    name: 'From',
    year: '2026',
    type: 'Drama'
  },{
    image: 'main-img/fuze-w.jpg',
    img: 'main-img/fuze.jpg',
    name: 'Fuze',
    year: '2026',
    type: 'Action'
  },{
    image: 'main-img/jackryan-w.jpg',
    img: 'main-img/jackryan.jpg',
    name: "Tom Clancy's Jack Ryan",
    year: '2026',
    type: 'Action'
  },{
    image: 'main-img/nemesis-w.jpg',
    img: 'main-img/nemesis.jpg',
    name: 'Nemesis',
    year: '2026',
    type: 'Action'
  },{
    image: 'main-img/normal-w.jpg',
    img: 'main-img/normal.jpg',
    name: 'Normal',
    year: '2026',
    type: 'Action'
  },{
    image: 'main-img/offcampus-w.jpg',
    img: 'main-img/offcampus.jpg',
    name: 'Off Campus',
    year: '2026',
    type: 'Drama'
  },{
    image: 'main-img/overmydeadbody-w.jpg',
    img: 'main-img/overmydeadbody.jpg',
    name: 'Over My Dead Body',
    year: '2026',
    type: 'Action'
  },{
    image: 'main-img/spide-noir-w.jpg',
    img: 'main-img/spide-noir.jpg',
    name: 'Spider-Man Noir',
    year: '2026',
    type: 'Action'
  },{
    image: 'main-img/swapped-w.jpg',
    img: 'main-img/swapped.jpg',
    name: 'Swapped',
    year: '2026',
    type: 'Animation'
  },{
    image: 'main-img/theboys-w.jpg',
    img: 'main-img/theboys.jpg',
    name: 'The Boys',
    year: '2026',
    type: 'Action'
  },{
    image: 'main-img/mummy-w.jpg',
    img: 'main-img/themum.jpg',
    name: "Lee Cronin's The Mummy",
    year: '2026',
    type: 'Action'
  },{
    image: 'main-img/smackdown-w.jpg',
    img: 'main-img/smackdown.jpg',
    name: 'SmackDown',
    year: '2026',
    type: 'Wrestling'
  },{
    image: 'main-img/prisoner-w.jpg',
    img: 'main-img/prisoner.jpg',
    name: 'Prisoner',
    year: '2026',
    type: 'Action'
  },{
    image: 'main-img/avatar-wayofwater-w.jpg',
    img: 'main-img/avatar-wayofwater.jpg',
    name: 'Avatar Way Of Water',
    year: '2026',
    type: 'Action'
  }
];

export function generateAboutMovie() {
  let html = "";

  infos.forEach((info) => {
    html += `
      <div class="about-movie-section">

            <div class="about-movie-section__img">
              <img src="${info.img}" alt="">
            </div>
            <div class="about-movie-section__name">
              <p>${info.name}</p>
              <p class="about-movie-section__name--info">TV | ${info.year} | ${info.type}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="about-movie-section__download-icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>

            </div>
    `;
    
  });

  document.querySelector('.js-movie-container').innerHTML = html;

}

setInterval(() => {
  const first = infos.shift();
  infos.push(first)
  
  document.querySelector('.js-movie-name').innerText = `${infos[0].name}`;

  document.querySelector('.js-header').style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${infos[0].image})`;
  

  generateAboutMovie()


}, 5000)

export function hideNav() {
  const navBarIcon = document.querySelector('.js-navbar');
  const navBar = document.querySelector('.js-nav');

  navBar.style.display = 'none';

  navBarIcon.addEventListener('click', () => {
  navBar.style.display === 'none' ? navBar.style.display = 'block' : navBar.style.display = 'none';

   });

}
