import { templateEngine } from './lib/template-engine.js';
import { cards } from './cards.js';

export function initApp() {
    const app = {
        state: {
            showedCards: [],
        },
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

                const showCard = (element) => {
                    if (element.classList.contains('card-front')) {
                        element.parentElement.classList.add(
                            'game-content-card-show'
                        );
                    }
                };

                const hideCard = (element) => {
                    if (element.classList.contains('card-front')) {
                        element.parentElement.classList.remove(
                            'game-content-card-show'
                        );
                    }
                };

                //show card front side
                gameContentElement.addEventListener('click', (e) => {
                    const target = e.target;
                    if (target.classList.contains('card-front')) {
                        showCard(target);

                        //remember showed card
                        const pickedCard = {
                            rank: target.parentElement.dataset.cardRank,
                            type: target.parentElement.dataset.cardType,
                        };

                        if (app.state.showedCards.length === 1) {
                            //500 is transition-duration
                            setTimeout(() => {
                                if (
                                    app.state.showedCards[0].rank ===
                                    pickedCard.rank
                                ) {
                                    alert('well done!');
                                } else {
                                    alert('oh noooo');

                                    hideCard(target);

                                    const prevCard = document.querySelector(
                                        `.game-content-card[data-card-rank="${app.state.showedCards[0].rank}"][data-card-type="${app.state.showedCards[0].type}"] .card-front`
                                    );

                                    hideCard(prevCard);
                                }

                                app.state.showedCards = [];
                            }, 500);
                        } else {
                            app.state.showedCards.push(pickedCard);
                        }
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

                const cardsShuffled = cards.sort(() => Math.random() - 0.5);

                for (let i = 0; i < numberOfCards; i++) {
                    gameContentElement.appendChild(
                        templateEngine({
                            tag: 'div',
                            cls: 'game-content-card',
                            attrs: {
                                'data-card-type': cardsShuffled[i].type,
                                'data-card-rank': cardsShuffled[i].rank,
                            },
                            content: [
                                {
                                    tag: 'div',
                                    cls: 'card-front',
                                },
                                {
                                    tag: 'img',
                                    cls: 'card-back',
                                    attrs: {
                                        src: cardsShuffled[i].uri,
                                    },
                                },
                            ],
                        })
                    );
                }

                //show all cards on screen render
                setTimeout(() => {
                    gameContentElement
                        .querySelectorAll('.card-front')
                        .forEach((c) => {
                            showCard(c);

                            setTimeout(() => {
                                hideCard(c);
                            }, 5000);
                        });
                }, 0);
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
