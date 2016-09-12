/**
 * Created by lcortes on 12/09/16.
 */
(function () {
    'use strict';

    angular
        .module('actinver_todolist')
        .controller('TaskController', ['TaskService', '$state', TaskController]);

    function TaskController(TaskService, $state) {
        var vm = this;
        vm.title = 'TaskController';
        vm.showAddTask = showAddTask;
        vm.showEditTask = showEditTask;
        vm.successAddTask = successAddTask;
        vm.successEditTask = successEditTask;
        vm.successDelTask = successDelTask;

        vm.obtainTasks = obtainTasks;
        vm.deleteTask = deleteTask;
        vm.showTask = showTask;


        vm.tasks = [];
        vm.task = {};

        vm.ok = false;

        //PROPERTIES
        vm.addingTask = false;
        vm.editingTask = false;
        activate();

        ///////////////

        function showTask(task){
            $state.go('detail', {taskid: task.Id})
        }

        function obtainTasks() {
            TaskService.getTasks()
                .then(function(result){
                    console.info(result);
                    vm.tasks = result.data;
                })
        }

        function deleteTask(task) {
            var asegurar = confirm('¿Desea Eliminar?');
            if(asegurar){
                TaskService.deleteTask(task)
                    .then(function(result){
                        vm.obtainTasks();
                    });
            }
        }

        function activate() {
            vm.obtainTasks();
        }

        function showAddTask(){
            vm.addingTask = true;
        }

        function successAddTask(){
            vm.addingTask = false;
            alert('agregado');
            vm.obtainTasks();
        }

        function successEditTask(){
            vm.addingTask = false;
            alert('editado');
        }

        function successDelTask(){
            vm.addingTask = false;
            alert('eliminado');
        }

        function showEditTask(task){
            vm.addingTask = true;
            vm.editingTask = true;
            vm.task = task;
        }
    }

})();

