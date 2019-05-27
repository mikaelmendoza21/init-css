// Object classes
class Modal {
    constructor(args) {
        if (args.title === null || args.title === undefined){
            args.title = '';
        }
        this.modal = document.createElement('div');
        this.modal.className = 'modal';
        this.modal.innerHTML += 
            '<div class="modal-header">' +
                `<span class="modal-title">${args.title}</span>` +
                `<span class="modal-close"><button class="close-modal-btn button">X</button></span>` +
            '</div>' +
            `<div class="modal-content">${args.content}</div>`;
        document.body.appendChild(this.modal);
        var closeButton = this.modal.getElementsByClassName('close-modal-btn')[0];
        closeButton.addEventListener('click', (e) => this.hide());
    }
    hide(){
        var parent = this.modal.parentNode;
        parent.removeChild(this.modal);
    }
}