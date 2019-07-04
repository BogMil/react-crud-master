import React, { Component, FormEvent, ChangeEvent } from "react";
import {
    Table,
    Card,
    Modal,
    Navbar,
    NavDropdown,
    Nav,
    Form,
    FormControl,
    Button,
    Dropdown,
    Col,
    Row,
    InputGroup
} from "react-bootstrap";

import './reactable/reactable.css'
import update from 'immutability-helper'


interface IState {

}

interface IProps {
    tableWidth: number;
}

class Footer extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }


    render = () => {
        let buttonStyle = { borderRadius: 0, margin: 1 };

        if (this.props.tableWidth < 620)
            return (
                
                <Row>
                    <Col xs={2} >
                        <Dropdown style={{ textAlign: "left" }}>
                            <Dropdown.Toggle size="sm" style={{ ...buttonStyle }} variant="primary" id="dropdown-basic">
                                <i className="fas fa-bars"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                    <i className="fas fa-plus" /><span style={{paddingLeft:10}}>Add</span>
                                </Dropdown.Item>
                                < Dropdown.Item href="#/action-2" >
                                    <i className="fas fa-edit" /><span style={{paddingLeft:10}}>Edit</span>
                                </Dropdown.Item>
                                < Dropdown.Item href="#/action-2" >
                                    <i className="fas fa-trash-alt" /><span style={{paddingLeft:10}}>Delete</span>
                                </Dropdown.Item>
                                < Dropdown.Item href="#/action-2" >
                                    <i className="fas fa-eye" /> <span style={{paddingLeft:10}}>View</span>
                                </Dropdown.Item>
                                < Dropdown.Item href="#/action-2" >
                                    <i className="fas fa-search" /> <span style={{paddingLeft:10}}>Search</span>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    {/* < Col xs={4} >
                        <Row>
                            <Col xs={4}>
                                <Button size="sm" > {"<"} </Button>
                            </Col>
                            < Col xs={4} >
                                <Form.Control style={{ height: 32 }} />
                            </Col>
                            <Col xs={4} >
                                <Button size="sm" > {">"} </Button>
                            </Col>
                        </Row>
                    </Col> */}
                    < Col xs={6} >
                        <InputGroup className="" style={{ textAlign: "center", alignItems: 'center', justifyContent: 'center' }}>
                            < Button size="sm" style={{ ...buttonStyle }}>
                                <i className="fas fa-angle-left"></i>
                            </Button>
                            <div style={{ display: 'inline-block' }}>
                                <Form.Control className="border-radius-0" style={{ height: 31, margin: 1, padding: 2, width: 50 }}
                                    defaultValue="asd" />
                            </div>
                            < Button size="sm" style={{ ...buttonStyle }}>
                                <i className="fas fa-angle-right"></i>
                            </Button>
                        </InputGroup>
                    </Col>
                    <Col xs={4} > 102 - 103 / 123 </Col>
                </Row>
            );
        return (
                <Row>
                    <Col xs={4} style={{ textAlign: "left" }}>
                        <Button
                            size="sm"
                            style={{ ...buttonStyle }}
                        // onClick={this.openModal}
                        >
                            <i className="fas fa-plus" />
                        </Button>
                        < Button
                            size="sm"
                            style={{ ...buttonStyle }}
                        // onClick={this.openModalToEdit}
                        >
                            <i className="far fa-edit" />
                        </Button>
                        < Button size="sm" style={{ ...buttonStyle }}>
                            <i className="fas fa-trash-alt" />
                        </Button>
                        < Button size="sm" style={{ ...buttonStyle }}>
                            <i className="fas fa-eye" />
                        </Button>
                        < Button size="sm" style={{ ...buttonStyle }}>
                            <i className="fas fa-search" />
                        </Button>
                    </Col>
                    < Col xs={4} >
                        <InputGroup className="" style={{ textAlign: "center", alignItems: 'center', justifyContent: 'center' }}>
                            < Button size="sm" style={{ ...buttonStyle }}>
                                <i className="fas fa-angle-double-left"></i>
                            </Button>
                            < Button size="sm" style={{ ...buttonStyle }}>
                                <i className="fas fa-angle-left"></i>
                            </Button>
                            <div style={{ display: 'inline-block' }}>
                                <Form.Control className="border-radius-0" style={{ height: 31, margin: 1, padding: 2, width: 50 }}
                                    defaultValue="asd" />
                            </div>
                            < Button size="sm" style={{ ...buttonStyle }}>
                                <i className="fas fa-angle-right"></i>
                            </Button>
                            < Button size="sm" style={{ ...buttonStyle }}>
                                <i className="fas fa-angle-double-right"></i>
                            </Button>
                        </InputGroup>
                    </Col>
                    < Col xs={4} style={{ textAlign: "right" }}>
                        <Button>{"<"} </Button>
                        < Button > {">"} </Button>
                    </Col>
                </Row>
        );
    };


}

export default Footer;
