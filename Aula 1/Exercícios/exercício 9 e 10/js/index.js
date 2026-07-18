const atualizaDataHora = () => {
    const dataAtual = new Date();
    const dataFormatada =
        String(dataAtual.getDate()).padStart(2, '0') + '/' +
        String(dataAtual.getMonth() + 1).padStart(2, '0') + '/' +
        dataAtual.getFullYear() + ' ' +
        String(dataAtual.getHours()).padStart(2, '0') + ':' +
        String(dataAtual.getMinutes()).padStart(2, '0') + ':' +
        String(dataAtual.getSeconds()).padStart(2, '0');
    document.getElementById("data").innerText = `Acessado em ${dataFormatada}`;
}