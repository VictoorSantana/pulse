
import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({ name: 'exponentialStrength' })
export class ExponentialStrengthPipe implements PipeTransform {
    transform(value: number, exponent = 1): number {
        return Math.pow(value, exponent);
    }
}

@Pipe({ name: 'localDateTime' })
export class LocalDateTimePipe implements PipeTransform {
    transform(value: Date | string | undefined): string {
        if (value) {
            if (typeof value === "string") {
                return new Date(value).toLocaleString()
            }
        }
        return '';
    }
}

@Pipe({ name: 'localDate' })
export class LocalDatePipe implements PipeTransform {
    transform(value: Date | string | undefined): string {
        if (value) {
            if (typeof value === "string") {
                return new Date(value).toLocaleDateString()
            }
        }
        return '';
    }
}

@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {
    transform(value: string = ''): string {
        if (value) {
            const arr = value.toLowerCase().split(" ");
            for (var i = 0; i < arr.length; i++) {
                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

            }
            return arr.join(" ");
        }
        return '';
    }
}

@Pipe({ name: 'cnpj' })
export class CnpjPipe implements PipeTransform {
    transform(value: string = ''): string {
        if (value) {
            let v = value + '';

            return v
                .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
                .replace(/(\d{2})(\d{3})/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{1,2})/, '$1/$2')
                .replace(/(\d{4})(\d{1,2})/, '$1-$2')
                .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
        }
        return '';
    }
}


@Pipe({ name: 'reais' })
export class RealPipe implements PipeTransform {
    transform(value: string = ''): string {
        if (value) {
            if (!isNaN(Number(value))) return (Number(value)).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });


            if (value.indexOf(",") > -1 && value.indexOf(".") > -1) {
                return value
                    .replace(/[^0-9.,]+/, "")
                    .replace(".", "")
                    .replace(",", ".");
            }

            if (value.indexOf(",") > -1) {
                return value.replace(/[^0-9.,]+/, "").replace(",", ".");
            }

            if (value.indexOf(".") > -1) {
                return value.replace(/[^0-9.,]+/, "");
            }

            return 'R$' + value;

        } else {
            return 'R$ 0,00';
        }
    }
}