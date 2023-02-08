import { Subscriber } from "src/trainer/entities/subscriber.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  handle: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  fullName: string;

  @Column()
  imageUrl: string;

  @Column()
  phoneNumber: string;

  @Column()
  height: number;

  @Column()
  weight: number;

  @Column()
  dob: Date;

  @OneToMany(() => Subscriber, (subscriber) => subscriber.user)
  subscribedTo: Subscriber[];
}
