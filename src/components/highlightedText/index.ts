import Lexer from "./lexer";
import grammar from "./grammar";

export default new Lexer().loadGrammar(grammar);