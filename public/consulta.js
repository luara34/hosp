var dataRef = new Firebase('https://hospital-fb9c4-default-rtdb.firebaseio.com/');

dataRef.on('value', function(snapshot) {

    var t = snapshot.val();
    var count = 0;

    for (var key in t) {
        var valor = t[key];

        console.log('chave', key);
        console.log('valor', valor);

        if(key === 'medicos') {

            var _itemsKey = Object.entries(valor);
    
    
    
            for (const [key2, value2] of _itemsKey) {
                count++;
    
                $(".tbhosp tbody").append(
    
                    `<tr> +
    
                        <th scope="row">${count}</th> +
    
                        <td>${value2.nome}</td> +

                    </tr>`
    
                );
    
            }
        }

        var valor = t[key];

        console.log('chave', key);
        console.log('valor', valor);

        if(key === 'paciente') {

            var _itemsKey = Object.entries(valor);
    
    
    
            for (const [key2, value2] of _itemsKey) {
                count++;
    
                $(".tbpaci tbody").append(
    
                    `<tr> +
    
                        <th scope="row">${count}</th> +
    
                        <td>${value2.nome}</td> +

                        <td>${value2.problema}</td> +
                    </tr>`
    
                );
    
            }
        }

        var valor = t[key];

        console.log('chave', key);
        console.log('valor', valor);

        if(key === 'medicamentos') {

            var _itemsKey = Object.entries(valor);
    
    
    
            for (const [key2, value2] of _itemsKey) {
                count++;
    
                $(".tbmedi tbody").append(
    
                    `<tr> +
    
                        <th scope="row">${count}</th> +
    
                        <td>${value2.nome}</td> +

                    </tr>`
    
                );
    
            }
        }

        var valor = t[key];

        console.log('chave', key);
        console.log('valor', valor);

        if(key === 'agendamento') {

            var _itemsKey = Object.entries(valor);
    
    
    
            for (const [key2, value2] of _itemsKey) {
                count++;
    
                $(".tbagend tbody").append(
    
                    `<tr> +
    
                        <th scope="row">${count}</th> +
    
                        <td>${value2.nome}</td> +

                        <td>${value2.dh}</td> +

                        <td>${value2.servico}</td> +

                    </tr>`
    
                );
    
            }
        }

    }

});


