
import axios from "axios";
import { useEffect, useState } from "react";

    export function InfoEmpresa(props){

        return (
            <>
                <h2 className="articulo contenido h2">{props.title}</h2>
                <p>{props.content}</p>
            </>
        )}