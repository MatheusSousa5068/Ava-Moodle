async function buscarEndereco() {
    const cep = document.getElementById("cep").value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    try {
        resetCampos()
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            document.getElementById("logradouro").textContent = data.logradouro;
            document.getElementById("bairro").textContent = data.bairro;
            document.getElementById("cidade").textContent = data.localidade;
            document.getElementById("estado").textContent = data.uf;
        } else {
            resetCampos();
            alert("CEP não encontrado.");
        }
    } catch (error) {
        resetCampos();
        alert("Ocorreu um erro ao buscar o endereço.");
    }
}

function resetCampos() {
    document.getElementById("logradouro").textContent = "";
    document.getElementById("bairro").textContent = "";
    document.getElementById("cidade").textContent = "";
    document.getElementById("estado").textContent = "";
}