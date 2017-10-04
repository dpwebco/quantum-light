
class TodoModal {
    constructor() {}

    init() {}
    cacheDom() {
        this.taskNameInput = $('.task-name-input');
        this.taskDescription = $('.task-description');
        this.userName = $('.user-name');


        this.TaskNameVal = this.taskNameInput.val();
        this.taskDescriptionVal = this.taskDescription.val();
        this.userNameVal = this.userName.val();

        this.calendarIcon = $('.calendar-icon');
        this.calendarModal = $('.calendar-modal');
        this.CalendarModal = new CalendarModal();

    }
    handleEvents() {
        let _self = this;

        _self.calendarIcon.on('click', () => {
            _self.CalendarModal.openModal();
        })
    }
}

let newTaskModal = TodoModal();
newTaskModal.init();
