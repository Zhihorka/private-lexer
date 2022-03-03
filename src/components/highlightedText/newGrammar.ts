import {grammarUnit} from "./newLexer";

const grammar: grammarUnit[] = [
    {
        name: "conditional_operator_if",
        match: "if"
    },
    {
        name:  "conditional_operator_then",
        match: "then"
    },
    {
        name:  "conditional_operator_else",
        match: "else"
    },
    {
        name:  "assignment_operator",
        match: ":="
    },
    {
        name:  "number_roman",
        match: "^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$"
    },
    {
        name:  "equality_operator",
        match: "="
    },
    {
        name:  "less_operator",
        match: "<"
    },
    {
        name:  "more_operator",
        match: ">"
    },
    {
        name:  "number_hexadecimal",
        match: "0[xX][0-9a-fA-F]+"
    },
    {
        name:  "number_decimal",
        match: "^[0-9]+$"
    },
    {
        name:  "math_operator",
        match: "[+*/\\\\-]{1}"
    },
    {
        name:  "break_line",
        match: "\n"
    },
    {
        name:  "identifier",
        match: "^[A-Za-z]"
    },
    {
        name:  "not_recognised",
        match: "[^\\n]+"
    },
];
export default grammar;