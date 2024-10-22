import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabaseSync('database');
    db.execSync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS clientes (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT NOT NULL, cpf TEXT NOT NULL);
        CREATE TABLE IF NOT EXISTS roupas (codigo INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT NOT NULL, qntd INTEGER NOT NULL, preco INTEGER NOT NULL);
        CREATE TABLE IF NOT EXISTS vendas (transc INTEGER PRIMARY KEY AUTOINCREMENT, clientecpf TEXT NOT NULL, roupascodigos TEXT NOT NULL, valor INTEGER NOT NULL, status TEXT NOT NULL, metodopagamento TEXT NOT NULL )`);
    
export function addRoupa(nome,qntd,custo){
    try {
        const str = db.getAllAsync("INSERT INTO roupas (nome, qntd, preco) VALUES(?,?,?)",nome, qntd, custo);
    } catch (err) {
        console.log(err);
    }
}
export function getRoupas(){
    try {
        const str = db.getAllAsync("SELECT * FROM roupas");
        return str;
    } catch (error) {
        console.log(error);
    }
}
export function getEachRoupas(index){
    try {
        const str = db.getAllSync("SELECT * FROM roupas WHERE codigo=?",index);
        return str;
    } catch (error) {
        console.log(error);
    }
}
export function getEachRoupasNome(index){
    try {
        const str = db.getAllSync("SELECT * FROM roupas WHERE nome=?",index);
        return str;
    } catch (error) {
        console.log(error);
    }
}
export function getLastRoupa(){
    try {
        const str = db.getAllSync("SELECT codigo FROM roupas ORDER BY codigo DESC LIMIT 1");
        return str;
    } catch (error) {
        console.log(error);
    }
}
export function reqres(){
    function delRoupa(nome){
        try {
            const str = db.getAllAsync("DELETE FROM roupas WHERE nome=?",nome);
        } catch (error) {
            console.log(error);
        }
    }
    function addCliente(nome, cpf){
        try {
            const str = db.getAllAsync("INSERT INTO clientes (nome, cpf) VALUES(?,?)",nome, cpf)
        } catch (error) {
            console.log(error);
        }
    }
    function delCliente(nome){
        try {
            const str = db.getAllAsync("DELETE FROM clientes WHERE nome=?",nome);
        } catch (error) {
            console.log(error);
        }
    }
    function getClientes(){
        try {
            const str = db.getAllAsync("SELECT * FROM clientes");
            return str;
        } catch (error) {
            console.log(error);
        }
    }
    function addVenda(clientecpf, roupascodigos, valor, status, metodopagamento){
        try {
            const str = db.getAllAsync("INSERT INTO vendas (clientecpf, roupascodigos, valor, status, metodopagamento) VALUES(?,?,?,?,?)",clientecpf, roupascodigos, valor, status, metodopagamento)
        } catch (error) {
            console.log(error);
        }
    }
    function delVenda(transc){
        try {
            const str = db.getAllAsync("DELETE FROM clientes WHERE transc=?",transc);
        } catch (error) {
            console.log(error);
        }
    }
    function getVendas(){
        try {
            const str = db.getAllAsync("SELECT * FROM vendas");
            return str;
        } catch (error) {
            console.log(error);
        }
    }
    
}