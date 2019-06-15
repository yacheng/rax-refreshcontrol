import { createElement } from 'rax';
import { RecyclerViewProps } from './types';
import { isWeex } from 'universal-env';

const RefreshControl = (props:RecyclerViewProps) => {
  if (isWeex) {
    const displayRefresh = props.refreshing ? 'show' : 'hide';
    return (
      <refresh {...this.props} display={displayRefresh} >
        {this.props.children}
      </refresh>
    );
  } else {
    return null;
  }
};

export default RefreshControl;
