function solve(...args) {
    let number = parseFloat(args[0]);
    for (let i = 1; i < args.length; i++) {
        switch (args[i]) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number -= 0.2 * number;
                break;
            default:
                console.log("Invalid operation:", args[i]);
                return;
        }
        console.log(number);
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
