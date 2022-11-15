'use strict'
// 1. Створити сторінку, що показує нумерований список пісень:
let playList = [
{author: "LED ZEPPELIN", song:"STAIRWAY TO HEAVEN"},
{author: "QUEEN", song:"BOHEMIAN RHAPSODY"},
{author: "LYNYRD SKYNYRD", song:"FREE BIRD"},
{author: "DEEP PURPLE", song:"SMOKE ON THE WATER"},
{author: "JIMI HENDRIX", song:"ALL ALONG THE WATCHTOWER"},
{author: "AC/DC", song:"BACK IN BLACK"},
{author: "QUEEN", song:"WE WILL ROCK YOU"},
{author: "METALLICA", song:"ENTER SANDMAN"}
];
const SECTION_1 = document.querySelector('.section-1__container');
const songList = document.createElement('ol');
SECTION_1.append(songList);
playList.forEach(function(item){
    let song = document.createElement('li');
    let songContent = song.innerHTML = `${item.author} - ${item.song}`;
    songList.append(song);
});


// 2. Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. 
// На модальном вікні повинен бути текст і кнопка "Закрити". 
// Спочатку модальне вікно не відображається. 
// При кліку на кнопку "Відкрити" з'являється модальне вікно, 
// на кнопку "Закрити" — зникає.
const SECTION_2 = document.querySelector('.section-2'),
    OPEN = SECTION_2.querySelector('.open'),
    CLOSE = SECTION_2.querySelector('.close');
OPEN.addEventListener('click', function(e){
    SECTION_2.classList.add('section-2--active');
});
CLOSE.addEventListener('click', function(e){
    SECTION_2.classList.remove('section-2--active');
});


// 3. Створити HTML-сторінку зі світлофором і кнопкою, 
// яка перемикає світлофор на наступний колір.
const BLOCK = document.querySelector('.section-3__box'),
    LIGHTS = BLOCK.querySelector('.lights'),
    LIGHTS_ITEM = BLOCK.querySelectorAll('.lights__item'),
    BUTTON = BLOCK.querySelector('.button-lights');
BUTTON.addEventListener('click', function(e){
    for (let item of LIGHTS_ITEM) {
        if (item.matches('[class$="lights__item--active"]')) {
            item.classList.remove('lights__item--active');
            if (item.nextElementSibling) {
                item.nextElementSibling.classList.add('lights__item--active');
                return;
            } else {
                LIGHTS.firstElementChild.classList.add('lights__item--active');
                return;
            }
            
        }
    }
});