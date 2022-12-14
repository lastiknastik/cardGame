import { templateEngine } from './lib/template-engine';
import { cards, Card } from './cards';

type Application = {
    state: {
        showedCards: { rank: string; type: string }[];
        timeSec: number;
        diffLevel: number;
        timerInterval?: NodeJS.Timer;
        status?: string;
        pairsNum: number;
        stage: string;
    };
    screens: {
        [key: string]: () => void;
        lobby: () => void;
        game: () => void;
        resolution: () => void;
    };
    setLayoutClass: (className: string) => void;
    renderNextScreen: () => void;
    renderScreen: (screenName: string) => void;
};

export function initApp(): Application {
    const app: Application = {
        state: {
            showedCards: [],
            timeSec: 0,
            pairsNum: 0,
            diffLevel: -1,
            stage: '',
        },
        screens: {
            lobby: function (): void {
                clearInterval(app.state.timerInterval);
                const appBlock: Element = document.querySelector(
                    '.app'
                ) as Element;

                if (appBlock) {
                    appBlock.textContent = '';
                }

                app.setLayoutClass('lobby');

                appBlock?.appendChild(
                    templateEngine({
                        tag: 'div',
                        cls: 'lobby-title',
                        content: 'Выбери сложность',
                    })
                );

                appBlock?.appendChild(
                    templateEngine({
                        tag: 'form',
                        content: [
                            {
                                tag: 'div',
                                cls: 'lobby-levels',
                                content: [
                                    {
                                        tag: 'div',
                                        cls: [
                                            'lobby-levels-item',
                                            'lobby-levels-item-regular',
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
                                            'lobby-levels-item',
                                            'lobby-levels-item-regular',
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
                                            'lobby-levels-item',
                                            'lobby-levels-item-regular',
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
                                cls: 'lobby-submit',
                                content: 'Старт',
                            },
                        ],
                    })
                );

                appBlock
                    ?.querySelector('.lobby-levels')
                    ?.addEventListener('click', function (e: Event) {
                        const target = e.target as HTMLElement;
                        if (target.tagName === 'INPUT') {
                            e.stopPropagation();

                            const levels: NodeListOf<HTMLInputElement> =
                                appBlock.querySelectorAll(
                                    '.lobby-levels-item input'
                                );

                            for (const l of levels) {
                                const levelItem: HTMLElement =
                                    l.parentElement as HTMLElement;

                                if (l.checked) {
                                    levelItem.classList.remove(
                                        'lobby-levels-item-regular'
                                    );
                                    levelItem.classList.add(
                                        'lobby-levels-item-checked'
                                    );
                                } else {
                                    levelItem.classList.remove(
                                        'lobby-levels-item-checked'
                                    );
                                    levelItem.classList.add(
                                        'lobby-levels-item-regular'
                                    );
                                }
                            }
                        }
                    });

                appBlock
                    ?.querySelector('form')
                    ?.addEventListener('submit', function (e: SubmitEvent) {
                        e.preventDefault();

                        const levels: NodeListOf<HTMLInputElement> =
                            appBlock.querySelectorAll(
                                '.lobby-levels-item input'
                            );
                        let level: number = 0;

                        for (const l of levels) {
                            if (l.checked) {
                                level = Number(l.value);
                                break;
                            }
                        }

                        app.state.diffLevel = level;

                        app.renderNextScreen();
                    });
            },
            game: function (): void {
                app.state.timeSec = 0; //reset timer
                app.state.status = ''; //reset the status
                app.state.showedCards = [];
                const appBlock = document.querySelector('.app') as Element;

                appBlock.textContent = '';
                app.setLayoutClass('game');

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
                                        cls: 'game-header-actions-restart',
                                        content: 'Начать заново',
                                    },
                                ],
                            },
                        ],
                    })
                );

                //restart the game
                appBlock
                    ?.querySelector('.game-header-actions-restart')
                    ?.addEventListener('click', function () {
                        app.renderScreen('lobby');
                    });

                const gameContentElement: Element = appBlock.appendChild(
                    templateEngine({
                        tag: 'div',
                        cls: [
                            'game-content',
                            `game-content-grid-${gameDifficultyLevel}`,
                        ],
                    })
                ) as Element;
                //show card
                const showCard = (element: HTMLElement) => {
                    if (element.classList.contains('card-front')) {
                        element.parentElement?.classList.add(
                            'game-content-card-show'
                        );
                    }
                };
                //hide card
                const hideCard = (element: HTMLElement) => {
                    if (element.classList.contains('card-front')) {
                        element.parentElement?.classList.remove(
                            'game-content-card-show'
                        );
                    }
                };

                //show card front side
                gameContentElement.addEventListener('click', (e: Event) => {
                    const target = e.target as HTMLElement;
                    if (target.classList.contains('card-front')) {
                        showCard(target);

                        const targetParent =
                            target.parentElement as HTMLElement;
                        //remember showed card
                        const pickedCard = {
                            rank: targetParent.dataset.cardRank as string,
                            type: targetParent.dataset.cardType as string,
                        };

                        if (app.state.showedCards?.length === 1) {
                            //500 is transition-duration
                            setTimeout(() => {
                                if (
                                    app.state.showedCards[0].rank ===
                                    pickedCard.rank
                                ) {
                                    app.state.pairsNum--;
                                    if (app.state.pairsNum === 0) {
                                        app.state.status = 'resolved-won';
                                        app.renderNextScreen();
                                    }
                                } else {
                                    hideCard(target);

                                    const prevCard: HTMLElement =
                                        document.querySelector(
                                            `.game-content-card[data-card-rank="${app.state.showedCards[0].rank}"][data-card-type="${app.state.showedCards[0].type}"] .card-front`
                                        ) as HTMLElement;

                                    hideCard(prevCard);

                                    app.state.status = 'resolved-lost';
                                    app.renderNextScreen();
                                }
                                app.state.showedCards = [];
                            }, 500);
                        } else {
                            app.state.showedCards.push(pickedCard);
                        }
                    }
                });

                let numberOfCards: number = 0;

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

                const cardsShuffled: Card[] = cards.sort(
                    () => Math.random() - 0.5
                );

                let uniqueCards: Array<string> = []; //helps to count pairs on the table
                app.state.pairsNum = 0;

                for (let i: number = 0; i < numberOfCards; i++) {
                    const pairCardIndex: number = uniqueCards.indexOf(
                        cardsShuffled[i].rank
                    );

                    //array of unique cards contains a card with the same rank - it a pair
                    if (pairCardIndex > -1) {
                        uniqueCards.splice(pairCardIndex, 1);
                        app.state.pairsNum++;
                    } else {
                        uniqueCards.push(cardsShuffled[i].rank);
                    }

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
                    const cardFronts: NodeListOf<HTMLElement> =
                        gameContentElement.querySelectorAll('.card-front');

                    cardFronts.forEach((c) => {
                        showCard(c);

                        setTimeout(() => {
                            hideCard(c);
                        }, 5000);
                    });
                }, 0);

                //update game timer
                app.state.timerInterval = setInterval(() => {
                    app.state.timeSec++;

                    const minElement: HTMLDivElement = appBlock.querySelector(
                        '.game-timer-min'
                    ) as HTMLDivElement;

                    minElement.innerText = String(
                        Math.floor(app.state.timeSec / 60)
                    ).padStart(2, '0');

                    const secElement: HTMLDivElement = appBlock.querySelector(
                        '.game-timer-sec'
                    ) as HTMLDivElement;

                    secElement.innerText = String(
                        app.state.timeSec % 60
                    ).padStart(2, '0');
                }, 1000);
            },
            resolution: function () {
                app.state.stage = 'resolution';
                clearInterval(app.state.timerInterval);

                document.body.appendChild(
                    templateEngine({
                        tag: 'div',
                        cls: 'resolution',
                        content: [
                            {
                                tag: 'div',
                                cls: 'resolution-content',
                                content: [
                                    {
                                        tag: 'img',
                                        cls: 'resolution-content-icon',
                                        attrs: {
                                            src:
                                                app.state.status ===
                                                'resolved-lost'
                                                    ? './static/img/lost.png'
                                                    : './static/img/won.png',
                                        },
                                    },
                                    {
                                        tag: 'h1',
                                        content:
                                            app.state.status === 'resolved-lost'
                                                ? 'Вы проиграли!'
                                                : 'Вы выиграли!',
                                    },
                                    {
                                        tag: 'div',
                                        cls: 'resolution-content-time',
                                        content: [
                                            {
                                                tag: 'span',
                                                cls: 'resolution-content-time-label',
                                                content: 'Затраченное время:',
                                            },
                                            {
                                                tag: 'span',
                                                cls: 'resolution-content-time-value',
                                                content: `${String(
                                                    Math.floor(
                                                        app.state.timeSec / 60
                                                    )
                                                ).padStart(2, '0')}.${String(
                                                    app.state.timeSec % 60
                                                ).padStart(2, '0')}`,
                                            },
                                        ],
                                    },
                                    {
                                        tag: 'button',
                                        cls: 'resolution-content-actions-restart',
                                        content: 'Играть снова',
                                    },
                                ],
                            },
                        ],
                    })
                );

                document
                    ?.querySelector('.resolution-content-actions-restart')
                    ?.addEventListener('click', function () {
                        document?.querySelector('.resolution')?.remove();

                        app.renderScreen('lobby');
                    });
            },
        },
        renderScreen: function (screenName: string): void {
            if (!screenName) {
                throw new Error('Требуется передать наименование экрана');
            }

            if (!this.screens[screenName]) {
                throw new Error(`Экрана ${screenName} не существует`);
            }

            this.state.stage = screenName; //save current stage

            this.screens[screenName]();
        },
        renderNextScreen: function (): void {
            if (this.state.stage === 'lobby') {
                this.renderScreen('game');
            } else if (
                this.state.stage === 'game' &&
                (this.state.status === 'resolved-lost' ||
                    this.state.status === 'resolved-won')
            ) {
                this.renderScreen('resolution');
            }
        },
        setLayoutClass: function (className: string): void {
            const appBlock = document.querySelector('.app') as HTMLElement;

            //allows to set different styles for different screens' parent element
            if (appBlock.dataset.specialClass) {
                appBlock.classList.remove(appBlock.dataset.specialClass);
            }

            appBlock.classList.add(className);
            appBlock.dataset.specialClass = className;
        },
    };

    app.screens['lobby'].bind(app);
    app.screens['game'].bind(app);
    app.screens['resolution'].bind(app);

    return app;
}
