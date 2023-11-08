import Dropdown from 'react-bootstrap/Dropdown';

const DropElem = (props) => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {props.name}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item>{props.action1}</Dropdown.Item>
                <Dropdown.Item>{props.action1}</Dropdown.Item>
                <Dropdown.Item>{props.action1}</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropElem;