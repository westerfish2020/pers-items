import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function FilterButton(props) {
    return (
        <>
         <ButtonGroup aria-label="Filter Buttons">
            <Button variant="outline-primary"aria-pressed={props.isPressed}
                onClick={() => props.setFilter(props.name)}>
                 <span>{props.name}</span></Button>
         </ButtonGroup>
     
        </>
       
    );
  }

export default FilterButton;