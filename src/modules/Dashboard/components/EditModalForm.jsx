import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
const EditModalForm = ({ modal, toggle, data, setData, onSubmit }) => {
  const handleData = (e) => {
    const { name, value } = e.target;
    if (name === "stock" || name === "price") {
      setData({ ...data, [name]: Number(value) });
      return;
    }
    setData({ ...data, [name]: value });
  };
  return (
    <>
      <Modal isOpen={modal} toggle={toggle} centered={true}>
        <ModalHeader toggle={toggle}>Editar Producto</ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col mb-3">
              <label htmlFor="nameBasic" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                value={data?.name}
                className="form-control"
                onChange={(e) => handleData(e)}
              />
            </div>
          </div>
          <div className="row g-2">
            <div className="col mb-0">
              <label htmlFor="emailBasic" className="form-label">
                Stock
              </label>
              <input
                type="text"
                name="stock"
                value={data?.stock}
                className="form-control"
                onChange={(e) => handleData(e)}
              />
            </div>
            <div className="col mb-0">
              <label htmlFor="dobBasic" className="form-label">
                Precio
              </label>
              <input
                type="text"
                name="price"
                value={data?.price}
                className="form-control"
                onChange={(e) => handleData(e)}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            className="btn btn-outline-secondary"
            data-bs-dismiss="modal"
            onClick={toggle}
          >
            Cerrar
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onSubmit()}
          >
            Guardar
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default EditModalForm;
