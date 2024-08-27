import React, {useState} from 'react';
export default function Contador() {

    const [contador, setContador] = useState(0);

    return (
        <div className="contador">
            <p>Has hecho clic {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar valor</button>
        </div>
    )
};