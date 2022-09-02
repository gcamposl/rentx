import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterUserColumnAvatar1662125878862 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE users ALTER COLUMN avatar DROP NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE users ALTER COLUMN avatar ADD NOT NULL`
    );
  }
}
