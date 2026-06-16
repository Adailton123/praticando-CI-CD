const fs = require('fs');
const minhaFuncao = require('./desafio.js');

try {
    // 1. LER O ARQUIVO COMO TEXTO ANTES DE EXECUTAR
    const codigoTexto = fs.readFileSync('./desafio.js', 'utf8');

    // Remove espaços em branco e quebras de linha para evitar burles
    const codigoLimpo = codigoTexto.replace(/\s+/g, '');

    // 2. VERIFICAÇÃO ANTI-TRAPACA
    // Se o código contiver exatamente "return2;" ou "return2" sem operadores, o robô pega!
    if (codigoLimpo.includes('return2;') || codigoLimpo.includes('return2}')) {
        console.error("❌ VALIDAÇÃO FALHOU: Não vale apenas digitar 'return 2;'! Seja criativo e use operações matemáticas.");
        process.exit(1);
    }

    // 3. SE PASSOU NA TRAPACA, TESTA O RESULTADO
    const resultado = minhaFuncao();

    if (resultado === 2) {
        console.log("✅ SUCESSO: A função retornou 2 e você usou lógica real!");
        process.exit(0);
    } else {
        console.error(`❌ FALHA: A função retornou ${resultado}, mas esperávamos 2.`);
        process.exit(1);
    }

} catch (error) {
    console.error("❌ ERRO: O código tem um erro de sintaxe ou o arquivo não foi encontrado!");
    console.error(error);
    process.exit(1);
}
