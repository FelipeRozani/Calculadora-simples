function Calculadora(){
    this.display = document.querySelector('.display');

    this.capturaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if(e.key === 'enter') return;

           this.resultNumDisplay();
        })
    }

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.apagaNumDisplay();
            if (el.classList.contains('btn-rem')) this.remNumDisplay();
            if (el.classList.contains('btn-result')) this.resultNumDisplay();
        });
    };

    this.resultNumDisplay = () => {
        try {
            const conta = eval(this.display.value)

            if (!conta) {
            alert('conta inválida');
            return;
            }

            this.display.value = conta;
        } catch {
            alert('conta inválida')
            return;
        }
    }

    this.addNumDisplay = el => {
        this.display.value += el.innerText
        this.display.focus();
    };
    this.apagaNumDisplay = () => this.display.value = ' ';
    this.remNumDisplay = () => this.display.value = this.display.value.slice(0, -1);

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };
}

const calculadora = new Calculadora();
calculadora.inicia();