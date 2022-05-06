import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular";
export class user {
    nome: string;
    email: string;
    senha: string;
    telefone: string;
    cpf: string;
}

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    private _storage: Storage | null = null;

    constructor(private storage: Storage) {
        this.init();
    }

    async init() {
        console.log("INIT");
        //await this.storage.defineDriver(CordovaSQLiteDriver);
        const storage = await this.storage.create();
        this._storage = storage;
        console.log("DONE");
        //this.storageReady.next(true);
    }

    async getData() {
        console.log("GET DATA");
        return this._storage.get("mydatabase") || [];
    }

    async addData(id: string) {
        const storedData = await this.storage.get("mydatabase") || [];
        storedData.push(id);
        return this._storage.set("mydatabase", storedData);
    }

    public get(key: string) {
        return this._storage?.get(key);
    }

    public setUser(key: string, value: any) {
        this._storage?.set(key, value);
    }

    public setObject(key: string, value: user) {
        console.log(value);
        console.log(JSON.stringify(value));
        this._storage?.set(key, value);
    }

    async getObject(key: string): Promise<{ value: any }> {
        const ret = await this._storage.get(key);
        console.log(ret.value);
        return JSON.parse(ret.value);
    }

    async removeUsuario(index) {
        const storedData = await this.storage.get("mydatabase") || [];
        storedData.splice(index, 1);
        return this.storage.set("mydatabase", storedData);
    }
}