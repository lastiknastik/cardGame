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
