class Matematica {
    static soma(a, b) { //METODOS STATIC NÃO ENXERGAM O RESTANTE DA CLASSE. SERVEM GERALMENTE SOMENTE PARA RETORNAR UM RESULTADO.
        return a + b;
    }
}

console.log(Matematica.soma(1, 2));

class List {
    constructor() {
        this.data = [];
    }
    Add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class ToDoList extends List {
    constructor() {
        super() //CHAMANDO O CONSTRUCTOR DA CLASSE PAI.
        this.usuario = 'Michel';
    }
    mostraUsuario() {
        console.log(this.usuario);
    }
}

var MinhaLista = new ToDoList();
document.getElementById("novoToDo").onclick = function () {
    MinhaLista.Add("Novo toDos");
}

MinhaLista.mostraUsuario();