import React, {Component} from 'react';
import '../styles/MenuComponent.scss';
import {
    ButtonDropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Fade,
    Pagination,
    PaginationItem, PaginationLink,
    Row,
    Spinner
} from "reactstrap";
import Col from "reactstrap/es/Col";
import DishItemComponent from "./DishItemComponent";
import {connect} from "react-redux";
import {loadedListDish, loadedListTable} from "../../../actions/menuActions";
import TableItemComponent from "./TableItemComponent";

class MenuComponent extends Component {
    state = {
        isFetching: false,
        filterPrice: false,
        filterTime: false,
        filterVote: false,
        list_dish: [],
        list_table: [],
        list_room: [],
        tabMenu: 1
    };

    componentDidMount() {
        this.props.loadedListDish();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            isFetching: nextProps.menu.isFetching,
            list_dish: nextProps.menu.list_dish,
            list_table: nextProps.menu.list_table,
            list_room: nextProps.menu.list_room
        });
    }

    setFilterPrice = () => {
        this.setState((prevState, props) => ({
            filterPrice: !prevState.filterPrice
        }));
    };
    setFilterTime = () => {
        this.setState((prevState, props) => ({
            filterTime: !prevState.filterTime
        }));
    };
    setFilterVote = () => {
        this.setState((prevState, props) => ({
            filterVote: !prevState.filterVote
        }));
    };
    setTabMenu = (tabMenu) => {
        this.setState((prevState, props) => {
            if(prevState.tabMenu !== tabMenu){
                switch (tabMenu) {
                    case 1:
                        this.props.loadedListDish();
                        break;
                    case 2:
                        this.props.loadedListTable();
                        break;
                    case 3:
                        break;
                    default:
                        break;
                }
                return {tabMenu};
            }
        });
    };

    render() {
        const {filterPrice, filterTime, filterVote, isFetching, list_dish, list_table, list_room, tabMenu} = this.state;
        const TabMenu = () => {
            switch (tabMenu) {
                case 1:
                    return list_dish.map((item) => {
                        return (
                            <Col key={item.id} lg="3" xs="6" className="dish-item">
                                <DishItemComponent key={item.id} item={item}/>
                            </Col>
                        );
                    });
                case 2:
                    return list_table.map((item) => {
                        return (
                            <Col key={item.id} lg="3" xs="6" className="dish-item">
                                <TableItemComponent key={item.id} item={item}/>
                            </Col>
                        );
                    });
                case 3:
                    return list_room.map((item) => {
                        return (
                            <Col key={item.id} lg="3" xs="6" className="dish-item">
                                <DishItemComponent key={item.id} item={item}/>
                            </Col>
                        );
                    });
                default:
                    return "";
            }
        };
        return (
            <>
                <Row className="menu-container">
                    <Col lg="3" xs="12">
                        <div className="dish-menu">
                            <div className="menu-header">
                                MENU
                            </div>
                            <div className="menu-body">
                                <div className="menu-item" onClick={() => this.setTabMenu(1)}>
                                    Danh sách món
                                </div>
                                <div className="menu-item" onClick={() => this.setTabMenu(2)}>
                                    Danh sách bàn
                                </div>
                                <div className="menu-item" onClick={() => this.setTabMenu(3)}>
                                    Danh sách phòng
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="9" xs="12">
                        <Row className="menu-filter">
                            <div className="item-menu-filter">
                                <ButtonDropdown isOpen={filterPrice} toggle={this.setFilterPrice}>
                                    <DropdownToggle caret size="sm">
                                        Lọc theo giá
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Từ thấp đến cao</DropdownItem>
                                        <DropdownItem>Từ cao đến thấp</DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </div>
                            <div className="item-menu-filter">
                                <ButtonDropdown isOpen={filterTime} toggle={this.setFilterTime}>
                                    <DropdownToggle caret size="sm">
                                        Lọc theo thời gian
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Từ mới đến cũ</DropdownItem>
                                        <DropdownItem>Từ cũ đến mới</DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </div>
                            <div className="item-menu-filter">
                                <ButtonDropdown isOpen={filterVote} toggle={this.setFilterVote}>
                                    <DropdownToggle caret size="sm">
                                        Lọc theo đánh giá
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Từ thấp đến cao</DropdownItem>
                                        <DropdownItem>Từ cao đến thấp</DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </div>
                        </Row>
                        <Row>
                            {
                                isFetching ? <Spinner color="danger" /> : <TabMenu/>
                            }
                        </Row>
                        <Row className="menu-pagination">
                        <Pagination aria-label="Page navigation example">
                            <PaginationItem disabled>
                                <PaginationLink previous href="#" />
                            </PaginationItem>
                            <PaginationItem active>
                                <PaginationLink href="#">
                                    1
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                    2
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                    3
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                    4
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                    5
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink next href="#" />
                            </PaginationItem>
                        </Pagination>
                        </Row>
                    </Col>
                </Row>
            </>
        );
    }
}

MenuComponent.defaultProps = {
    list_dish: [],
    list_table: [],
    list_room: []
};
const mapStateToProps = function (state) {
    return {
        menu: state.menu
    }
};
const mapDispatchToProps = {
    loadedListDish: loadedListDish,
    loadedListTable: loadedListTable
};
export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent)