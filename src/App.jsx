import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ItemCard from './components/ItemCard.jsx';
import FilterButton from './components/FilterButton.jsx';
import data from './assets/Personal Property Master List.json';
import { useState } from "react";

const FILTER_MAP = {
  All: () => true,
  Sentimenal: (item) => item.Category=='Sentimental',
  Jewelry: (item) => item.Category=='Jewelry',
  Furniture: (item) => item.Category=='Furniture',
  Florida: (item) => item.Location=='Florida',
  Concord: (item) => item.Location=='Concord',


};
const FILTER_NAMES = Object.keys(FILTER_MAP);

const App = () => {
  const [filter, setFilter] = useState("All");

  const cardList = data
    .filter(FILTER_MAP[filter])
    .map((item) => {
      let loc = '';
      if(item.Image){
        loc='/ajmpictures/'+item.Image;
      } else {
        loc = '/Images/underconstruction.gif'
      }

    return(
      <ItemCard
        key={item.Id}
        name={item.Name}
        image={loc}
        value={item.Value}
        category={item.Category}
        desc={item.Desc}
        location={item.Location}
      />
  )}
);

const filterList = FILTER_NAMES.map((name) => (
  <FilterButton
    key={name}
    name={name}
    isPressed={name === filter}
    setFilter={setFilter}
  />
));
    
    return (
      <>
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <Container >
          <Row lg={4}>
            {cardList}
          </Row>
        </Container>
      </>
  );
}

export default App;

