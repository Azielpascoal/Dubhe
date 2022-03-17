import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1647478218794 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary :true,
                    },
                    {
                        name: "name",
                        type: "varchar" 
                    },
                    {
                        name: "lastname",
                        type: "varchar" 
                    },
                    {
                        name: "gender",
                        type: "varchar" 
                    },
                    {
                        name: "birthdate",
                        type: "varchar" 
                    },
                    {
                        name: "cpf",
                        type: "varchar" 
                    },
                    {
                        name: "phone",
                        type: "varchar" 
                    },
                    {
                        name: "email",
                        type: "varchar" 
                    },
                    {
                        name: "password",
                        type: "varchar" 
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default:"now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default:"now()"
                    }
                ] ,
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
