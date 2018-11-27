// FilterButton.js
import {connect} from 'react-redux'
import {setVisibilityFilter} from '../actions/actions'
import FilterButton from '../components/FilterButton'

const mapStateToProps = (state, ownProps) => ({
	active: state.visibilityFilter === ownProps.filter
}) 

const mapDispatchToProps = (dispatch) => ({
	setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FilterButton)
