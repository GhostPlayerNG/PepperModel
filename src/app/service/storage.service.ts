import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular";

export class user {
    nome: string;
    email: string;
    senha: string;
    telefone: string;
    cpf: string;
}

export class produtos {
    id?: number;
    nome: string;
    preco: number;
    url: string;
    descricao: string;
    categoria: string;
}

export class itenscarrinho{
	id: number;
	qtditem: string;
	produto: produtos;
}

export class pedido{
	id?: string;
	status: string;
	valorTotal: string;
	frete: string;
	cupom: string
	itens: itenscarrinho[];
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
        //this.clearStorage();
        console.log("DONE");
        //this.storageReady.next(true);
    }

    async getData() {
        console.log("GET DATA");
        return this._storage.get("itens") || [];
    }

    async addData(item: itenscarrinho) {
        const storedData = await this.storage.get("itens") || [];
        storedData.push(item);
        return this._storage.set("itens", storedData);
    }

    public get(key: string) {
        return this._storage?.get(key);
    }

    public set(key: string, value: any) {
        this._storage?.set(key, value);
    }

    public setObject(key: string, value: user) {
        this._storage?.set(key, value);
    }

    async getObject(key: string): Promise<{ value: any }> {
        const ret = await this._storage.get(key);
        return JSON.parse(ret.value);
    }

    async remove(index, key: string) {
        const storedData = await this.storage.get(key) || [];
        storedData.splice(index, 1);
        return this.storage.set(key, storedData);
    }

    clearStorage() {
        this.storage.clear();
      }
}