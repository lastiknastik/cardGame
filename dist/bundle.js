/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
function initApp() {
    const app = {
        state: {},
        cards: [
            {
                type: 'diamonds',
                rank: '6',
                uri: './static/img/cards/6 бубны.svg',
            },
            {
                type: 'clubs',
                rank: '6',
                uri: './static/img/cards/6 крести.svg',
            },
            {
                type: 'spades',
                rank: '6',
                uri: './static/img/cards/6 пики.svg',
            },
            {
                type: 'hearts',
                rank: '6',
                uri: './static/img/cards/6 черви.svg',
            },
            {
                type: 'diamonds',
                rank: '7',
                uri: './static/img/cards/7 бубны.svg',
            },
            {
                type: 'clubs',
                rank: '7',
                uri: './static/img/cards/7 крести.svg',
            },
            {
                type: 'spades',
                rank: '7',
                uri: './static/img/cards/7 пики.svg',
            },
            {
                type: 'hearts',
                rank: '7',
                uri: './static/img/cards/7 черви.svg',
            },
            {
                type: 'diamonds',
                rank: '8',
                uri: './static/img/cards/8 бубны.svg',
            },
            {
                type: 'clubs',
                rank: '8',
                uri: './static/img/cards/8 крести.svg',
            },
            {
                type: 'spades',
                rank: '8',
                uri: './static/img/cards/8 пики.svg',
            },
            {
                type: 'hearts',
                rank: '8',
                uri: './static/img/cards/8 черви.svg',
            },
            {
                type: 'diamonds',
                rank: '9',
                uri: './static/img/cards/9 бубны.svg',
            },
            {
                type: 'clubs',
                rank: '9',
                uri: './static/img/cards/9 крести.svg',
            },
            {
                type: 'spades',
                rank: '9',
                uri: './static/img/cards/9 пики.svg',
            },
            {
                type: 'hearts',
                rank: '9',
                uri: './static/img/cards/9 черви.svg',
            },
            {
                type: 'diamonds',
                rank: '6',
                uri: './static/img/cards/10 бубны.svg',
            },
            {
                type: 'clubs',
                rank: '6',
                uri: './static/img/cards/10 крести.svg',
            },
            {
                type: 'spades',
                rank: '10',
                uri: './static/img/cards/10 пики.svg',
            },
            {
                type: 'hearts',
                rank: '10',
                uri: './static/img/cards/10 черви.svg',
            },
            {
                type: 'diamonds',
                rank: 'jack',
                uri: './static/img/cards/валет бубны.svg',
            },
            {
                type: 'clubs',
                rank: 'jack',
                uri: './static/img/cards/валет крести.svg',
            },
            {
                type: 'spades',
                rank: 'jack',
                uri: './static/img/cards/валет пики.svg',
            },
            {
                type: 'hearts',
                rank: 'jack',
                uri: './static/img/cards/валет черви.svg',
            },
            {
                type: 'diamonds',
                rank: 'queen',
                uri: './static/img/cards/дама бубны.svg',
            },
            {
                type: 'clubs',
                rank: 'queen',
                uri: './static/img/cards/дама крести.svg',
            },
            {
                type: 'spades',
                rank: 'queen',
                uri: './static/img/cards/дама пики.svg',
            },
            {
                type: 'hearts',
                rank: 'queen',
                uri: './static/img/cards/дама черви.svg',
            },
            {
                type: 'diamonds',
                rank: 'king',
                uri: './static/img/cards/король бубны.svg',
            },
            {
                type: 'clubs',
                rank: 'king',
                uri: './static/img/cards/король крести.svg',
            },
            {
                type: 'spades',
                rank: 'king',
                uri: './static/img/cards/король пики.svg',
            },
            {
                type: 'hearts',
                rank: 'king',
                uri: './static/img/cards/король черви.svg',
            },
            {
                type: 'diamonds',
                rank: 'ace',
                uri: './static/img/cards/туз бубны.svg',
            },
            {
                type: 'clubs',
                rank: 'ace',
                uri: './static/img/cards/туз крести.svg',
            },
            {
                type: 'spades',
                rank: 'ace',
                uri: './static/img/cards/туз пики.svg',
            },
            {
                type: 'hearts',
                rank: 'ace',
                uri: './static/img/cards/туз черви.svg',
            },
        ],
        screens: {
            mainMenu: function () {
                const appBlock = document.querySelector('.app');

                appBlock.appendChild(
                    templateEngine({
                        tag: 'div',
                        cls: 'main-menu-title',
                        content: 'Выбери сложность',
                    })
                );

                appBlock.appendChild(
                    templateEngine({
                        tag: 'form',
                        content: [
                            {
                                tag: 'div',
                                cls: 'main-menu-levels',
                                content: [
                                    {
                                        tag: 'div',
                                        cls: [
                                            'main-menu-levels-item',
                                            'main-menu-levels-item-regular',
                                        ],
                                        content: [
                                            {
                                                tag: 'input',
                                                attrs: {
                                                    type: 'radio',
                                                    name: 'diff_levels',
                                                    value: 1,
                                                },
                                            },
                                            {
                                                tag: 'label',
                                                content: 1,
                                                attrs: {
                                                    for: 'diff_levels',
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        tag: 'div',
                                        cls: [
                                            'main-menu-levels-item',
                                            'main-menu-levels-item-regular',
                                        ],
                                        content: [
                                            {
                                                tag: 'input',
                                                attrs: {
                                                    type: 'radio',
                                                    name: 'diff_levels',
                                                    value: 2,
                                                },
                                            },
                                            {
                                                tag: 'label',
                                                content: 2,
                                                attrs: {
                                                    for: 'diff_levels',
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        tag: 'div',
                                        cls: [
                                            'main-menu-levels-item',
                                            'main-menu-levels-item-regular',
                                        ],
                                        content: [
                                            {
                                                tag: 'input',
                                                attrs: {
                                                    type: 'radio',
                                                    name: 'diff_levels',
                                                    value: 3,
                                                },
                                            },
                                            {
                                                tag: 'label',
                                                content: 3,
                                                attrs: {
                                                    for: 'diff_levels',
                                                },
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                tag: 'button',
                                cls: 'main-menu-submit',
                                content: 'Старт',
                            },
                        ],
                    })
                );

                appBlock
                    .querySelector('.main-menu-levels')
                    .addEventListener('click', function (e) {
                        if (e.target.tagName === 'INPUT') {
                            e.stopPropagation();

                            const levels = appBlock.querySelectorAll(
                                '.main-menu-levels-item input'
                            );

                            for (const l of levels) {
                                const levelItem = l.parentElement;

                                if (l.checked) {
                                    levelItem.classList.remove(
                                        'main-menu-levels-item-regular'
                                    );
                                    levelItem.classList.add(
                                        'main-menu-levels-item-checked'
                                    );
                                } else {
                                    levelItem.classList.remove(
                                        'main-menu-levels-item-checked'
                                    );
                                    levelItem.classList.add(
                                        'main-menu-levels-item-regular'
                                    );
                                }
                            }
                        }
                    });

                appBlock
                    .querySelector('form')
                    .addEventListener('submit', function (e) {
                        e.preventDefault();

                        const levels = appBlock.querySelectorAll(
                            '.main-menu-levels-item input'
                        );
                        let level = 0;

                        for (const l of levels) {
                            if (l.checked) {
                                level = l.value;
                                break;
                            }
                        }

                        app.state.diffLevel = level;

                        app.renderNextScreen();
                    });
            },
            game: function () {
                const appBlock = document.querySelector('.app');

                const gameDifficultyLevel = Number(app.state.diffLevel);

                appBlock.appendChild(
                    templateEngine({
                        tag: 'div',
                        cls: 'game-header',
                        content: [
                            {
                                tag: 'div',
                                cls: 'game-timer',
                                content: [
                                    {
                                        tag: 'div',
                                        cls: 'game-timer-min',
                                        content: '00',
                                    },
                                    {
                                        tag: 'div',
                                        content: '.',
                                    },
                                    {
                                        tag: 'div',
                                        cls: 'game-timer-sec',
                                        content: '00',
                                    },
                                ],
                            },
                            {
                                tag: 'div',
                                cls: 'game-header-actions',
                                content: [
                                    {
                                        tag: 'button',
                                        cls: 'game-header-actions-submit',
                                        content: 'Начать заново',
                                    },
                                ],
                            },
                        ],
                    })
                );

                const gameContentElement = appBlock.appendChild(
                    templateEngine({
                        tag: 'div',
                        cls: [
                            'game-content',
                            `game-content-grid-${gameDifficultyLevel}`,
                        ],
                    })
                );

                //show card front side
                gameContentElement.addEventListener('click', (e) => {
                    const target = e.target;
                    if (target.classList.contains('card-front')) {
                        target.parentElement.classList.add(
                            'game-content-card-show'
                        );

                        //animation triggers one time so it's necessary to remove class with animation
                        setTimeout(() => {
                            target.parentElement.classList.remove(
                                'game-content-card-show'
                            );
                        }, 5000);
                    }
                });

                let numberOfCards = 0;

                switch (gameDifficultyLevel) {
                    case 1:
                        numberOfCards = 8;
                        break;
                    case 2:
                        numberOfCards = 18;
                        break;
                    case 3:
                        numberOfCards = 36;
                        break;
                }

                const cards = app.cards.sort(() => Math.random() - 0.5);

                for (let i = 0; i < numberOfCards; i++) {
                    gameContentElement.appendChild(
                        templateEngine({
                            tag: 'div',
                            cls: 'game-content-card',
                            content: [
                                {
                                    tag: 'div',
                                    cls: 'card-front',
                                },
                                {
                                    tag: 'img',
                                    cls: 'card-back',
                                    attrs: {
                                        src: cards[i].uri,
                                        'data-card-type': cards[i].type,
                                        'data-card-rank': cards[i].rank,
                                    },
                                },
                            ],
                        })
                    );
                }

                //show all cards on screen render
                gameContentElement
                    .querySelectorAll('.card-front')
                    .forEach((c) => {
                        c.click();
                    });
            },
        },
        renderScreen: function (screenName) {
            if (!screenName) {
                throw new Error('Требуется передать наименование экрана');
            }

            if (!this.screens[screenName]) {
                throw new Error(`Экрана ${screenName} не существует`);
            }

            this.state.stage = screenName; //запомним текущее состояние

            const appBlock = document.querySelector('.app');

            //allows to set different styles for different screens' parent element
            if (appBlock.dataset.specialClass) {
                appBlock.classList.remove(appBlock.dataset.specialClass);
            }

            let layoutClass = '';
            switch (screenName) {
                case 'mainMenu':
                    layoutClass = 'main-menu';
                    break;
                default:
                    layoutClass = screenName;
            }

            appBlock.classList.add(layoutClass);
            appBlock.dataset.specialClass = layoutClass;

            appBlock.textContent = '';

            this.screens[screenName]();
        },
        renderNextScreen: function () {
            if (this.state.stage === 'mainMenu') {
                this.renderScreen('game');
            }
        },
    };

    app.screens['mainMenu'].bind(app);
    app.screens['game'].bind(app);

    return app;
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFD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O0FBQ0EscUNBQXFDO0FBQ3JDLGlDQUFpQztBQUNqQztBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxZQUFZO0FBQ3REOztBQUVBLDJDQUEyQzs7QUFFM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWV3b3JrNDEvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmZ1bmN0aW9uIGluaXRBcHAoKSB7XG4gICAgY29uc3QgYXBwID0ge1xuICAgICAgICBzdGF0ZToge30sXG4gICAgICAgIGNhcmRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2RpYW1vbmRzJyxcbiAgICAgICAgICAgICAgICByYW5rOiAnNicsXG4gICAgICAgICAgICAgICAgdXJpOiAnLi9zdGF0aWMvaW1nL2NhcmRzLzYg0LHRg9Cx0L3Riy5zdmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2x1YnMnLFxuICAgICAgICAgICAgICAgIHJhbms6ICc2JyxcbiAgICAgICAgICAgICAgICB1cmk6ICcuL3N0YXRpYy9pbWcvY2FyZHMvNiDQutGA0LXRgdGC0Lguc3ZnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NwYWRlcycsXG4gICAgICAgICAgICAgICAgcmFuazogJzYnLFxuICAgICAgICAgICAgICAgIHVyaTogJy4vc3RhdGljL2ltZy9jYXJkcy82INC/0LjQutC4LnN2ZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdoZWFydHMnLFxuICAgICAgICAgICAgICAgIHJhbms6ICc2JyxcbiAgICAgICAgICAgICAgICB1cmk6ICcuL3N0YXRpYy9pbWcvY2FyZHMvNiDRh9C10YDQstC4LnN2ZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdkaWFtb25kcycsXG4gICAgICAgICAgICAgICAgcmFuazogJzcnLFxuICAgICAgICAgICAgICAgIHVyaTogJy4vc3RhdGljL2ltZy9jYXJkcy83INCx0YPQsdC90Ysuc3ZnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2NsdWJzJyxcbiAgICAgICAgICAgICAgICByYW5rOiAnNycsXG4gICAgICAgICAgICAgICAgdXJpOiAnLi9zdGF0aWMvaW1nL2NhcmRzLzcg0LrRgNC10YHRgtC4LnN2ZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzcGFkZXMnLFxuICAgICAgICAgICAgICAgIHJhbms6ICc3JyxcbiAgICAgICAgICAgICAgICB1cmk6ICcuL3N0YXRpYy9pbWcvY2FyZHMvNyDQv9C40LrQuC5zdmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaGVhcnRzJyxcbiAgICAgICAgICAgICAgICByYW5rOiAnNycsXG4gICAgICAgICAgICAgICAgdXJpOiAnLi9zdGF0aWMvaW1nL2NhcmRzLzcg0YfQtdGA0LLQuC5zdmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZGlhbW9uZHMnLFxuICAgICAgICAgICAgICAgIHJhbms6ICc4JyxcbiAgICAgICAgICAgICAgICB1cmk6ICcuL3N0YXRpYy9pbWcvY2FyZHMvOCDQsdGD0LHQvdGLLnN2ZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjbHVicycsXG4gICAgICAgICAgICAgICAgcmFuazogJzgnLFxuICAgICAgICAgICAgICAgIHVyaTogJy4vc3RhdGljL2ltZy9jYXJkcy84INC60YDQtdGB0YLQuC5zdmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3BhZGVzJyxcbiAgICAgICAgICAgICAgICByYW5rOiAnOCcsXG4gICAgICAgICAgICAgICAgdXJpOiAnLi9zdGF0aWMvaW1nL2NhcmRzLzgg0L/QuNC60Lguc3ZnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2hlYXJ0cycsXG4gICAgICAgICAgICAgICAgcmFuazogJzgnLFxuICAgICAgICAgICAgICAgIHVyaTogJy4vc3RhdGljL2ltZy9jYXJkcy84INGH0LXRgNCy0Lguc3ZnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2RpYW1vbmRzJyxcbiAgICAgICAgICAgICAgICByYW5rOiAnOScsXG4gICAgICAgICAgICAgICAgdXJpOiAnLi9zdGF0aWMvaW1nL2NhcmRzLzkg0LHRg9Cx0L3Riy5zdmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2x1YnMnLFxuICAgICAgICAgICAgICAgIHJhbms6ICc5JyxcbiAgICAgICAgICAgICAgICB1cmk6ICcuL3N0YXRpYy9pbWcvY2FyZHMvOSDQutGA0LXRgdGC0Lguc3ZnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NwYWRlcycsXG4gICAgICAgICAgICAgICAgcmFuazogJzknLFxuICAgICAgICAgICAgICAgIHVyaTogJy4vc3RhdGljL2ltZy9jYXJkcy85INC/0LjQutC4LnN2ZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdoZWFydHMnLFxuICAgICAgICAgICAgICAgIHJhbms6ICc5JyxcbiAgICAgICAgICAgICAgICB1cmk6ICcuL3N0YXRpYy9pbWcvY2FyZHMvOSDRh9C10YDQstC4LnN2ZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdkaWFtb25kcycsXG4gICAgICAgICAgICAgICAgcmFuazogJzYnLFxuICAgICAgICAgICAgICAgIHVyaTogJy4vc3RhdGljL2ltZy9jYXJkcy8xMCDQsdGD0LHQvdGLLnN2ZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjbHVicycsXG4gICAgICAgICAgICAgICAgcmFuazogJzYnLFxuICAgICAgICAgICAgICAgIHVyaTogJy4vc3RhdGljL2ltZy9jYXJkcy8xMCDQutGA0LXRgdGC0Lguc3ZnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NwYWRlcycsXG4gICAgICAgICAgICAgICAgcmFuazogJzEwJyxcbiAgICAgICAgICAgICAgICB1cmk6ICcuL3N0YXRpYy9pbWcvY2FyZHMvMTAg0L/QuNC60Lguc3ZnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2hlYXJ0cycsXG4gICAgICAgICAgICAgICAgcmFuazogJzEwJyxcbiAgICAgICAgICAgICAgICB1cmk6ICcuL3N0YXRpYy9pbWcvY2FyZHMvMTAg0YfQtdGA0LLQuC5zdmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZGlhbW9uZHMnLFxuICAgICAgICAgICAgICAgIHJhbms6ICdqYWNrJyxcbiAgICAgICAgICAgICAgICB1cmk6ICcuL3N0YXRpYy9pbWcvY2FyZHMv0LLQsNC70LXRgiDQsdGD0LHQvdGLLnN2ZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjbHVicycsXG4gICAgICAgICAgICAgICAgcmFuazogJ2phY2snLFxuICAgICAgICAgICAgICAgIHVyaTogJy4vc3RhdGljL2ltZy9jYXJkcy/QstCw0LvQtdGCINC60YDQtdGB0YLQuC5zdmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3BhZGVzJyxcbiAgICAgICAgICAgICAgICByYW5rOiAnamFjaycsXG4gICAgICAgICAgICAgICAgdXJpOiAnLi9zdGF0aWMvaW1nL2NhcmRzL9Cy0LDQu9C10YIg0L/QuNC60Lguc3ZnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2hlYXJ0cycsXG4gICAgICAgICAgICAgICAgcmFuazogJ2phY2snLFxuICAgICAgICAgICAgICAgIHVyaTogJy4vc3RhdGljL2ltZy9jYXJkcy/QstCw0LvQtdGCINGH0LXRgNCy0Lguc3ZnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2RpYW1vbmRzJyxcbiAgICAgICAgICAgICAgICByYW5rOiAncXVlZW4nLFxuICAgICAgICAgICAgICAgIHVyaTogJy4vc3RhdGljL2ltZy9jYXJkcy/QtNCw0LzQsCDQsdGD0LHQvdGLLnN2ZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjbHVicycsXG4gICAgICAgICAgICAgICAgcmFuazogJ3F1ZWVuJyxcbiAgICAgICAgICAgICAgICB1cmk6ICcuL3N0YXRpYy9pbWcvY2FyZHMv0LTQsNC80LAg0LrRgNC10YHRgtC4LnN2ZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzcGFkZXMnLFxuICAgICAgICAgICAgICAgIHJhbms6ICdxdWVlbicsXG4gICAgICAgICAgICAgICAgdXJpOiAnLi9zdGF0aWMvaW1nL2NhcmRzL9C00LDQvNCwINC/0LjQutC4LnN2ZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdoZWFydHMnLFxuICAgICAgICAgICAgICAgIHJhbms6ICdxdWVlbicsXG4gICAgICAgICAgICAgICAgdXJpOiAnLi9zdGF0aWMvaW1nL2NhcmRzL9C00LDQvNCwINGH0LXRgNCy0Lguc3ZnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2RpYW1vbmRzJyxcbiAgICAgICAgICAgICAgICByYW5rOiAna2luZycsXG4gICAgICAgICAgICAgICAgdXJpOiAnLi9zdGF0aWMvaW1nL2NhcmRzL9C60L7RgNC+0LvRjCDQsdGD0LHQvdGLLnN2ZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjbHVicycsXG4gICAgICAgICAgICAgICAgcmFuazogJ2tpbmcnLFxuICAgICAgICAgICAgICAgIHVyaTogJy4vc3RhdGljL2ltZy9jYXJkcy/QutC+0YDQvtC70Ywg0LrRgNC10YHRgtC4LnN2ZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzcGFkZXMnLFxuICAgICAgICAgICAgICAgIHJhbms6ICdraW5nJyxcbiAgICAgICAgICAgICAgICB1cmk6ICcuL3N0YXRpYy9pbWcvY2FyZHMv0LrQvtGA0L7Qu9GMINC/0LjQutC4LnN2ZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdoZWFydHMnLFxuICAgICAgICAgICAgICAgIHJhbms6ICdraW5nJyxcbiAgICAgICAgICAgICAgICB1cmk6ICcuL3N0YXRpYy9pbWcvY2FyZHMv0LrQvtGA0L7Qu9GMINGH0LXRgNCy0Lguc3ZnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2RpYW1vbmRzJyxcbiAgICAgICAgICAgICAgICByYW5rOiAnYWNlJyxcbiAgICAgICAgICAgICAgICB1cmk6ICcuL3N0YXRpYy9pbWcvY2FyZHMv0YLRg9C3INCx0YPQsdC90Ysuc3ZnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2NsdWJzJyxcbiAgICAgICAgICAgICAgICByYW5rOiAnYWNlJyxcbiAgICAgICAgICAgICAgICB1cmk6ICcuL3N0YXRpYy9pbWcvY2FyZHMv0YLRg9C3INC60YDQtdGB0YLQuC5zdmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3BhZGVzJyxcbiAgICAgICAgICAgICAgICByYW5rOiAnYWNlJyxcbiAgICAgICAgICAgICAgICB1cmk6ICcuL3N0YXRpYy9pbWcvY2FyZHMv0YLRg9C3INC/0LjQutC4LnN2ZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdoZWFydHMnLFxuICAgICAgICAgICAgICAgIHJhbms6ICdhY2UnLFxuICAgICAgICAgICAgICAgIHVyaTogJy4vc3RhdGljL2ltZy9jYXJkcy/RgtGD0Lcg0YfQtdGA0LLQuC5zdmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc2NyZWVuczoge1xuICAgICAgICAgICAgbWFpbk1lbnU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcHBCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAnKTtcblxuICAgICAgICAgICAgICAgIGFwcEJsb2NrLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUVuZ2luZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xzOiAnbWFpbi1tZW51LXRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfQktGL0LHQtdGA0Lgg0YHQu9C+0LbQvdC+0YHRgtGMJyxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgYXBwQmxvY2suYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlRW5naW5lKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ2Zvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzOiAnbWFpbi1tZW51LWxldmVscycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWFpbi1tZW51LWxldmVscy1pdGVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21haW4tbWVudS1sZXZlbHMtaXRlbS1yZWd1bGFyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncmFkaW8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkaWZmX2xldmVscycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3I6ICdkaWZmX2xldmVscycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtYWluLW1lbnUtbGV2ZWxzLWl0ZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWFpbi1tZW51LWxldmVscy1pdGVtLXJlZ3VsYXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdyYWRpbycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RpZmZfbGV2ZWxzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcjogJ2RpZmZfbGV2ZWxzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21haW4tbWVudS1sZXZlbHMtaXRlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtYWluLW1lbnUtbGV2ZWxzLWl0ZW0tcmVndWxhcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3JhZGlvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGlmZl9sZXZlbHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yOiAnZGlmZl9sZXZlbHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzOiAnbWFpbi1tZW51LXN1Ym1pdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfQodGC0LDRgNGCJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgYXBwQmxvY2tcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW1lbnUtbGV2ZWxzJylcbiAgICAgICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxldmVscyA9IGFwcEJsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcubWFpbi1tZW51LWxldmVscy1pdGVtIGlucHV0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGwgb2YgbGV2ZWxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxldmVsSXRlbSA9IGwucGFyZW50RWxlbWVudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbEl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWFpbi1tZW51LWxldmVscy1pdGVtLXJlZ3VsYXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxJdGVtLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21haW4tbWVudS1sZXZlbHMtaXRlbS1jaGVja2VkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsSXRlbS5jbGFzc0xpc3QucmVtb3ZlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtYWluLW1lbnUtbGV2ZWxzLWl0ZW0tY2hlY2tlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbEl0ZW0uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWFpbi1tZW51LWxldmVscy1pdGVtLXJlZ3VsYXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGFwcEJsb2NrXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxldmVscyA9IGFwcEJsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJy5tYWluLW1lbnUtbGV2ZWxzLWl0ZW0gaW5wdXQnXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxldmVsID0gMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBsIG9mIGxldmVscykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWwgPSBsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcC5zdGF0ZS5kaWZmTGV2ZWwgPSBsZXZlbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwLnJlbmRlck5leHRTY3JlZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2FtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFwcEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcCcpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZ2FtZURpZmZpY3VsdHlMZXZlbCA9IE51bWJlcihhcHAuc3RhdGUuZGlmZkxldmVsKTtcblxuICAgICAgICAgICAgICAgIGFwcEJsb2NrLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUVuZ2luZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xzOiAnZ2FtZS1oZWFkZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzOiAnZ2FtZS10aW1lcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsczogJ2dhbWUtdGltZXItbWluJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnMDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHM6ICdnYW1lLXRpbWVyLXNlYycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJzAwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsczogJ2dhbWUtaGVhZGVyLWFjdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHM6ICdnYW1lLWhlYWRlci1hY3Rpb25zLXN1Ym1pdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ9Cd0LDRh9Cw0YLRjCDQt9Cw0L3QvtCy0L4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZ2FtZUNvbnRlbnRFbGVtZW50ID0gYXBwQmxvY2suYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlRW5naW5lKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ2FtZS1jb250ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZ2FtZS1jb250ZW50LWdyaWQtJHtnYW1lRGlmZmljdWx0eUxldmVsfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAvL3Nob3cgY2FyZCBmcm9udCBzaWRlXG4gICAgICAgICAgICAgICAgZ2FtZUNvbnRlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkLWZyb250JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dhbWUtY29udGVudC1jYXJkLXNob3cnXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2FuaW1hdGlvbiB0cmlnZ2VycyBvbmUgdGltZSBzbyBpdCdzIG5lY2Vzc2FyeSB0byByZW1vdmUgY2xhc3Mgd2l0aCBhbmltYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnYW1lLWNvbnRlbnQtY2FyZC1zaG93J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbGV0IG51bWJlck9mQ2FyZHMgPSAwO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChnYW1lRGlmZmljdWx0eUxldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlck9mQ2FyZHMgPSA4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlck9mQ2FyZHMgPSAxODtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJPZkNhcmRzID0gMzY7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkcyA9IGFwcC5jYXJkcy5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZkNhcmRzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVFbmdpbmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzOiAnZ2FtZS1jb250ZW50LWNhcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsczogJ2NhcmQtZnJvbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzOiAnY2FyZC1iYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBjYXJkc1tpXS51cmksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtY2FyZC10eXBlJzogY2FyZHNbaV0udHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1jYXJkLXJhbmsnOiBjYXJkc1tpXS5yYW5rLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL3Nob3cgYWxsIGNhcmRzIG9uIHNjcmVlbiByZW5kZXJcbiAgICAgICAgICAgICAgICBnYW1lQ29udGVudEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLWZyb250JylcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICByZW5kZXJTY3JlZW46IGZ1bmN0aW9uIChzY3JlZW5OYW1lKSB7XG4gICAgICAgICAgICBpZiAoIXNjcmVlbk5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ9Ci0YDQtdCx0YPQtdGC0YHRjyDQv9C10YDQtdC00LDRgtGMINC90LDQuNC80LXQvdC+0LLQsNC90LjQtSDRjdC60YDQsNC90LAnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLnNjcmVlbnNbc2NyZWVuTmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYNCt0LrRgNCw0L3QsCAke3NjcmVlbk5hbWV9INC90LUg0YHRg9GJ0LXRgdGC0LLRg9C10YJgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdGFnZSA9IHNjcmVlbk5hbWU7IC8v0LfQsNC/0L7QvNC90LjQvCDRgtC10LrRg9GJ0LXQtSDRgdC+0YHRgtC+0Y/QvdC40LVcblxuICAgICAgICAgICAgY29uc3QgYXBwQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwJyk7XG5cbiAgICAgICAgICAgIC8vYWxsb3dzIHRvIHNldCBkaWZmZXJlbnQgc3R5bGVzIGZvciBkaWZmZXJlbnQgc2NyZWVucycgcGFyZW50IGVsZW1lbnRcbiAgICAgICAgICAgIGlmIChhcHBCbG9jay5kYXRhc2V0LnNwZWNpYWxDbGFzcykge1xuICAgICAgICAgICAgICAgIGFwcEJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoYXBwQmxvY2suZGF0YXNldC5zcGVjaWFsQ2xhc3MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbGF5b3V0Q2xhc3MgPSAnJztcbiAgICAgICAgICAgIHN3aXRjaCAoc2NyZWVuTmFtZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ21haW5NZW51JzpcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0Q2xhc3MgPSAnbWFpbi1tZW51JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0Q2xhc3MgPSBzY3JlZW5OYW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhcHBCbG9jay5jbGFzc0xpc3QuYWRkKGxheW91dENsYXNzKTtcbiAgICAgICAgICAgIGFwcEJsb2NrLmRhdGFzZXQuc3BlY2lhbENsYXNzID0gbGF5b3V0Q2xhc3M7XG5cbiAgICAgICAgICAgIGFwcEJsb2NrLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICAgICAgICAgIHRoaXMuc2NyZWVuc1tzY3JlZW5OYW1lXSgpO1xuICAgICAgICB9LFxuICAgICAgICByZW5kZXJOZXh0U2NyZWVuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zdGFnZSA9PT0gJ21haW5NZW51Jykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyU2NyZWVuKCdnYW1lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGFwcC5zY3JlZW5zWydtYWluTWVudSddLmJpbmQoYXBwKTtcbiAgICBhcHAuc2NyZWVuc1snZ2FtZSddLmJpbmQoYXBwKTtcblxuICAgIHJldHVybiBhcHA7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=