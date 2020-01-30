import { connect } from 'react-redux'
import Test from './Test.jsx'
import { INCREMENT, DECREMENT } from '../store/actions.types'

const mapStateToProps = state => {
    return {
        count: state.count
    }
}



function createAdd() {
    return {
        type: INCREMENT
    }
}
function createAddAsync() {
    return new Promise(reslove => {
        setTimeout(() => {
            // Yay! Can invoke sync or async actions with `dispatch`
            reslove(createAdd());
        }, 500);
    });
}

const mapDispatchToProps = dispatch => {
    return {
        add: () => {
            dispatch(createAddAsync())
        },
        jian: () => {
            dispatch({
                type: DECREMENT
            })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Test)