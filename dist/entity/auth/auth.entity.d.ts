import { BaseEntity } from "../base/base.entity";
export declare class Auth extends BaseEntity {
    id: number;
    email: string;
    username: string;
    role: string;
    password: string;
}
