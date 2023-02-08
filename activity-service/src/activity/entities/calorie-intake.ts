import { 
    Column, 
    Entity, 
    Index,
    PrimaryGeneratedColumn 
  } from "typeorm";
  
  @Entity()
  export class CalorieIntake {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    value: number;
  
    @Column()
    createdAt: Date;
  
    @Index()
    @Column()
    userId: string;
  }
  