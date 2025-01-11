import data from './data.json';

function ReadJson() {
  return (
    <div>
      {data.map((item) => (
        <div >
          <h2>{item.Name}</h2>
          <p>{item.Location}</p>
        </div>
      ))}
    </div>
  );
}

export default ReadJson;