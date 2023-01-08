module.exports = function toReadable (number) {
    res = '';
    let bitDepth = number.toString().length;

    if (bitDepth == 3) {
        switch (Number(number.toString()[0])) {
            case 1: res = `${res}one hundred`; break;
            case 2: res = `${res}two hundred`; break;
            case 3: res = `${res}three hundred`; break;
            case 4: res = `${res}four hundred`; break;
            case 5: res = `${res}five hundred`; break;
            case 6: res = `${res}six hundred`; break;
            case 7: res = `${res}seven hundred`; break;
            case 8: res = `${res}eight hundred`; break;
            case 9: res = `${res}nine hundred`; break;
        }
        if (number.toString()[1] != 0 || number.toString()[2] != 0) {
            res = `${res} `;
            number = number % 100;
            bitDepth = 2;
        }
    }

    if (bitDepth == 2) {
        if (number >= 20) {
            switch (Number(number.toString()[0])) {
                case 2: res = `${res}twenty`; break;
                case 3: res = `${res}thirty`; break;
                case 4: res = `${res}forty`; break;
                case 5: res = `${res}fifty`; break;
                case 6: res = `${res}sixty`; break;
                case 7: res = `${res}seventy`; break;
                case 8: res = `${res}eighty`; break;
                case 9: res = `${res}ninety`; break;
            }
        if (number.toString()[1] != 0) {
            res = `${res} `;
            number = number % 10;
        }     
        }
        bitDepth--;        
    }

    if (bitDepth == 1) {
        switch(number) {
            case 0: res = `${res}zero`; break;
            case 1: res = `${res}one`; break;
            case 2: res = `${res}two`; break;
            case 3: res = `${res}three`; break;
            case 4: res = `${res}four`; break;
            case 5: res = `${res}five`; break;
            case 6: res = `${res}six`; break;
            case 7: res = `${res}seven`; break;
            case 8: res = `${res}eight`; break;
            case 9: res = `${res}nine`; break;
            case 10: res = `${res}ten`; break;
            case 11: res = `${res}eleven`; break;
            case 12: res = `${res}twelve`; break;
            case 13: res = `${res}thirteen`; break;
            case 14: res = `${res}fourteen`; break;
            case 15: res = `${res}fifteen`; break;
            case 16: res = `${res}sixteen`; break;
            case 17: res = `${res}seventeen`; break;
            case 18: res = `${res}eighteen`; break;
            case 19: res = `${res}nineteen`; break;
        }
    }
    return res;
}
