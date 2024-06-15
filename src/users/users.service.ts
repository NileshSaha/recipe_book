import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './models/users.model';
import { Model } from 'mongoose';
import { UserDocument } from './schemas/user.schema';
import { User as UserInterface } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) {}

  async create(user: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
  }): Promise<UserInterface> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async findOneById(id: string): Promise<UserInterface> {
    return this.userModel.findById(id).exec();
  }

  async findAll({firstName, lastName, email, phone}: {
    firstName?:string;
    lastName?:string;
    email?: string;
    phone?: string;
  }): Promise<UserInterface[]> {
    const filter: any = {};
    if (firstName) {
      filter.firstName = { $regex: firstName, $options: 'i' };
    }
    if (lastName) {
      filter.lastName = { $regex: lastName, $options: 'i' };
    }
    if (email) {
      filter.email = { $regex: email, $options: 'i' };
    }
    if (phone) {
      filter.phone = { $regex: phone, $options: 'i' };
    }
    return this.userModel.find(filter).exec();
  }

  async updateUser(id: string, user: {
    firstName?:string;
    lastName?:string;
    email?: string;
    phone?: string;
  }): Promise<UserInterface> {
    return this.userModel.findByIdAndUpdate(id, user, {new : true}).exec();
  }
}
