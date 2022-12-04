import React, { useContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import ProductContext from "../../context/products/ProductContext";
import Aside from "./components/Aside";
import ListTable from "./components/ListTable";
import ModalForm from "./components/ModalForm";
import Navbar from "./components/Navbar";

const Index = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const [data, setData] = useState({
    name: "",
    description: "",
    stock: 0,
    price: 0,
    category: {
      id: 1,
      name: "shoes",
    },
  });
  const { getProducts, postData, isLoading } = useContext(ProductContext);
  const addProduct = async () => {
    await postData(data);
    await getProducts();
    toggle();
  };
  return (
    // <!-- Layout wrapper -->
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        {/* <!-- Menu --> */}

        <Aside />
        {/* <!-- / Menu --> */}

        {/* <!-- Layout container --> */}
        <div className="layout-page">
          <Navbar />
          <Toaster />
          {/* <!-- Content wrapper --> */}
          <div className="content-wrapper">
            {/* <!-- Content --> */}

            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="d-flex justify-content-between">
                <h4 className="fw-bold py-3 mb-4">
                  <span className="text-muted fw-light">Admin/</span>Productos
                </h4>
                <ModalForm
                  data={data}
                  setData={setData}
                  onSubmit={addProduct}
                  toggle={toggle}
                  open={open}
                />
              </div>

              <ListTable />
              {/* <!-- Layout Demo --> */}
              {/* <div className="layout-demo-wrapper"> */}

              {/* <div className="layout-demo-placeholder">
                  <img
                    src="/image-background.jpg"
                    className="img-fluid"
                    alt="Layout without navbar"
                  />
                </div>
                <div className="layout-demo-info">
                  <h4>Layout without Navbar</h4>
                  <p>Layout does not contain Navbar component.</p>
                </div> */}
              {/* </div> */}
              {/* <!--/ Layout Demo --> */}
            </div>
            {/* <!-- / Content --> */}

            {/* <!-- Footer --> */}
            <footer className="content-footer footer bg-footer-theme">
              <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                <div className="mb-2 mb-md-0">
                  ©{new Date().getFullYear()}, made with ❤️ by
                  <a
                    href="https://themeselection.com"
                    target="_blank"
                    className="footer-link fw-bolder"
                  >
                    ThemeSelection
                  </a>
                </div>
                <div>
                  <a
                    href="https://themeselection.com/license/"
                    className="footer-link me-4"
                    target="_blank"
                  >
                    License
                  </a>
                  <a
                    href="https://themeselection.com/"
                    target="_blank"
                    className="footer-link me-4"
                  >
                    More Themes
                  </a>

                  <a
                    href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
                    target="_blank"
                    className="footer-link me-4"
                  >
                    Documentation
                  </a>

                  <a
                    href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
                    target="_blank"
                    className="footer-link me-4"
                  >
                    Support
                  </a>
                </div>
              </div>
            </footer>
            {/* <!-- / Footer --> */}

            <div className="content-backdrop fade"></div>
          </div>
          {/* <!-- Content wrapper --> */}
        </div>
        {/* <!-- / Layout page --> */}
      </div>

      {/* <!-- Overlay --> */}
      <div className="layout-overlay layout-menu-toggle"></div>
    </div>
  );
};

export default Index;
