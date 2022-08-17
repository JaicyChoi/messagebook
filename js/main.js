const body = document.querySelector('body');
const view_2022 = document.querySelector('.view_2022');
const view_2021 = document.querySelector('.view_2021');
const y2022 = document.querySelector('.y2022');
const y2021 = document.querySelector('.y2021');
const y2022_month = document.querySelector('.y2022_month');
const y2021_month = document.querySelector('.y2021_month');
const y2022_month_li = document.querySelectorAll('.y2022_month>li');
const y2021_month_li = document.querySelectorAll('.y2021_month>li');
const message_wrap = document.querySelector('.message_wrap');
const content = document.querySelector('.content');
const button = document.querySelector('button');
const header = document.querySelector('header');
const mobile_menu = document.querySelector('.mobile_menu');
const close_btn_wrap = document.querySelector('.close_btn_wrap');
const set_timeline = document.querySelector('.set_timeline');
const set_timeline_bg = document.querySelector('.set_timeline_bg');

button.addEventListener('click', () => {
    header.scrollIntoView({behavior:'smooth'});
});

//search index of month, year
let year = null;
let index = null;
let BACKUP_visitor = null;
let BACKUP_owner = null;

//show 2022 year messages
y2022_month_li.forEach((li, index) => {
    li.onclick = () => {
        year = li.parentNode.previousSibling.previousSibling.innerHTML;
        message_wrap.innerHTML = '';
        show_messages(year, index);
        show_timeline(year, index);
        remove_timeline();
    }
});
//show 2021 year messages
y2021_month_li.forEach((li, index) => {
    li.onclick = () => {
        year = li.parentNode.previousSibling.previousSibling.innerHTML;
        message_wrap.innerHTML = '';
        show_messages(year, index);
        show_timeline(year, index);
        remove_timeline();
    }
});

//show latest month messages
year = '2022';
index = 0;
show_messages(year, index);
show_timeline(year, index);

function show_timeline(year, index){
    y2022_month_li.forEach( li => { li.children[0].classList.remove('show')});
    y2021_month_li.forEach( li => { li.children[0].classList.remove('show')});
    if( year === '2022' ){
        y2022_month.classList.add('show');
        y2022_month_li[index].children[0].classList.add('show');
    }
    else if( year === '2021' ){
        y2021_month.classList.add('show');
        y2021_month_li[index].children[0].classList.add('show');
    }
}

function show_messages(year, index){
    if( year === '2022' ){
        BACKUP_visitor = Y2022_visitor;
        BACKUP_owner = Y2022_owner;
    }
    else if( year === '2021' ){
        BACKUP_visitor = Y2021_visitor;
        BACKUP_owner = Y2021_owner;
    }

    for( let i = 0 ; i < BACKUP_visitor[index].length ; i++ ){
        let flip = document.createElement('div');
        let card = document.createElement('div');
        let message_card_wrap_front = document.createElement('div');
        let message_card_front = document.createElement('div');
        let message_front = document.createElement('p');
        let visitor = document.createElement('p');
        let date_front = document.createElement('p');
    
        let message_card_wrap_back = document.createElement('div');
        let message_card_back = document.createElement('div');
        let message_back = document.createElement('p');
        let owner = document.createElement('p');
        let date_back = document.createElement('p');
    
        flip.classList.add('flip');

        delay_sec = i + '';
        if( i < 10 )
            flip.style.animationDelay = '0.' + i + 's';
        else if( i >= 10 && i < 20 )
            flip.style.animationDelay = '1.' + delay_sec.slice(1,2) + 's';
        else if( i >= 20 && i < 30 )
            flip.style.animationDelay = '2.' + delay_sec.slice(1,2) + 's';
        else if( i >= 30 && i < 40 )
            flip.style.animationDelay = '3.' + delay_sec.slice(1,2) + 's';
        else if( i >= 40 && i < 50 )
            flip.style.animationDelay = '4.' + delay_sec.slice(1,2) + 's';
        else if( i >= 50 && i < 60 )
            flip.style.animationDelay = '5.' + delay_sec.slice(1,2) + 's';

        card.classList.add('card');
        message_card_wrap_front.classList.add('message_card_wrap_front');
        message_card_front.classList.add('message_card');
        message_front.classList.add('message');
        visitor.classList.add('visitor');
        date_front.classList.add('date');
    
        message_card_wrap_back.classList.add('message_card_wrap_back');
        message_card_back.classList.add('message_card');
        message_back.classList.add('message');
        owner.classList.add('owner');
        date_back.classList.add('date');
    
        message_front.innerHTML = BACKUP_visitor[index][i].message;
        visitor.innerHTML = BACKUP_visitor[index][i].visitor;
        date_front.innerHTML = BACKUP_visitor[index][i].date;
    
        if( BACKUP_owner[index][i].message === '' ){
            message_back.innerHTML = '등록된 답변이 없습니다.';
            owner.innerHTML = '';
        }
        else{
            message_back.innerHTML = '⭐ '+ BACKUP_owner[index][i].message;
            owner.innerHTML = '그라하티아';
        }
        date_back.innerHTML = BACKUP_owner[index][i].date;
    
        message_card_front.appendChild(message_front);
        message_card_front.appendChild(visitor);
        message_card_front.appendChild(date_front);
    
        message_card_back.appendChild(message_back);
        message_card_back.appendChild(owner);
        message_card_back.appendChild(date_back);
    
        message_card_wrap_front.appendChild(message_card_front);
        message_card_wrap_back.appendChild(message_card_back);
    
        card.appendChild(message_card_wrap_front);
        card.appendChild(message_card_wrap_back);
        
        flip.appendChild(card);
    
        message_wrap.appendChild(flip);
    }
}

function remove_timeline(){
    set_timeline.classList.remove('show');
    set_timeline_bg.classList.remove('show');
    body.classList.remove('srolllock');
}

//timeline menu action
y2022.addEventListener('mouseenter', () => {
    if( year === '2021' )
        y2021_month.classList.remove('show');

    y2022_month.classList.add('show');
});
y2021.addEventListener('mouseenter', () => {
    if( year === '2022' )
        y2022_month.classList.remove('show');

    y2021_month.classList.add('show');
});

view_2022.addEventListener('mouseleave', () => {
    if( year === '2021' ){
        y2022_month.classList.remove('show');
        y2021_month.classList.add('show');
    }
});
view_2021.addEventListener('mouseleave', () => {
    if( year === '2022' ){
        y2021_month.classList.remove('show');
        y2022_month.classList.add('show');
    }
});

//mobile menu controll
mobile_menu.addEventListener('click', () => {
    body.classList.add('srolllock');
    set_timeline_bg.classList.add('show');
    set_timeline.classList.add('show');
});

window.addEventListener('scroll', () => {
    let scroll_height = window.pageYOffset;

    if( scroll_height >= 400 )
        mobile_menu.classList.add('show_bg');
    else if( scroll_height < 400 )
        mobile_menu.classList.remove('show_bg');
});

close_btn_wrap.addEventListener('click', () => {
    if( window.innerWidth <= 480 ){
        remove_timeline();
    }
});