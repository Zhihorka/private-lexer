import {FC, useState} from "react";
import './style.css';
import {NewLexer} from "./newLexer";
import grammar from "./newGrammar";

interface Props{
    code: string;
}

const HighlightedText: FC<Props> = ({code})=>{

    const lexer = new NewLexer(grammar, code);

    lexer.tokenize();

    const textItems = lexer.tokenized.map((lexeme: string[]) => {
        if (lexeme[1] ===
            'equality_operator'
        ){
            return(
                <span className = 'compare'>{lexeme[0]}</span>
            )
        }


        if (lexeme[1] ===
            'less_operator'
        ){
            return(
                <span className = 'compare'>{lexeme[0]}</span>
            )
        }

        if (lexeme[1] ===
            'more_operator'
        ){
            return(
                <span className = 'compare'>{lexeme[0]}</span>
            )
        }

        if (lexeme[1] ===
            'conditional_operator_if'
        ){
            return(
                <span className = 'conditional'>{lexeme[0]}</span>
            )
        }
        if (lexeme[1] ===
            'conditional_operator_then'
        ){
            return(
                <span className = 'conditional'>{lexeme[0]}</span>
            )
        }

        if (lexeme[1] ===
            'conditional_operator_else'
        ){
            return(
                <span className = 'conditional'>{lexeme[0]}</span>
            )
        }

        if (lexeme[1] ===
            'conditional_operator_else'
        ){
            return(
                <span className = 'conditional'>{lexeme[0]}</span>
            )
        }

        if (lexeme[1] ===
            'assignment_operator'
        ){
            return(
                <span className = 'assigment'>{lexeme[0]}</span>
            )
        }

        if (lexeme[1] ===
            'math_operator'
        ){
            return(
                <span className = 'math'>{lexeme[0]}</span>
            )
        }

        if (lexeme[1] ===
            'number_decimal'
        ){
            return(
                <span className = 'decimal'>{lexeme[0]}</span>
            )
        }

        if (lexeme[1] ===
            'break_line'
        ){
            return(
                <br/>
            )
        }

        if (lexeme[1] ===
            'identifier'
        ){
            return(
                <span className = 'gray'>{lexeme[0]}</span>
            )
        }


        return(
            <span className = 'error'>{'! -> '}{lexeme[0]} {' <- не удалось распознать строку !'}</span>
        )
    } );


    return(
        <div className='wrapper'>
            <div className='code'>
                {textItems}
            </div>
        </div>
    )
}

export default HighlightedText