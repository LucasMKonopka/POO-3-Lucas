export default class Endereco{
    private _rua : string;
    private _number : number;
    private _cidade : string;
    private _estado : string;
    
    /**
     * Getter rua
     * @return {string}
     */
	public get rua(): string {
		return this._rua;
	}

    /**
     * Getter number
     * @return {number}
     */
	public get number(): number {
		return this._number;
	}

    /**
     * Getter cidade
     * @return {string}
     */
	public get cidade(): string {
		return this._cidade;
	}

    /**
     * Getter estado
     * @return {string}
     */
	public get estado(): string {
		return this._estado;
	}

    /**
     * Setter rua
     * @param {string} value
     */
	public set rua(value: string) {
		this._rua = value;
	}

    /**
     * Setter number
     * @param {number} value
     */
	public set number(value: number) {
		this._number = value;
	}

    /**
     * Setter cidade
     * @param {string} value
     */
	public set cidade(value: string) {
		this._cidade = value;
	}

    /**
     * Setter estado
     * @param {string} value
     */
	public set estado(value: string) {
		this._estado = value;
	}
}