export function Sticker(config: any): Function {
  //target.prototype.stickers = ['GitHub', 'Google', 'Mozilla', 'Angular'];

  return function(target: any): void {
    target.prototype.stickers = config['stickers'];
  }
}

export function HookLogger(config?: any): Function {
  return function(target: any) {
    const componentName = target.name;
    const defaultHooks: string[] = [
      'ngOnChanges',
      'ngOnInit',
      'ngDoCheck',
      'ngAfterContentInit',
      'ngAfterContentCheck',
      'ngAfterViewInit',
      'ngAfterViewChecked',
      'ngOnDestroy'
    ];

    let hooksToBeLogged = config && config['hooks'] || defaultHooks;

    hooksToBeLogged.forEach((hookToBeLogged: string) => {
      const original = target.prototype[hookToBeLogged];
      target.prototype[hookToBeLogged] = function(...args: any) {
        console.log(`Component name: ${componentName} | Hook name: ${hookToBeLogged} | `, ...args);
        original && original.apply(this, args);
      }
    });
  }
}

export function Readonly(value: any ): Function {
  return function(target: any, key: string) {
    Object.defineProperty(target, key, {
      set: () => target.key = value,
      get: () => value,
      configurable: false
    });
  }
}
