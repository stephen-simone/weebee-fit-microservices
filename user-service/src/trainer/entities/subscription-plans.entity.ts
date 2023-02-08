import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Trainer } from "./trainer.entity";

@Entity()
export class SubscriptionPlan {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  increment: string;

  @ManyToOne(() => Trainer, (trainer) => trainer.subscriptionPlans)
  trainer: Trainer;
}
