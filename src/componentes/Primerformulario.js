import {Button, Form, Col, Row } from 'react-bootstrap';

function Primerformulario(){
    return(
        <>
            <Form.Label> Nombre : </Form.Label>
            <Form.Control type="text"></Form.Control>
            <Button>Guardar</Button>
        </>
    )
}
export default Primerformulario