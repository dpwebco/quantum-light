'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OpenModalTest = function () {
    function OpenModalTest(elem) {
        _classCallCheck(this, OpenModalTest);
    }

    _createClass(OpenModalTest, [{
        key: 'init',
        value: function init() {
            this.cacheDom();
            this.handleEvents();
            this.openModal();
            this.closeModal();
        }
    }, {
        key: 'cacheDom',
        value: function cacheDom() {
            this.openModalBtn = $('.open-modal-btn');
            this.testModalBody = $('.test-modal-body');
            this.modalOverlay = $('.modal-overlay');
        }
    }, {
        key: 'handleEvents',
        value: function handleEvents() {
            var _self = this;
        }
    }, {
        key: 'openModal',
        value: function openModal() {
            var _self = this;
        }
    }, {
        key: 'closeModal',
        value: function closeModal() {
            var _self = this;
            var mq = _self.mq();

            _self.animating = true;

            if (mq === 'mobile') {
                _self.elem.removeClass('modal-is-open');
            }
        }
    }]);

    return OpenModalTest;
}();

var omt = new OpenModalTest();
omt.init();
//# sourceMappingURL=modal-test-dist.js.map