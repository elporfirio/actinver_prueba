/**
 * Created by elporfirio on 10/09/16.
 */

(function () {
    'use strict';

    angular
        .module('actinver_todolist')
        .component('taskForm', {
            bindings: {
                task: '=?',
                onSuccess: '&?',
                onUpdate: '&?',
                onDelete: '&?',
                editing: '=?'
            },
            templateUrl: 'views/task.frm.html',
            controller: ['TaskService', Controlador]
        });

    function Controlador(TaskService){
        var vm = this;

        vm.task = {
            title: '',
            description: '',
            due: '',
            done: false
        };

        vm.submitTask = function(task){
            if(vm.editing){
                vm.editTask(task, task.Id);
            } else {
                vm.addTask(task);
            }
        };

        vm.addTask = function(task){
            console.log(task);
            TaskService.createTask(task)
                .then(function(response){
                    console.info(response);
                    vm.onSuccess();
                });
        };

        vm.editTask = function(task, taskId){
            TaskService.updateTask(task, taskId)
                .then(function(response){
                    console.info(response);
                    vm.onUpdate();
                });
        };

        vm.delTask = function (task, taskId) {
            TaskService.deleteTask(task, taskId)
                .then(function(response){
                    console.info(response);
                    vm.onDelete();
                });
        }
    }

})();



