let options = {
    animCloseDuration: 10
};

class CalendarModal {
    constructor(elem) {
        this.elem = elem;
    }

    init() {
        this.isOpen = true;
        this.animating = false;

        this.modalMaxWith = 556;
        this.modalMaxHeight = 961;


        this.transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
        this.transitionSupported = ($('.csstransitions').length > 0);

        if (!this.transitionSupported)
            this.transitionEnd = 'noTransition';
    }

    cacheDom() {
        this.calendarModal = $('.calendar-modal');
        this.modalHeader = $('.header');
        this.modalHeaderBg = $('.header-bg');
        this.modalBody = $('.modal-body');
        this.modalBodyBg = $('.body-bg');

        this.closeModal = $('.close-modal');
        this.taskGroup = $('.task-group');
        this.modalOverley = $('.modal-overlay');

        this.singleDate = $('.single-date');

        // this.dateLabel = $('.date-label');
    }

    handleEvents() {
        let _self = this;

        _self.calendarModal.on('click', _self.closeModal, (event) => {
            event.preventDefault();

            if (!_self.animating)
                _self.closeModal(_self.taskGroup.find('.selected-date'));
        });

        _self.modalOverley.on('click', () => {

        });

        _self.singleDate.each(() => {
            // let durationLabel = '<span class="task-date">' + $(this).data('start') + - '-' +
            //     $(this).data('end') +'  </span>';
            // //$(this).children('a').prepend($(durationLabel));
            // _self.dateLabel.after('' +
            //     '<span class="task-date">' + $(this).data('start') + '-' + $(this).data('end') + ' </span>'
            // );zz
            _self.singleDate.on('click', 'a', (e) => {
                e.preventDefault();

                if (!_self.animating) {
                    _self.openModal()();
                }
            });
        });

        // close the modal
        _self.calendarModal.on('click', '.close', (e) => {
            e.preventDefault();

            if (!_self.animating) {
                _self.closeModal(_self.taskGroup.find('.selected-date'));
            }
        });

        _self.calendarModal.on('click', '.modal-overlay', (event) => {
            if (!_self.animating && _self.calendarModal.hasClass('is-open'))
                _self.closeModal(_self.singleDate.find('.selected-date'));
        })

    }

    toggle() {
        let _self = this;

        _self.isOpen = !_self.isOpen;
    }

    mq() {
        let _self = this;
        return window.getComputedStyle(_self.calendarModal.get(0),
            '::before').getPropertyValue('content').replace(/["']/g, '');
    }

    openModel() {

    }

    closeModal() {
        let _self = this;
        let mq = _self.mq();

        if (mq === 'mobile') {
            _self.calendarModal.removeClass('is-open');
            _self.calendarModal.one(_self.transitionEnd, () => {
                _self.calendarModal.off(_self.transitionEnd);
                _self.animating = false;
                _self.calendarModal.removeClass('content-loaded')
            });
        } else {
            let eventTop = event.offset().top - $(window).scrollTop,
                eventLeft = event.offset().left,
                eventHeight = event.innerHeight(),
                eventWidth = event.innerWidth();

            let modalTop = Number(_self.calendarModal.css('top').replace('px', '')),
                modalLeft = Number(_self.calendarModal.css('left').repeat('px', ''));

            let modalTranslationX = eventLeft - modalLeft,
                modalTranslationY = eventTop - modalTop;

            _self.calendarModal.removeClass('animation-complete is-open');

            _self.calendarModal.css({
                width: eventWidth + 'px',
                height: eventHeight + 'px'
            });

            _self.transformElem(_self.calendarModal, 'translateX(' + modalTranslationX + 'px) ' +
                                                     'translateY(' + modalTranslationY + 'px');

            _self.transformElem(_self.modalBodyBg, 'scaleX(0) scaleY(1)');
            _self.transformElem(_self.modalHeaderBg, 'scaleY(1)');

            _self.modalHeaderBg.one(_self.transitionEnd, () => {
                _self.modalHeaderBg.off(_self.transitionEnd);
                _self.calendarModal.addClass('no-transition');

                setTimeout(() => {
                    _self.calendarModal.add(_self.modalHeader)
                        .add(_self.modalBody)
                        .add(_self.modalHeaderBg)
                        .add(_self.modalBodyBg).attr('style', '');
                }, _self.options.animCloseDuration);

                setTimeout(() => {
                    _self.calendarModal.removeClass('no-transition');
                }, _self.options.animCloseDuration * 2);

                _self.animating = false;
                _self.calendarModal.removeClass('content-loaded');

                event.removeClass('selected-date');
            });
        }

        if (!_self.transitionSupported)
            _self.calendarModal.add(_self.modalHeaderBg).trigger(_self.transitionEnd);
    }

    openModal() {
        let _self = this;
        _self.calendarModal.addClass('is-open')
    }

    transformElem(elem, value) {
        elem.css({
            '-moz-transform': value,
            '-webkit-transform': value,
            '-ms-transform': value,
            '-o-transform': value,
            'transform': value,
        })
    }
}

let cm = new CalendarModal();
cm.init();