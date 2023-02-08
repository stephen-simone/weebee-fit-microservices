import { 
  Column, 
  Entity, 
  Index,
  PrimaryGeneratedColumn 
} from "typeorm";

@Entity()
export class CompletedWorkout {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  createdAt: Date;

  @Index()
  @Column()
  userId: string;
}
