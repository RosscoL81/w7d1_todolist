import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
        {name:"Shopping", priority: "High"},
        {name: "Clean Bathroom", priority: "Medium"},
        {name: "Wash Car", priority: "Low"}],
      newItem: ""
    },
    methods: {
      saveNewItem: function() {
        this.todos.push({
          name: this.newItem,
          priority: ""
        });
        this.newItem = ""
        ;
      }
    }
  });
});
