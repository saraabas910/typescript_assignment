class User {
    public id: number;
    public name: string;
    public email: string;
    private password: string; 
    public phone: string;
    private age: number;    
   notebooks: NoteBook[];
   

    constructor(id: number, name: string, email: string, password: string, phone: string, age: number) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
        this.notebooks = [];
    }

    public setAge(age: number): void {
        if (age < 18 || age > 60) {
            throw new Error("Validation Error: Age must be between 18 and 60.");
        }
        this.age = age;
    }

    public getAge(): number {
        return this.age;
    }

    public displayInfo(): void {
       
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`Age: ${this.age}`);
    }

    addNoteBook(notebook: NoteBook): void {
        this.notebooks.push(notebook);
    }
}
const user1 = new User(1, "sara", "saara@gmail.com", "sara123", "012345679", 25);
console.log(user1.getAge());
class Admin extends User {

    constructor(id: number, name: string, email: string, password: string, phone: string, age: number) {
        super(id, name, email, password, phone, age);
    }
   public manageNotes(): void {
        console.log(`Admin ${this.name} is now managing notes`);
    }
}

const admin1 = new Admin(1, "Admin User", "ss@gmail.com", "Admin123", "01115892", 30);
console.log(admin1);




class Note {
  id: number;
   title: string;
  content: string;
    userId: number;
    auther: User;
  constructor(id: number, title: string, content: string, userId: number, auther: User) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.userId = userId;
    this.auther = auther;
  }

  preview(): string {
    return `${this.title}: ${this.content}`;
  }




}

class NoteBook{


    note:Note[];
    constructor() {
        this.note = [];
    }
     addNote(note:Note): void {
        const note1 =new Note(note.id, note.title, note.content, note.userId, note.auther);
        this.note.push(note1);
    }
    removeNote(noteId: number): void {
        this.note.splice(noteId, 1);
    }
}

class storage <T> {
 items: T[];
    constructor() {
        this.items = [];
    }
    addItem(item: T): void {
        this.items.push(item);
    }

    getItems(): T[] {
        return this.items;
    }

    removeItem(item: T): void {
        this.items = this.items.filter(i => i !== item);
    }
}