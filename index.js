// Accordéon

class ShAccordion extends MinzeElement {
    reactive = [['open', false]]

    toggleOpen = () => this.open = !this.open

    html = () =>  `
        <div class="title">
            <slot name="title"></slot>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="currentColor" class="arrow">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
        </div>
        <slot name="content"></slot>
    `
    
    css = () => `
        :host {
            width: 45%;
            background: rgb(228 228 2);
            font-family: sans-serif;
            border-radius: 4px;
            cursor: pointer;
        }
        .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: bold;
            user-select: none;
            padding: 16px;
        }
    
        .arrow {
            transition: transform 0.2s ease-in-out;
            transform: ${this.open ? 'rotate(180deg)' : 'rotate(0)'};
        }
    
        ::slotted([slot=content]) {
            display: ${this.open ? 'block' : 'none'};
            border-top: 2px solid black;
            padding: 16px;
        }
    `
    eventListeners = [['.title','click', this.toggleOpen]]
}

// define() permet d'enregistrer le composant ShAccordion

ShAccordion.define()

// Interrupteur

class ShSwitch extends MinzeElement {
    reactive = [['active', false]]

    toggleActive = () => this.active = !this.active

    html = () => `
    <div class="indicator"></div>
    `

    css = () => `
        :host {
            width: 48px;
            height: 25px;
            display: flex;
            background: rgb(255 255 255);
            border: 1px solid rgb(228 228 231);
            border-radius: 9999px;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            padding: 2px;
        }

        .indicator {
            width: 20px;
            height: 20px;
            background: ${this.active ? 'rgb(161, 161, 170)' : 'rgb(228 228 231)'};
            border-radius: 9999px;
            position: relative;
            transform: translateX(${this.active ? 'calc(100% + 2px)' : '0'});
            transition: all 0.2s ease-in-out;
        }
    `

  eventListeners = [[this, 'click', this.toggleActive]]
}

ShSwitch.define()

// Cart

class ShCard extends MinzeElement {
    attrs = ['top-line','headline','value','background']

    html = () => `
        <div class="top-line">${this.topLine ?? ''}</div>
        <div class="headline">${this.headline ?? ''}</div>
        <div class="value">${this.value ?? ''}</div>
        
    `

    css = () => `
        :host {
            width: 200px;
            height: 180px;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-grow: 1;
            background: ${this.background ?? 'transparent'};
            font-family: sans-serif;
            border-radius: 2px;
            padding: 15px 24px 16px;
        }

        .top-line {
            font-size: 16px;
            margin-bottom: 10px;
        }

        .headline {
            font-size: 25px;
            font-weight: bold;
        }

        .value {
            font-size: 32px;
            font-weight: bold;
            margin-top: auto;
        }

        ::slotted(*) {
            margin-top: auto;
            margin-bottom: 12px;
        }
    `
}

ShCard.define()