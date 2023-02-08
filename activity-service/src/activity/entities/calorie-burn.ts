import { 
    Column, 
    Entity, 
    Index,
    PrimaryGeneratedColumn 
  } from "typeorm";
  
  @Entity()
  export class CalorieBurn {
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
  