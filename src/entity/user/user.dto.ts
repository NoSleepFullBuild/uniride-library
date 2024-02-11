import { BaseDto } from "../base/base.dto";

export class UserDto extends BaseDto {
    firstname: string;
    lastname: string;
    username: string;
    role: string;
    email: string;
    phoneNumber: string;
    vehicle: string | null;
    rating: number;
}