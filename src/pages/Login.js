import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h1>ログインページ</h1>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </>
  );
};

export default Login;

