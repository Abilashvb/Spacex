import React from "react";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/esm/Col";
import Form from 'react-bootstrap/Form';
import { LaunchStatus } from "../const/common";

const PageActions: React.FunctionComponent<IProps> = ({
    onLaunchStatusSelect,
    onLaunchToggleChange,
    onSearchChange
}) => {
    return (
        <Row className="pageActions">
            <Col xs={12} md={3} >
                <Form.Select aria-label="Group" onChange={onLaunchStatusSelect} className="formControl">
                    <option value={LaunchStatus.All}>{"All launches"}</option>
                    <option value={LaunchStatus.Success}>{"Successful launches"}</option>
                    <option value={LaunchStatus.fail}>{"Failed launches"}</option>
                </Form.Select>
            </Col>
            <Col xs={12} md={3} >
                <Form.Check
                    className="formControl"
                    type="switch"
                    id="futureLaunch"
                    label="Show Future Launches"
                    onChange={onLaunchToggleChange}
                />
            </Col>
            <Col>
                <Form.Control
                    className="formControl"
                    name={"searchText"}
                    required
                    type={"text"}
                    placeholder={"Search Rocket"}
                    onChange={onSearchChange}
                />
            </Col>
        </Row>
    )
}

export default PageActions;


interface IProps {
    onLaunchToggleChange: (e: any) => void;
    onLaunchStatusSelect: (e: any) => void;
    onSearchChange: (e: any) => void;
}