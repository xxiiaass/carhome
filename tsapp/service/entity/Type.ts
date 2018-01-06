import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Type {
  @PrimaryGeneratedColumn() autokid: number;

  @Column({ type: 'varchar', length: 100, default: '' }) name: string;

  @Column({ type: 'int', default: 0 }) brand: number;

  @Column({ type: 'varchar', length: 100, default: '' }) price_range: string;

  @Column({ type: 'varchar', length: 1024, default: '' }) image: string;

}
