import "./App.css";
import React, { useState } from "react";
import Header from "./Header";
import AgGrid from "./AgGrid";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

function App() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", file);

    fetch("http://example.com/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        // Handle the response from the server
        //display in ag grid
      })
      .catch((error) => {
        // Handle any errors
      });
  };
  const handleExport = () => {
    // Call the function in the child component
    agGridRef.current.exportData();
  };

  const handleReset = () => {
    // Call the function in the child component
    agGridRef.current.resetData();
  };

  const agGridRef = React.useRef();
  return (
    <div>
      <Header />
      <div
        className="m-4 d-flex justify-content-between"
        style={{ width: 900 }}
      >
        <Form.Control
          type="file"
          onChange={handleFileChange}
          style={{ width: 500 }}
        />
        <Button
          type="button"
          size="md"
          variant="primary"
          onClick={handleUpload}
        >
          Upload
        </Button>

        <Button
          type="button"
          size="md"
          variant="primary"
          onClick={handleExport}
        >
          Export
        </Button>
        <Button
          type="button"
          size="md"
          variant="outline-dark"
          onClick={handleReset}
        >
          Reset
        </Button>
      </div>
      <div className="m-4">
        <AgGrid ref={agGridRef}/>
      </div>
    </div>
  );
}

export default App;
