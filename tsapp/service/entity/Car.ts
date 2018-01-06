import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Car {
  @PrimaryGeneratedColumn() autokid: number;

  @Column({ type: 'varchar', length: 100, default: '' }) name: string;

  @Column({ type: 'int', default: 0 }) brand: number;

  @Column({ type: 'int', default: 0 }) type: number;

  @Column({ type: 'varchar', length: 100, default: '' }) size: string;

  @Column({ type: 'int', default: 0 }) price: number;

  @Column({ type: 'int', default: 0 }) price_hight: number;

  @Column({ type: 'tinyint', default: 1 }) is_sale: boolean;
}
