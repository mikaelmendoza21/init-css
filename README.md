# init
A simple starter web app theme using vanilla CSS and OO Javascript. 
Mobile-first.
Made up of decoupled modules *init-CSS* (styling) and *init-js* (components) .


### Animated Classes
**Fade In classes**

* fadeIn

* delayedFade

### Javascript Components

* **Modal**

    A modal or "pop up" shown within the browser window.

    *Arguments*:  
    
    * title

    * content

    * modalContainerClasses

    * headerClasses

    * titleClasses

    * closeButtonClasses

    * closeButtonContainerClasses

    * contentClasses

    * onOpenCallback

    * onCloseCallback


    *Sample Initialization:*

    `let modal = new Modal({title: Hello, content: This is a modal.});`