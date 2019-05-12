import React from 'react';
import {Jumbotron, Button} from 'reactstrap';
import '../styles/JumbotronComponent.scss';

const JumbotronComponent = (props) => {
    return (
            <Jumbotron className="jumbotron-home">
                <h1 className="jumbotron-brand-name">Sơn Dược Ký</h1>
                <p className="lead jumbotron-lead">
                    Chuyên phục vụ các món ẩm thực Trung Hoa và đặc sản xứ Tây Nguyên với các đầu bếp có tay nghề và dày dạn kinh nghiệm. <br/>
                    Đến với Sơn Dược Ký, quý khách sẽ được phục vụ trong không gian ăn uống rộng rãi, thoải mái, đội ngũ nhân viên lịch sự - ân cần và chu đáo. <br/>
                    Rất hân hạnh được đón tiếp quý du khách gần xa!
                </p>
                <hr className="jumbotron-hr" />
                <p className="jumbotron-contact">
                    29 Hồ Xuân Hương, Phường Mỹ An, Quận Ngũ Hành Sơn, Thành phố Đà Nẵng <br/>
                    088.6622.347 - 09.2222.3078
                </p>
                <p className="lead">
                    <Button className="jumbotron-btn">Đặt Bàn Ngay</Button>
                </p>
            </Jumbotron>
    );
};

export default JumbotronComponent;