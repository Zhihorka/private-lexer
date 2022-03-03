class HashTable{
    size: number;
    occupiedSlots: number;
    bucket: any[]
    //Constructor
    constructor(size: number){
        //Size of the HashTable
        this.size = size;
        //Current entries in the table
        //Used while resizing the table when half of the table gets filled
        this.occupiedSlots = 0;
        //Array of HashEntry objects (by deafult all None)
        this.bucket = [];
        for (let i=0; i<this.size; i++){
            this.bucket[i]=null;
        }
    }
    //Helper Functions

    _hash(key:string): number {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return Math.floor(Math.random() * (this.size + 1)) ;
    }

    set(key: string, value: string) {
        const index = this._hash(key);
        if (this.bucket[index]) {
            for (let i = 0; i < this.bucket[index].length; i++) {
                if (this.bucket[index][i][0] === key) {
                    this.bucket[index][i][1] = value;
                    return;
                }
            }
            this.bucket[index].push([key, value]);
        } else {
            this.bucket[index] = [];
            this.bucket[index].push([key, value]);
        }
        this.occupiedSlots++;
    }

    get(key:string) {
        const index = this._hash(key);
        if (this.bucket[index]) {
            for (let i = 0; i < this.occupiedSlots; i++) {
                if (this.bucket[index][i][0] === key) {
                    return this.bucket[index][i][1];
                }
            }
        }
        return undefined;
    }

    getSize(){
        return this.occupiedSlots;
    }
    isEmpty(){
        return this.getSize() === 0;
    }
    printTable(){
        console.log(this.bucket);
    }
    getTable(){
        return this.bucket;
    }
}

export class HashTableWithList extends  HashTable{
    _hash(key:string): number {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }
}

export class HashTableWithProduct extends  HashTable{
    _hash(key:string): number {
        let hash = 0;
        let i = 0;
        for (i; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash*i % this.size;
    }
}