import { Todo } from "es6-todo";
class quantum {
    constructor() {}

    initComponents() {
        this.app = new App();
    }
    init() {
        this.cacheDom();
        this.handleEvents();

        this.addTodo();
        this.addComment();
        this.removeComment();
        this.removeTodo();
        this.removeAll();

        this.todo = new Todo();

        this.isOpen = true;

        this.document = $(document);

        this.support = {animations: Modernizr.cssanimations()};
        this.animEndEventNames = {
            'WebkitAnimation': 'webkitAnimationEnd', 'OAnimation': 'oAnimationEnd',
            'msAnimation': 'MSAnimationEnd', 'animation': 'animationend'
        };

        this.animendEventName = this.animEndEventNames[Modernizr.cssanimations()];
    }

    cacheDom() {
        this.body = $('body');
        this.newTaskBtn = $('.new-task-btn');
        this.addTaskBtn = $('.add-task-btn');
        this.closeNewTaskBtn = $('.new-task-dialog .close-btn');
        this.closeTaskCommentBtn = $('.task-comment .close-btn');

        this.newTaskDlg = $('.new-task-dialog');
        this.todosList = $('.todos-list');
    }

    handleEvents() {
        let _self = this;

        _self.newTaskBtn.on('click', () => {
            alert('you clicked me');
        });

        _self.addTaskBtn.on('click', () => {
            Todo.renderModal();
        });

        _self.closeNewTaskBtn.on('click', () => {
            Todo.remove();
        });

        _self.closeTaskCommentBtn.on('click', () => {

        });

        _self.document.on('keydown', (ev) => {
            let keyCode = ev.keyCode || ev.which;

            if (keyCode === 27 && _self.isOpen) {
                _self.toggle();
            }
        })
    }

    addTodo() {}
    addComment() {}
    removeComment() {}
    removeTodo() {}
    removeAll(id) {}

    initComponents() {

    }
}

let theme = new quantum();
theme.initComponents();

class todo {
    init() {}
}

