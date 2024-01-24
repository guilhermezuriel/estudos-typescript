//Instance of 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(nome) {
        this.nome = nome;
    }
    return Product;
}());
var livro = new Product('A Guerra dos Tronos');
console.log(livro instanceof Product); //boolean
var Livro = /** @class */ (function (_super) {
    __extends(Livro, _super);
    function Livro(nome, autor) {
        var _this = _super.call(this, nome) || this;
        _this.autor = autor;
        return _this;
    }
    return Livro;
}(Product));
var Jogo = /** @class */ (function (_super) {
    __extends(Jogo, _super);
    function Jogo(nome, jogadores) {
        var _this = _super.call(this, nome) || this;
        _this.jogadores = jogadores;
        return _this;
    }
    return Jogo;
}(Product));
function buscarProduto(busca) {
    if (busca === 'O Hobbit') {
        return new Livro('O Hobbit', 'J R. R. Tolkien');
    }
    if (busca === 'Dark Souls') {
        return new Jogo('Dark Souls', 1);
    }
}
var produto = buscarProduto('O Hobbit'); // produto: Livro | Jogo | undefined
//Verificando que produto é uma instacia de Livro, é impossível termos erro na propriedade autor
if (produto instanceof Livro) {
    console.log('Livro' + (produto === null || produto === void 0 ? void 0 : produto.autor));
}
//extends
if (produto instanceof Product) {
    console.log(produto.nome); //Apenas mostra a propriedade herdada de Product
}
