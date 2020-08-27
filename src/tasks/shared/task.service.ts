import { Injectable } from '@nestjs/common';
import { Task } from './task';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TaskService {

    constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) { } /* Linha que faz a integração com o banco*/

    async getAll() {
        return await this.taskModel.find().exec();
        // return this.tasks;
    }

    async getById(id: string) {
        return await this.taskModel.findById(id).exec();
        // const task = this.tasks.find((value) => value.id == id);
        // return task;
    }

    async create(task: Task) {
        const createTask = new this.taskModel(task);
        return await createTask.save();
        //  let lastId = 0;
        //  if (this.tasks.length > 0) {
        //      lastId = this.tasks[this.tasks.length - 1].id;
        //  }

        //  task.id = lastId + 1;
        //  this.tasks.push(task);

        //  return task;
    }

    async update(id: string, task: Task) {
        await this.taskModel.updateOne({ _id: id}, task).exec();
        return this.getById(id);
        // const taskArray = this.getById(task.id);
        // if (taskArray) {
        //     taskArray.description = task.description;
        //     taskArray.completed = task.completed;
        // } /* Pode coloca ruma excessao se nao encontrar */

        // return taskArray;
    }

    async delete(id: string) {
        return await this.taskModel.deleteOne({ _id: id}).exec();
        // const index = this.tasks.findIndex((value) => value.id == id);
        // this.tasks.splice(index, 1);
    }
 }
