import { Link } from "react-router-dom";

const BackButton = ({ to, label = "Back" }) => {
  return (
    <Link to={to} className="btn btn-primary mb-2">
      {label}
    </Link>
  );
};

export default BackButton;
