import '../main.scss';
import _ from 'lodash';

const getName = (name) => {
    console.log(_.join(['Index', 'module', 'loaded!!', name], ' '));
}

getName("Bikash Katwal")