import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";


export class GenericValidator {
    constructor() { }

    /**
     * Valida se o CPF é valido. Deve-se ser informado o cpf sem máscara.
    */
    static CPF() {
        return (control: AbstractControl): ValidationErrors | null => {

            if (!control.value) {
                return null;
            }

            let strCpf = (control.value + "").replace(/\D/g, "");;

            if (!/[0-9]{11}/.test(strCpf)) return { cpfInvalid: true };

            // console.log("strCpf", strCpf);
            if (strCpf === "00000000000" || strCpf === "000000000000") return { cpfInvalid: true };

            var soma = 0;

            for (var i = 1; i <= 9; i++) {
                soma += parseInt(strCpf.substring(i - 1, i)) * (11 - i);
            }

            var resto = soma % 11;

            if (resto === 10 || resto === 11 || resto < 2) {
                resto = 0;
            } else {
                resto = 11 - resto;
            }

            if (resto !== parseInt(strCpf.substring(9, 10))) {
                return { cpfInvalid: true };
            }

            soma = 0;

            for (var j = 1; j <= 10; j++) {
                soma += parseInt(strCpf.substring(j - 1, j)) * (12 - j);
            }
            resto = soma % 11;

            if (resto === 10 || resto === 11 || resto < 2) {
                resto = 0;
            } else {
                resto = 11 - resto;
            }

            if (resto !== parseInt(strCpf.substring(10, 11))) {
                return { cpfInvalid: true };
            }

            return null;
        };
    }

    static email() {
        return (control: AbstractControl): ValidationErrors | null => {

            if (!control.value) return null;

            let value = (control.value + "");

            if (value.includes('@')) {
                if (value.includes('.com') || value.includes('.net')) {
                    return null
                }
            }

            return { email: true };;
        }
    }

    static fullName() {
        return (control: AbstractControl): ValidationErrors | null => {
            let value = (control.value + "");

            if (!value || value.split(' ').length >= 2) return null;

            // if (value.includes('@')) {
            //     if (value.includes('.com') || value.includes('.net')) {
            //         return null
            //     }
            // }

            return { fullname: true };;
        }
    }    
}