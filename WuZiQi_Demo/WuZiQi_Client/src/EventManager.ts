module utils{
    export class EventManager{
        private static _handlers = {}
        
        public static push(type: EventType, caller: any, callback: Function, args?: Array<any>){
            if(null == callback){
                console.error("EventManager:push callback = null")
                return
            }
            this._handlers[type] = this._handlers[type] || []
            this._handlers[type].push({callback:callback, caller:caller, preArgs:args})
        }
        
        public static popWithEventType(type: EventType){
            delete this._handlers[type]
        }
        
        public static popWithCaller(caller: any){
            for(var type in this._handlers){
                let handlers = this._handlers[type]
                for(var key in handlers){
                    if((handlers[key]).caller == caller){
                        delete handlers[key]
                    }
                }
            }
        }
        
        public static popWithCallback(callback: Function){
            //TODO
            for(var type in this._handlers){
                let handlers = this._handlers[type]
                for(var key in handlers){
                    if((handlers[key]).callback == callback){
                        delete handlers[key]
                    }
                }
            }
        }
        
        public static call(type: EventType, ...args: any[]){
            let handlers = this._handlers[type]
            if(null == handlers){
                return
            }
            
            for (var key in handlers) {
                let handler = handlers[key as any]
                let finalArgs : any[] = []
                if (undefined != handler.preArgs)
                {
                    finalArgs = finalArgs.concat(handler.preArgs)
                }
                if (undefined != args)
                {
                    finalArgs = finalArgs.concat(args)   
                }
                handler.callback.apply(handler.caller, finalArgs) //已经分配内存的handler此时执行apply()时，设置this操作符，然后执行回调函数。
            }
        }

        public static clearAll(): void {
            for(var type in this._handlers){
                let handlers = this._handlers[type]
                for(var key in handlers){
                    delete handlers[key]
                }
            }
            this._handlers = {}
        }
    }
}