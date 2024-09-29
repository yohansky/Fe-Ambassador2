import React from "react";

const Products = (props) => {
  const search = (s) => {
    props.setFilters({
      s,
    });
  };
  return (
    <>
      <div className="col-md-12 mb-4 input-group">
        <input type="text" className="form-control" placeholder="Search" onChange={(e) => search(e.target.value)} />
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {props.products && props.products.length > 0 ? (
          props.products.map((product) => {
            return (
              <div className="col">
                <div className="card shadow-sm">
                  <img src={product.image} height={200} />

                  <div className="card-body">
                    <p className="card-text">{product.title}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">${product.price}</small>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No products available</p>
        )}
      </div>
    </>
  );
};

export default Products;
