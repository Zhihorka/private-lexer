import { GrammarStruct } from "./lexer";

const grammar: GrammarStruct[] = [
    // Comments
    {
        id: "single_line_comment_begin",
        match: ">>>"
    },
    {
        id: "multi_line_comment_begin",
        match: ">>"
    },
    {
        id: "multi_line_comment_end",
        match: "<<"
    },
    {
        id: "char",
        match: `(?<=(?:(?:\\b|^)["'\`])|[\\x00-\\x7F])[\\x00-\\x7F](?=(?:[\\x00-\\x7F]+)?["'\`](?:\\b|$))`
    },
    {
        id: "string_anchor",
        match: "['`\"]"
    }
]

export default grammar;