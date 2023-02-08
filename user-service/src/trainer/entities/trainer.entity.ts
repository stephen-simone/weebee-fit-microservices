import { User } from "src/user/entities/user.entity";
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Subscriber } from "./subscriber.entity";
import { SubscriptionPlan } from "./subscription-plans.entity";

@Entity()
export class Trainer {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  description: string;

  @Column()
  subscriberCount: number;

  @Column()
  numberOfWorkouts: number;

  @Index()
  @Column()
  stripeId: string;

  @OneToOne(() => User)
  @JoinColumn()
  profile: User;

  @OneToMany(() => Subscriber, (subscriber) => subscriber.trainer)
  subscribers: Subscriber[];

  @OneToMany(() => SubscriptionPlan, (subscriptionPlan) => subscriptionPlan.trainer)
  subscriptionPlans: SubscriptionPlan[];
}
