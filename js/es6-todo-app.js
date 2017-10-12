

class TodoApp {
    static init() {
        let transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
        let transitionSupported = ($('.csstransition').length > 0);
        if (!transitionSupported)
            transitionEnd = 'no-transition'
    }
    cacheDom() {
        this.newTaskBtn = $('.new-task-btn');
    }
    handleEvents() {}
}
// let tda = new TodoApp();
// tda.init();
TodoApp.init()
class AddTaskModal {
    init() {}
}