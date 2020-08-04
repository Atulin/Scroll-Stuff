const text: HTMLElement = document.getElementById('text');
const progress: HTMLElement = document.getElementById('progress');

const initialDiff: number = (text.getBoundingClientRect().bottom + window.scrollY) - (window.innerHeight / 2);
const tolerance: number = 5.0;

enum Pos {
    Start,
    End
}

let position: Pos = Pos.Start;

window.addEventListener('scroll', function () {
    let windowMid:  number = window.innerHeight / 2;
    let textBottom: number = text.getBoundingClientRect().bottom;
    let scrollPercent: number = (1 - ((textBottom - windowMid) / initialDiff)) * 100;
    let clampedPercent: number = Math.min(Math.max(scrollPercent, 0), 100)

    progress.style.setProperty('width', `${clampedPercent}%`);

    if (position !== Pos.End && clampedPercent > 100 - tolerance) {
        onReachEnd();
        position = Pos.End;
    }
    if (position !== Pos.Start && clampedPercent < tolerance) {
        onReachStart();
        position = Pos.Start;
    }
})

function onReachStart() : void
{
    console.log('START');
}

function onReachEnd() : void
{
    console.log('END');
}
