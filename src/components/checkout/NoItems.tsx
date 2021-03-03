import empty from "../empty.svg";

function NoItems() {
  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div style={{ maxWidth: 480, padding: "5ch" }}>
        <img src={empty} alt="empty" className="img-fluid" />
        <p className="display-4 text-center m-4">Your Cart Is Empty</p>
      </div>
    </div>
  );
}

export default NoItems;
