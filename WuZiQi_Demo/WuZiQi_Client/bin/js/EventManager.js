var utils;
(function (utils) {
    var EventManager = /** @class */ (function () {
        function EventManager() {
        }
        EventManager.push = function (type, caller, callback, args) {
            if (null == callback) {
                console.error("EventManager:push callback = null");
                return;
            }
            this._handlers[type] = this._handlers[type] || [];
            this._handlers[type].push({ callback: callback, caller: caller, preArgs: args });
        };
        EventManager.popWithEventType = function (type) {
            delete this._handlers[type];
        };
        EventManager.popWithCaller = function (caller) {
            for (var type in this._handlers) {
                var handlers = this._handlers[type];
                for (var key in handlers) {
                    if ((handlers[key]).caller == caller) {
                        delete handlers[key];
                    }
                }
            }
        };
        EventManager.popWithCallback = function (callback) {
            //TODO
            for (var type in this._handlers) {
                var handlers = this._handlers[type];
                for (var key in handlers) {
                    if ((handlers[key]).callback == callback) {
                        delete handlers[key];
                    }
                }
            }
        };
        EventManager.call = function (type) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var handlers = this._handlers[type];
            if (null == handlers) {
                return;
            }
            for (var key in handlers) {
                var handler = handlers[key];
                var finalArgs = [];
                if (undefined != handler.preArgs) {
                    finalArgs = finalArgs.concat(handler.preArgs);
                }
                if (undefined != args) {
                    finalArgs = finalArgs.concat(args);
                }
                handler.callback.apply(handler.caller, finalArgs); //已经分配内存的handler此时执行apply()时，设置this操作符，然后执行回调函数。
            }
        };
        EventManager.clearAll = function () {
            for (var type in this._handlers) {
                var handlers = this._handlers[type];
                for (var key in handlers) {
                    delete handlers[key];
                }
            }
            this._handlers = {};
        };
        EventManager._handlers = {};
        return EventManager;
    }());
    utils.EventManager = EventManager;
})(utils || (utils = {}));
//# sourceMappingURL=EventManager.js.map