
export class TodoList {

    constructor(){

        //this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo( todo ){

        this.todos.push( todo );
        this.guardarLocalStorage();

    }

    eliminarTodo( id ){
        //validacion para excluir el ID que estoy recibiendo para eliminarlo del arreglo a traves del traspaso a un nuevo arreglo
       this.todos = this.todos.filter( todo => todo.id != id);
       this.guardarLocalStorage();

    }

    marcarCompletado( id ){

        for( const todo of this.todos){

            if( todo.id == id ){

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;

            }
        }
    }

    eliminarCompletados(){

        this.todos = this.todos.filter( todo => !todo.completado); //false
        this.guardarLocalStorage();

    }

    guardarLocalStorage(){

        localStorage.setItem( 'todo', JSON.stringify(this.todos) );

    }

    cargarLocalStorage(){
        
        //if( localStorage.getItem('todo') ){
        //    this.todos = JSON.parse(localStorage.getItem('todo'));
        //}else{
        //    this.todos = [];
        //}

        this.todos = ( localStorage.getItem('todo') ) 
                        ? JSON.parse(localStorage.getItem('todo')) 
                        : [];

    }

}