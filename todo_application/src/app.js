var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        todo: null,
        todos: []
    },
    methods: {
        add(todo) {
            if(!this.todoIsValid) {
                return;
            }
            
            this.todos.push(todo);
            this.todo = null;
        },
    },
    computed: {
        todoIsValid() {
           return !!this.todo; 
        }
    }
})