import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Trainer } from "./trainer.entity";

@Entity()
export class Subscriber {
  @PrimaryGeneratedColumn()
  id: string;
  
  @ManyToOne(() => Trainer, (trainer) => trainer.subscribers)
  trainer: Trainer;
  
  @ManyToOne(() => User, (user) => user.subscribedTo)
  user: User;
}
