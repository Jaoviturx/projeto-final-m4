// Classe para representar um local relacionado a mudanças climáticas
export default class Climate {
  constructor(id, nome, descricao, ano, impacto) {
    this.id = id;              // Identificador único
    this.nome = nome;          // Nome do local
    this.descricao = descricao;// Descrição do local e situação climática
    this.ano = ano;            // Ano do registro
    this.impacto = impacto;    // Nível de impacto (baixo, médio, alto)
  }
}