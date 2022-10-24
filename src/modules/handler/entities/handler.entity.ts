import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'data' })
export class Data {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: true })
  jobName: string;

  @Column({ nullable: true })
  ppeName: string;

  @Column({ nullable: true })
  allow: string;
}
