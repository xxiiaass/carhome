import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Car {
  @PrimaryGeneratedColumn() autokid: number;

  name: string;
  /*
    @Column() brand: number;
  
    @Column() type: number;
  
    @Column({
      length: 100
    })
    size: string;
  
    @Column() price: number;
  
    @Column() price_hight: number;
  
    @Column() is_sale: boolean;*/
}
