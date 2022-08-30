//1

let estado = '';

//2

situacao = 'lista';

switch (situacao) {
    case 'aprovado':
        estado = "Parabéns, você foi aprovada(o)!";
        break; 
        case 'lista':
        estado = 'você esta na nossa lista de espera';
        break;
        case 'reprovado':
        estado = 'Você foi reprovado';
        break;
        default:
            console.log('não se aplica');
}
    console.log(estado);
