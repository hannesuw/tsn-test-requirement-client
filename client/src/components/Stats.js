const Stats = ({ email, phone, category }) => {
  return (
    <div className="shadow stats">
      <div className="stat place-items-center place-content-center">
        <div className="stat-title">Email</div>
        <div className="stat-value text-xl">{email}</div>
      </div>
      <div className="stat place-items-center place-content-center">
        <div className="stat-title">Phone Number</div>
        <div className="stat-value text-success text-xl">{phone}</div>
      </div>
      <div className="stat place-items-center place-content-center">
        <div className="stat-title">Category</div>
        <div className="stat-value text-error text-xl">{category}</div>
      </div>
    </div>
  );
};

export default Stats;
