const NewTicket = () => {
  return (
    <div>
      <h1>Create a Ticket</h1>
      <form>
        <div className="form-group">
          <lable>Title</lable>
          <input className="form-control" />
        </div>
        <div className="form-group">
          <lable>Price</lable>
          <input className="form-control" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default NewTicket;
