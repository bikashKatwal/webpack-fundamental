import _ from 'lodash';

const getName = (name) => {
    console.log(_.join(['Sum', 'module', 'loaded!!', name], ' '));
}

getName("Deepa Adhikari")