
function adicionarPedido() {
    var numeroPedido = document.getElementById('numeroNovoPedido').value;

    if (numeroPedido === "") {
        alert("Por favor, insira um número de pedido.");
        return;
    }

    var painelPedidos = document.getElementById('painelPedidos');


    var novoPedido = document.createElement('div');
    novoPedido.classList.add('pedido');


    novoPedido.innerHTML = `
        <p>Número do Pedido: <span class="numero">${numeroPedido}</span></p>
        <p>Status: <span class="status">Em Preparo</span></p>
        <button onclick="mudarStatus(this)" class="statusPedido">Pedido Pronto</button>
    `;


    painelPedidos.appendChild(novoPedido);

    document.getElementById('numeroNovoPedido').value = "";
}

function mudarStatus(botao) {
    var status = botao.previousElementSibling.querySelector('.status');

    if (status.innerText === 'Em Preparo') {
        status.innerText = 'Pedido Pronto';
        botao.innerText = 'Pedido Entregue';
    } else if (status.innerText === 'Pedido Pronto') {
        status.innerText = 'Pedido Entregue';
        botao.disabled = true; 
    }
}

function limparPedidosEntregues() {
    var painelPedidos = document.getElementById('painelPedidos');
    var pedidos = painelPedidos.getElementsByClassName('pedido');

    var pedidosArray = Array.from(pedidos);

    pedidosArray.forEach(function (pedido) {
        var status = pedido.querySelector('.status').innerText;
        if (status === 'Pedido Entregue') {
            painelPedidos.removeChild(pedido); 
        }
    });
}
