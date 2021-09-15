
class QRCodeElement extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.content_div = document.createElement('div');
        this.shadowRoot.appendChild(this.content_div);
        this.slot_ele = document.createElement('slot');
        this.shadowRoot.appendChild(this.slot_ele);
    }

    connectedCallback(){
        let width = Number(this.hasAttribute('width') ? this.getAttribute('width') : 128);
        let height = Number(this.hasAttribute('height') ? this.getAttribute('height') : 128);
        let colorDark = this.hasAttribute('colordark') ? this.getAttribute('colordark') : "#000000";
        let colorLight = this.hasAttribute('colorlight') ? this.getAttribute('colorlight') : "#ffffff";
        let style = this.hasAttribute('style') ? this.getAttribute('style') : "";
        this.content_div.style = style;
        this.content_div.style["width"] = width + "px";
        this.content_div.style["height"] = height + "px";
        let that = this;
        this.slot_ele.addEventListener('slotchange', e => {
            let text = that.innerText;
            let qrcode = new QRCode(this.content_div, {
                width,
                height,
                colorDark,
                colorLight,
                correctLevel : QRCode.CorrectLevel.H,
                text
            });
            this.slot_ele.style.display = "none";
            //this.content_div.children[0].setAttribute("width", this.content_div.style.width);
            //this.content_div.children[0].setAttribute("height", this.content_div.style.height);
        });
    }

    disconnectedCallback() {

    }

    attributeChangedCallback(name, oldValue, newValue) {
        //this.displayVal.innerText = this.value;
    }

    get layout(){

    }

    set layout(x){

    }

    get value(){
        //dot code
    }

    set value(x){

    }

}

customElements.define('qr-code', QRCodeElement);

