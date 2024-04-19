import Endereco from "./Endereco";
import Telefone from "./Telefone";

export default class Cliente{
    private _nome : string;
    private _cpf : number;
    private _data_nascimento : number;
    private _sexo : string;
    private _endereco : Endereco;
    private _telefone : Telefone[];

    /**
     * Getter nome
     * @return {string}
     */
	public get nome(): string {
		return this._nome;
	}

    /**
     * Getter cpf
     * @return {number}
     */
	public get cpf(): number {
		return this._cpf;
	}

    /**
     * Getter data_nascimento
     * @return {number}
     */
	public get data_nascimento(): number {
		return this._data_nascimento;
	}

    /**
     * Getter sexo
     * @return {string}
     */
	public get sexo(): string {
		return this._sexo;
	}

    /**
     * Getter endereco
     * @return {Endereco}
     */
	public get endereco(): Endereco {
		return this._endereco;
	}

    /**
     * Getter telefone
     * @return {Telefone[]}
     */
	public get telefone(): Telefone[] {
		return this._telefone;
	}

    /**
     * Setter nome
     * @param {string} value
     */
	public set nome(value: string) {
		this._nome = value;
	}

    /**
     * Setter cpf
     * @param {number} value
     */
	public set cpf(value: number) {
		this._cpf = value;
	}

    /**
     * Setter data_nascimento
     * @param {number} value
     */
	public set data_nascimento(value: number) {
		this._data_nascimento = value;
	}

    /**
     * Setter sexo
     * @param {string} value
     */
	public set sexo(value: string) {
		this._sexo = value;
	}

    /**
     * Setter endereco
     * @param {Endereco} value
     */
	public set endereco(value: Endereco) {
		this._endereco = value;
	}

    /**
     * Setter telefone
     * @param {Telefone[]} value
     */
	public set telefone(value: Telefone[]) {
		this._telefone = value;
	}

}