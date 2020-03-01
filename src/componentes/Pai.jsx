import React from 'react'
import {childrenWithProps} from '../Utils/utils'

export default props =>
        <div>
            <h1>{props.nomme} {props.sobrenome}</h1>
            <h2>Filhos</h2>
            <ul>
            { childrenWithProps(props) }
            </ul>
        </div>