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
    }
});
//show 2021 year messages
y2021_month_li.forEach((li, index) => {
    li.onclick = () => {
        year = li.parentNode.previousSibling.previousSibling.innerHTML;
        message_wrap.innerHTML = '';
        show_messages(year, index);
        show_timeline(year, index);
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