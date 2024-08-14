
export class User {

    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
    // Add the name property if it doesn't exist
    name?: string;

    constructor() {
        this.first_name = '';
        this.last_name = '';
        this.email = '';
        this.avatar = '';
    }
  
}
  