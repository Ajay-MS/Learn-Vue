var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        todo: null,
        editTodo: null,
        todos: [{
            content: 'The First Todo',
            finished: false,
            isEdited: false
        }]
    },
    methods: {
        add(todo) {
            if(!this.todoIsValid) {
                return;
            }

            this.todos.push({
                content:todo,
                finished: false
            });
            this.todo = null;
        },
        edit(todo) {
            this.editTodo = todo.content;
            todo.isEdited=true;
        },
        remove(todo) {
            this.todos = this.todos.filter((item) => {
                return item != todo
            });
        },
        update(todo) {
            if(!this.editTodoIsValid) {
                return;
            }

            todo.content = this.editTodo;
            todo.isEdited = false;
        }
    },
    computed: {
        todoIsValid() {
           return !!this.todo; 
        },
        editTodoIsValid() {
            return !!this.editTodo;
        },
        isBeingEdited() {
            return this.todos.filter(todo => todo.isEdited).length > 0;
        }
    }
})