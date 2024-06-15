import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './models/users.model';
import { User as UserInterface } from './interfaces/user.interface';
import { UserInput } from './dto/user.dto';

@Resolver()
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Query((returns) => User)
  async getUser(@Args('id', { type: () => String}) id: string): Promise<User> {
    const user = await this.userService.findOneById(id)
    return this.toGraphQl(user);
  }

  @Mutation((returns) => User)
  async createUser(@Args('user', { type: () => UserInput}) user: UserInput): Promise<User> {
    const newUser = await this.userService.create(user);
    return this.toGraphQl(newUser);
  }

  private toGraphQl(user: UserInterface): User {
    return {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      fullName: `${user.firstName} ${user.lastName}`,
      email: user.email,
      phone: user.phone,
    }
  }
}
