function initApp() {
    const app = {
        state: {},
        screens: {
            'main_menu': function () {
                const appBlock = document.querySelector('.app');
                appBlock.textContent = '';

                const mainMenu = appBlock.appendChild(templateEngine({
                    tag: 'div',
                    cls: 'main_menu',
                    content: [
                        {
                            tag: 'div',
                            cls: 'main_menu-title',
                            content: 'Выбери сложность'
                        },
                        {
                            tag: 'form',
                            content: [
                                {
                                    tag: 'div',
                                    cls: 'main_menu-levels',
                                    content: [
                                        {
                                            tag: 'div',
                                            cls: ['main_menu-levels-item', 'main_menu-levels-item-regular'],
                                            content: [
                                                {
                                                    tag: 'input',
                                                    attrs: {
                                                        type: 'radio',
                                                        name: 'diff_levels',
                                                        value: 1
                                                    }
                                                },
                                                {
                                                    tag: 'label',
                                                    content: 1,
                                                    attrs: {
                                                        for: 'diff_levels'
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            tag: 'div',
                                            cls: ['main_menu-levels-item', 'main_menu-levels-item-regular'],
                                            content: [
                                                {
                                                    tag: 'input',
                                                    attrs: {
                                                        type: 'radio',
                                                        name: 'diff_levels',
                                                        value: 2
                                                    }
                                                },
                                                {
                                                    tag: 'label',
                                                    content: 2,
                                                    attrs: {
                                                        for: 'diff_levels'
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            tag: 'div',
                                            cls: ['main_menu-levels-item', 'main_menu-levels-item-regular'],
                                            content: [
                                                {
                                                    tag: 'input',
                                                    attrs: {
                                                        type: 'radio',
                                                        name: 'diff_levels',
                                                        value: 3
                                                    }
                                                },
                                                {
                                                    tag: 'label',
                                                    content: 3,
                                                    attrs: {
                                                        for: 'diff_levels'
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    tag: 'button',
                                    cls: 'main_menu-submit',
                                    content: 'Старт'
                                }
                            ]
                        }
                    ]
                }))

                mainMenu.querySelector('.main_menu-levels').addEventListener('click', function (e) {
                    if (e.target.tagName === 'INPUT') {
                        e.stopPropagation();

                        const levels = mainMenu.querySelectorAll('.main_menu-levels-item input');

                        for (const l of levels) {
                            const levelItem = l.parentElement;

                            if (l.checked) {
                                levelItem.classList.remove('main_menu-levels-item-regular');
                                levelItem.classList.add('main_menu-levels-item-checked');
                            } else {
                                levelItem.classList.remove('main_menu-levels-item-checked');
                                levelItem.classList.add('main_menu-levels-item-regular');
                            }
                        }
                    }
                });

                mainMenu.querySelector('form').addEventListener('submit', function (e) {
                    e.preventDefault();

                    const levels = mainMenu.querySelectorAll('.main_menu-levels-item input');
                    let level = 0;

                    for (const l of levels) {
                        if (l.checked) {
                            level = l.value;
                            break;
                        }
                    }

                    app.state.diffLevel = level;

                    app.renderNextScreen();
                })
            },
            game: function () {
                const appBlock = document.querySelector('.app');
                appBlock.textContent = '';

                appBlock.appendChild(templateEngine({
                    tag: 'div',
                    cls: 'game',
                    content: 'Экран "Игровое поле"'
                }))
            }
        },
        renderScreen: function (screenName) {
            if (!screenName) {
                throw new Error("Требуется передать наименование экрана");
            }

            if (!this.screens[screenName]) {
                throw new Error(`Экрана ${screenName} не существует`);
            }

            this.state.stage = screenName;  //запомним текущее состояние

            this.screens[screenName]();
        },
        renderNextScreen: function () {
            if (this.state.stage === 'main_menu') {
                this.renderScreen('game');
            }
        }
    }

    app.screens['main_menu'].bind(app);

    return app;
}