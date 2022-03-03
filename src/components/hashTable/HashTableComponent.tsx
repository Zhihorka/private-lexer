import { FC } from "react";
import {HashTableWithList, HashTableWithProduct} from "./hashTables";
import Row from "./elements/Row";

interface Props{
    solutionMethod: string
}

const HashTableComponent: FC<Props> = ({solutionMethod})=>{

    const tableWithList = new HashTableWithList(5)
    tableWithList.set('Olesya','Moscow');
    tableWithList.set('Natalya','Khabarovsk');
    tableWithList.set('Sergey','Khabarovsk');
    tableWithList.set('Oleg','Vladivostok');
    tableWithList.set('Petr','Moscow');
    tableWithList.set('Sonya','Khabarovsk');
    tableWithList.set('Alex','Vladivostok');
    tableWithList.set('Olga','Khabarovsk');
    tableWithList.set('Anna','Vladivostok');


    const tableWithProduct = new HashTableWithProduct(5)
    tableWithProduct.set('Olesya','Moscow');
    tableWithProduct.set('Natalya','Khabarovsk');
    tableWithProduct.set('Sergey','Khabarovsk');
    tableWithProduct.set('Oleg','Vladivostok');
    tableWithProduct.set('Petr','Moscow');
    tableWithProduct.set('Sonya','Khabarovsk');
    tableWithProduct.set('Alex','Vladivostok');
    tableWithProduct.set('Olga','Khabarovsk');
    tableWithProduct.set('Anna','Vladivostok');

    const entryItemsList = tableWithList.getTable().map((entry: string[] , index) =>(
        <Row entries={entry} index={index}/>
        )
    );

    const entryItemsProduct = tableWithProduct.getTable().map((entry: string[] , index) =>(
            <Row entries={entry} index={index}/>
        )
    );

    if (solutionMethod === 'list') {
        return (
            <div>
                {entryItemsList}
            </div>
        )
    }

    if (solutionMethod === 'product') {
        return (
            <div>
                {entryItemsProduct}
            </div>
        )
    }


    return null
}

export default HashTableComponent;