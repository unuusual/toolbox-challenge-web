import React, { useEffect, useState } from 'react';
import { useCsvData } from '../../service/CsvService';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import CustomTable from '../../components/table';
import './App.css'
import Loader from '../../components/loader';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const { fetchData } = useCsvData();
  const [loading, setLoading] = useState(false);

  const { csvData } = useSelector(state => state.csvData);
  const error = useSelector(state => state.csvData.error);

  const handleButtonClick = () => {
    setLoading(true);
    fetchData(inputValue)
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    fetchData()
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, []);

  const tableData = !error
    ? csvData.flatMap(({ lines }) => (
        lines.map(({ file, text, number, hex }) => ({
          file: file,
          text: text,
          number: number,
          hex: hex || ""
        }))
      ))
    : [];

  return (
    <div className="App">
      <div className="container mt-5">
        <h2>React Test App:</h2>
        <div>
        <Row className="g-2" style={{ marginBottom: '1rem'}}>
          <Col xs="auto">
            <FloatingLabel controlId="floatingInputGrid" label="Busqueda por archivo">
              <Form.Control type="text" value={inputValue} onChange={handleInputChange} style={{ width: "200px", height: "10px" }} />
            </FloatingLabel>
          </Col>
          <Col xs="auto" style={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={loading ? null : handleButtonClick} variant="primary" style={{ width: "100px", height: "40px", alignSelf: 'center' }}>Search</Button>
          </Col>
        </Row>

        </div>
        {loading && (
          <div className='loader-center'>
            <Loader />
          </div>
        )}
        {Array.isArray(tableData) && !loading && !error && (
          <div className="row">
            <div className="col">
              <CustomTable data={tableData} />
            </div>
          </div>
        )}
        {error && (
          <div className="row">
            <div className="col">
              <p className='error-response'>El archivo CSV no existe.</p>
            </div>
          </div>
        )}
        {Array.isArray(tableData) && !loading && !error && tableData.length === 0 && (
          <div className="row">
            <div className="col">
              <p className='error-response'>El contenido CSV esta vacio.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;