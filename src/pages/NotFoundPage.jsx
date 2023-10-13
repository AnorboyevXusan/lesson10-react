import { Button, Result } from "antd"
import { Fragment } from "react"
import { useNavigate } from "react-router-dom"

const NotFoundPage = () => {
  const navigate = useNavigate();
  const backHome = () =>{
    navigate("/");
  }
    return (
      <Fragment>
        <Result
          status="404"
          title="404"
          subTitle="ILTIMOS QAYTA URUNUB KORING."
          extra={<Button onClick={backHome} type="primary">Login</Button>}
        />
      </Fragment>
    );
}

export default NotFoundPage