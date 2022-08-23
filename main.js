const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')

const tabActive = $('.tab-item.active');
const line = $('.tabs .line');

line.style.left = tabActive.offsetLeft - 0 + 'px' ;
line.style.width = tabActive.offsetWidth  - 0+ 'px';

tabs.forEach((tab, index) => {
    tab.onclick = function(){
        tabs.forEach((tab) => {
            tab.classList.remove('active');
        })
        this.classList.add('active');
        const tabActive = $('.tab-item.active');
        const line = $('.tabs .line');
        line.style.left = tabActive.offsetLeft - 0 + 'px' ;
        line.style.width = tabActive.offsetWidth  - 0+ 'px';
    }
})