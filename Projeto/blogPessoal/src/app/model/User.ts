import { Postagem } from './Postagem';
export class User{
    public id: number
    public nome: string
    public usuario: string
    public senha: String
	public foto: String
    public tipo: String
    public postagem: Postagem[]
}