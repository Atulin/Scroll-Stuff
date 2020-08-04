const nav: HTMLElement = document.getElementById('nav');

enum Direction {
    Up,
    Down
}

let lastScroll: number = 0;
let direction: Direction = null;

window.addEventListener('scroll', function () {
    let scroll: number = window.scrollY;

    if (Math.abs(lastScroll - scroll) > 10) {

        if (lastScroll - scroll > 0) {
            if (direction !== Direction.Up) {
                direction = Direction.Up;
                nav.classList.remove('small');
            }
        } else {
            if (direction !== Direction.Down) {
                direction = Direction.Down;
                nav.classList.add('small');
            }
        }

        lastScroll = scroll;
    }

});
