import React from 'react';
import faker from 'faker';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';
import './style.css';

function App() {
  const data = new Array(1000).fill().map((value, id) => ({
    id: id,
    title: faker.lorem.words(5),
    body: faker.lorem.sentences(8),
  }));

  const renderRow = ({ index, key, style }) => (
    <div key={key}>
      <div style={style} className="post">
        <h3>{`${data[index].title}-${data[index].id}`}</h3>
        <p>{data[index].body}</p>
      </div>
    </div>
  );

  return (
    <AutoSizer disableHeight>
      {({ width }) => (
        <List
          width={width}
          height={700}
          rowRenderer={renderRow}
          rowCount={data.length}
          rowHeight={120}
        />
      )}
    </AutoSizer>
  );
}
export default App;
