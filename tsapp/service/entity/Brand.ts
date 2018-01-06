import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Brand {
  @PrimaryGeneratedColumn() autokid: number;

  @Column({ type: 'varchar', length: 100, default: '' }) name: string;

  @Column({ type: 'varchar', length: 1024, default: '' }) logo: string;
}
