const minhaFuncao = require('./desafio.js');

try {
    const resultado = minhaFuncao();

    if (resultado === 2) {
        console.log("✅ SUCESSO: A função retornou 2!");
        process.exit(0); // Código 0 diz ao GitHub que deu tudo certo
    } else {
        console.error(`❌ FALHA: A função retornou ${resultado}, mas esperávamos 2.`);
        process.exit(1); // Código 1 diz ao GitHub que o teste falhou
    }
} catch (error) {
    console.error("❌ ERRO: O código do aluno tem um erro de sintaxe!");
    console.error(error);
    process.exit(1);
}
