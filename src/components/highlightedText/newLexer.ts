export interface grammarUnit{
    name: string;
    match: string;
}

export class NewLexer{
    grammar: grammarUnit[] = [];
    code: string = '';
    tokenized: any[] =[];


    constructor(grammar: grammarUnit[], code: string){
        this.grammar = grammar;
        this.code = code;
    }

    tokenize(){
        console.log(this.code);
        const tokenizedLexems: any[] = [];

        let splitBySeparatingMarks = this.code.replaceAll('\n', ' \n ').replaceAll(';', ' ').split(' ');
        if (splitBySeparatingMarks[splitBySeparatingMarks.length - 1].length === 0) {
            splitBySeparatingMarks = splitBySeparatingMarks.slice(0,splitBySeparatingMarks.length - 1);
        }
        splitBySeparatingMarks.forEach((lexeme: string)=> {
            for (let i = 0; i < this.grammar.length; i++) {
                const grammar = new RegExp(this.grammar[i].match);
                if (grammar.test(lexeme)) {
                    tokenizedLexems.push([lexeme, this.grammar[i].name])
                    break;
                }
            }
        });
        console.log(tokenizedLexems);
        this.tokenized = tokenizedLexems;
    }

    returnCode(){
        return this.grammar;
    }
}