const player1 = {
    name: 'Jon',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['M4A1-S', 'AWP', 'P250', ],
    attack: () => console.log(this.name + 'Fight...')
};

const player2 = {
    name: 'Chan',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['AK-47', 'MAC-10', 'Glock 17', ],
    attack: () => console.log(this.name + 'Fight...')
};

const createPlayer = (classNamePlayer, name, hp, src) => {
    const $arenas = document.querySelector('div.arenas');
    const $player1 = document.createElement('div');
    $player1.classList.add(classNamePlayer)
    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar')
    const $character = document.createElement('div');
    $character.classList.add('character')
    const $life = document.createElement('div');
    $life.classList.add('life')
    const $name = document.createElement('div');
    $name.classList.add('name')
    const $img = document.createElement('img');
    $img.src = src;

    $arenas.appendChild($player1)
    $player1.appendChild($progressbar);
    $player1.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
}

createPlayer('player1', player1.name, 50, player1.img);
createPlayer('player2', player2.name, 80, player2.img);