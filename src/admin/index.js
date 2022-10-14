import { Link } from "react-router-dom";

const AdminIndex = () => {
  return (
    <>
      <h1>管理ページ</h1>

      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>

    </>
  );
};

export default AdminIndex;
