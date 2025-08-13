// Classe para representar um local afetado por desmatamento
export default class Deforestation {
  constructor(id, nome, areaDesmatada, ano, causa) {
    this.id = id;                // Identificador único
    this.nome = nome;            // Nome do local
    this.areaDesmatada = areaDesmatada; // Área desmatada (em hectares, km², etc.)
    this.ano = ano;              // Ano do registro
    this.causa = causa;          // Causa principal (agricultura, urbanização, etc.)
  }
}
