import "./Oracao.css"
import DoProgramador from './DoProgramador'
import DoEstudante from './DoEstudante'
import DoResiliente from './DoResiliente'
import DoCansado from './DoCansado'
import DoAprendiz from './DoAprendiz'

function Oracao({titulo, paragrafo, texto}) {
    if(texto == "programador"){
        return (
            <DoProgramador/>
        )
    }else if(texto == "estudante"){
        return(
            <DoEstudante/>
        )
    }else if(texto == "resiliente"){
        return(
            <DoResiliente/>
        )
    }else if(texto == "cansado"){
        return(
            <DoCansado/>
        )
    }else if(texto == "aprendiz"){
        return(
            <DoAprendiz/>
        )
    }
}

export default Oracao