export class Employee {
    id: number;
    firstName: string;
    email: string;
    mobile: number;
    address?: Address[];
    gender: string;
    deptName: string;
    hireDate: Date;
    permenent: string;
}

export class Address {
    city: string;
    state: string;
    pinCode: number;
}
