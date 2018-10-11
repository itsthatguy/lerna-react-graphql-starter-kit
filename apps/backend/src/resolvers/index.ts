import ScalarDate from './Type/Date';
import Mutation from './Mutation';
import Query from './Query';

declare var console;

export default () => {
  try {
    return {
      Query,
      Date: ScalarDate,
      Mutation,
    };
  } catch (error) {
    console.error(error);
  }
};
